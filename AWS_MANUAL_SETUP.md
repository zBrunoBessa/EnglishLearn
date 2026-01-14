# 🚀 Guia de Deploy Manual - AWS Serverless

## 📋 Visão Geral da Arquitetura

```
┌─────────────────┐
│   Amplify       │ ← Frontend React (Hosting)
│   Hosting       │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  API Gateway    │ ← Endpoint REST público
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Lambda:         │ ← Busca frases do dia
│ getDailyPhrases │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   DynamoDB      │ ← Armazena frases
│  PhrasesTable   │
└────────┬────────┘
         ↑
         │
┌─────────────────┐
│  EventBridge    │ ← Trigger diário (00:00 UTC)
│   Scheduler     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Lambda:         │ ← Gera 20 frases/dia
│ generateDaily   │
└─────────────────┘
```

---

## 📝 PASSO 1: Criar DynamoDB Table

### 1.1 Acessar DynamoDB Console
- Vá para: https://console.aws.amazon.com/dynamodb
- Clique em **"Create table"**

### 1.2 Configurações da Tabela
```
Table name: EnglishPhrases
Partition key: date (String)
Sort key: id (Number)

Table settings: Default settings
Capacity mode: On-demand (pay per request)
```

### 1.3 Criar Índice (Opcional)
- Não necessário para este caso

### 1.4 Anotar ARN
```
Exemplo: arn:aws:dynamodb:us-east-1:123456789012:table/EnglishPhrases
```

---

## 📝 PASSO 2: Criar IAM Role para Lambdas

### 2.1 Acessar IAM Console
- Vá para: https://console.aws.amazon.com/iam
- Clique em **"Roles"** → **"Create role"**

### 2.2 Configurar Role
```
Trusted entity type: AWS service
Use case: Lambda
```

### 2.3 Adicionar Policies
Selecione as seguintes policies:
- ✅ `AWSLambdaBasicExecutionRole` (logs)
- ✅ `AmazonDynamoDBFullAccess` (ou criar custom policy)

### 2.4 Custom Policy (Recomendado - Menor Privilégio)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:Query",
        "dynamodb:BatchWriteItem",
        "dynamodb:PutItem"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:*:table/EnglishPhrases"
    }
  ]
}
```

### 2.5 Nome da Role
```
Role name: EnglishPhrasesLambdaRole
```

### 2.6 Anotar ARN
```
Exemplo: arn:aws:iam::123456789012:role/EnglishPhrasesLambdaRole
```

---

## 📝 PASSO 3: Criar Lambda - generateDailyPhrases

### 3.1 Acessar Lambda Console
- Vá para: https://console.aws.amazon.com/lambda
- Clique em **"Create function"**

### 3.2 Configurações Básicas
```
Function name: generateDailyPhrases
Runtime: Python 3.12
Architecture: x86_64
Execution role: Use existing role → EnglishPhrasesLambdaRole
```

### 3.3 Upload do Código
1. Baixe o código de `lambdas/generateDailyPhrases/`
2. Crie ZIP:
   ```bash
   # Windows
   cd lambdas/generateDailyPhrases
   tar -a -c -f generateDailyPhrases.zip lambda_function.py
   
   # Linux/Mac
   cd lambdas/generateDailyPhrases
   zip generateDailyPhrases.zip lambda_function.py
   ```
3. No console Lambda: **"Upload from"** → **".zip file"**

### 3.4 Configurar Environment Variables
```
Key: PHRASES_TABLE_NAME
Value: EnglishPhrases
```

### 3.5 Configurações Avançadas
```
Memory: 256 MB
Timeout: 30 seconds
```

### 3.6 Testar Lambda
- Clique em **"Test"**
- Event JSON: `{}`
- Execute e verifique logs

---

## 📝 PASSO 4: Criar Lambda - getDailyPhrases

### 4.1 Repetir Processo
```
Function name: getDailyPhrases
Runtime: Python 3.12
Execution role: EnglishPhrasesLambdaRole
```

### 4.2 Upload do Código
```bash
cd lambdas/getDailyPhrases
zip getDailyPhrases.zip lambda_function.py
```

### 4.3 Environment Variables
```
Key: PHRASES_TABLE_NAME
Value: EnglishPhrases
```

### 4.4 Testar Lambda
- Verifique se retorna as frases do DynamoDB

---

## 📝 PASSO 5: Criar API Gateway

### 5.1 Acessar API Gateway Console
- Vá para: https://console.aws.amazon.com/apigateway
- Clique em **"Create API"**
- Escolha: **REST API** (não private)

### 5.2 Configurações da API
```
API name: EnglishPhrasesAPI
Description: API for daily English phrases
Endpoint Type: Regional
```

### 5.3 Criar Resource
```
Resource Name: phrases
Resource Path: /phrases
Enable CORS: Yes
```

### 5.4 Criar Method GET
1. Selecione `/phrases`
2. **"Create Method"** → **GET**
3. Configurações:
   ```
   Integration type: Lambda Function
   Lambda Region: us-east-1
   Lambda Function: getDailyPhrases
   Use Lambda Proxy integration: Yes
   ```

### 5.5 Enable CORS
1. Selecione `/phrases`
2. **"Enable CORS"**
3. Confirme

### 5.6 Deploy API
1. **"Deploy API"**
2. Stage name: `prod`
3. Anotar URL:
   ```
   Exemplo: https://abc123.execute-api.us-east-1.amazonaws.com/prod
   ```

---

## 📝 PASSO 6: Configurar EventBridge Scheduler

### 6.1 Acessar EventBridge Console
- Vá para: https://console.aws.amazon.com/events
- Clique em **"Rules"** → **"Create rule"**

### 6.2 Configurações da Rule
```
Name: DailyPhrasesGenerator
Description: Generates 20 phrases daily at midnight UTC
Event bus: default
Rule type: Schedule
```

### 6.3 Schedule Pattern
```
Schedule type: Cron-based schedule
Cron expression: 0 0 * * ? *
```
(Executa todo dia às 00:00 UTC)

### 6.4 Target
```
Target type: AWS service
Select a target: Lambda function
Function: generateDailyPhrases
```

### 6.5 Criar Rule
- Clique em **"Create"**

### 6.6 Testar Manualmente
1. Vá para Lambda `generateDailyPhrases`
2. Clique em **"Test"**
3. Verifique DynamoDB se as frases foram criadas

---

## 📝 PASSO 7: Deploy Frontend no Amplify

### 7.1 Preparar Frontend
1. Atualizar `src/config.js`:
   ```javascript
   export const API_URL = 'https://abc123.execute-api.us-east-1.amazonaws.com/prod';
   ```

2. Build local:
   ```bash
   npm run build
   ```

### 7.2 Acessar Amplify Console
- Vá para: https://console.aws.amazon.com/amplify
- Clique em **"New app"** → **"Host web app"**

### 7.3 Opção 1: Deploy via Git
```
1. Conecte seu repositório GitHub
2. Branch: main
3. Build settings (auto-detectado):
   - Build command: npm run build
   - Output directory: dist
