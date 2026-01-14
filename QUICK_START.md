# 🚀 EnglishToday - Resumo Rápido

## O que é?
Aplicação serverless para aprendizado de inglês com 20 frases diárias geradas automaticamente.

## Arquitetura
```
EventBridge → Lambda (gera frases) → DynamoDB
                                        ↓
Frontend (Amplify) ← API Gateway ← Lambda (busca frases)
```

## Custos
- **Desenvolvimento**: $0 (Free Tier)
- **Produção**: $0.60-2.60/mês
- **95% mais barato** que EC2

## Deploy
1. Siga: `AWS_MANUAL_SETUP.md`
2. Configure manualmente no console AWS
3. Deploy frontend no Amplify

## Tecnologias
- Frontend: React + Vite + Amplify
- Backend: Lambda + DynamoDB + API Gateway
- Automação: EventBridge (diário às 00:00 UTC)

## Estrutura
```
/src              → Frontend React
/lambdas          → Funções Lambda
  /generateDailyPhrases
  /getDailyPhrases
AWS_MANUAL_SETUP.md → Guia completo
```

## Próximos Passos
1. ✅ Código pronto
2. ⏳ Configurar AWS (manual)
3. ⏳ Deploy Amplify
4. ⏳ Testar em produção

---

**Para Portfolio**: Demonstra conhecimento em arquitetura serverless, AWS, e custos otimizados.