4. Deploy
```

### 7.4 Opção 2: Deploy Manual
```
1. Escolha "Deploy without Git"
2. App name: englishtoday
3. Environment: production
4. Drag & drop a pasta dist/
```

### 7.5 Configurar Environment Variables (Amplify)
```
Key: VITE_API_URL
Value: https://abc123.execute-api.us-east-1.amazonaws.com/prod
```

### 7.6 Rebuild
- Clique em **"Redeploy this version"**

### 7.7 Anotar URL
```
Exemplo: https://main.d1234abcd.amplifyapp.com
```

---

## 📝 PASSO 8: Configurar Custom Domain (Opcional)

### 8.1 No Amplify Console
- Vá para **"Domain management"**
- Clique em **"Add domain"**

### 8.2 Configurar DNS
```
Domain: seudominio.com
Subdomain: www (opcional)
```

### 8.3 Verificar SSL
- Amplify provisiona SSL automaticamente
- Aguarde ~15 minutos

---

## ✅ CHECKLIST FINAL

### DynamoDB
- [ ] Tabela `EnglishPhrases` criada
- [ ] Partition key: `date` (String)
- [ ] Sort key: `id` (Number)

### IAM
- [ ] Role `EnglishPhrasesLambdaRole` criada
- [ ] Permissions para DynamoDB configuradas

### Lambdas
- [ ] `generateDailyPhrases` criada e testada
- [ ] `getDailyPhrases` criada e testada
- [ ] Environment variables configuradas

### API Gateway
- [ ] API `EnglishPhrasesAPI` criada
- [ ] Endpoint `/phrases` GET configurado
- [ ] CORS habilitado
- [ ] API deployada em `prod`

### EventBridge
- [ ] Rule `DailyPhrasesGenerator` criada
- [ ] Cron: `0 0 * * ? *` configurado
- [ ] Target: Lambda `generateDailyPhrases`

### Amplify
- [ ] App criada e deployada
- [ ] Environment variable `VITE_API_URL` configurada
- [ ] Site acessível

---

## 🧪 TESTES

### 1. Testar Lambda Generate
```bash
# No console Lambda, execute manualmente
# Verifique DynamoDB se 20 frases foram criadas
```

### 2. Testar Lambda Get
```bash
curl https://abc123.execute-api.us-east-1.amazonaws.com/prod/phrases
```

### 3. Testar Frontend
```
Acesse: https://main.d1234abcd.amplifyapp.com
Verifique se as frases aparecem
```

---

## 💰 CUSTO ESTIMADO

### Free Tier (12 meses)
- Lambda: 1M requests/mês grátis
- DynamoDB: 25 GB storage grátis
- API Gateway: 1M requests/mês grátis
- Amplify: 1000 build minutes grátis

### Após Free Tier
- Lambda: ~$0.00 (30 execuções/mês)
- DynamoDB: ~$0.25/mês
- API Gateway: ~$0.35/mês (1k requests)
- Amplify: ~$0-2/mês
- **Total: ~$0.60-2.60/mês**

---

## 🔧 TROUBLESHOOTING

### Lambda não acessa DynamoDB
- Verifique IAM Role permissions
- Verifique environment variable `PHRASES_TABLE_NAME`

### API Gateway retorna erro CORS
- Habilite CORS no método GET
- Verifique headers na Lambda response

### Frontend não carrega frases
- Verifique `VITE_API_URL` no Amplify
- Verifique console do browser (F12)
- Teste API diretamente com curl

### EventBridge não dispara Lambda
- Verifique cron expression
- Verifique permissions da Rule
- Aguarde até meia-noite UTC

---

## 📞 RECURSOS

- [DynamoDB Console](https://console.aws.amazon.com/dynamodb)
- [Lambda Console](https://console.aws.amazon.com/lambda)
- [API Gateway Console](https://console.aws.amazon.com/apigateway)
- [Amplify Console](https://console.aws.amazon.com/amplify)
- [EventBridge Console](https://console.aws.amazon.com/events)

---

**Boa sorte com o deploy! 🚀**