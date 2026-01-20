import React from 'react'
import './EnglishGuide.css'

function EnglishGuide() {
  return (
    <div className="english-guide-page">
      <div className="container">
        <div className="guide-content">
          <h1 className="page-title">Como Realmente Aprender Inglês</h1>
          <p className="page-subtitle">
            Esqueça tudo que te ensinaram sobre aprender idiomas. Aqui está a verdade que ninguém te conta.
          </p>

          {/* Introdução */}
          <section className="intro-section">
            <div className="intro-card">
              <p className="intro-text">
                Aprender um idioma não é sobre decorar regras gramaticais ou fazer exercícios repetitivos. 
                É sobre <strong>expor seu cérebro ao idioma de forma consistente</strong> até que ele comece a 
                reconhecer padrões naturalmente — exatamente como você aprendeu português quando era criança.
              </p>
              <p className="intro-text">
                A diferença é que agora você pode acelerar esse processo usando as ferramentas certas. 
                Este guia vai te mostrar <strong>os 4 pilares</strong> que realmente funcionam:
              </p>
              <div className="pillars-preview">
                <div className="pillar-item">
                  <span className="pillar-icon">📚</span>
                  <span>Core Vocabulário</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">🔁</span>
                  <span>Revisão Espaçada</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">🎧</span>
                  <span>Imersão</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">🗣️</span>
                  <span>Output</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pilar 1: Core Vocabulário */}
          <section id="vocabulario" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">1</span>
              <h2>Core Vocabulário: O Segredo dos Números</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                Aqui está um fato que vai mudar sua perspectiva: você <strong>não precisa saber todas as palavras</strong> do inglês para ser fluente.
              </p>

              <div className="vocab-insight">
                <div className="vocab-stat">
                  <div className="stat-number">~170.000</div>
                  <div className="stat-label">palavras existem no inglês</div>
                </div>
                <div className="vocab-arrow">→</div>
                <div className="vocab-stat highlight-stat">
                  <div className="stat-number">~3.000</div>
                  <div className="stat-label">palavras cobrem 95% do uso diário</div>
                </div>
              </div>

              <p>
                Isso significa que se você dominar as <strong>3.000 palavras mais frequentes</strong>, 
                você vai entender praticamente tudo que ouve e lê no dia a dia. Nativos usam essas mesmas 
                palavras repetidamente — eles apenas as combinam de formas diferentes.
              </p>

              <div className="vocab-breakdown">
                <h4>Quanto cada grupo de palavras representa:</h4>
                <div className="breakdown-grid">
                  <div className="breakdown-item">
                    <div className="breakdown-words">100 palavras</div>
                    <div className="breakdown-bar">
                      <div className="bar-fill" style={{width: '50%'}}></div>
                    </div>
                    <div className="breakdown-percent">~50% de tudo que você ouve/lê</div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-words">1.000 palavras</div>
                    <div className="breakdown-bar">
                      <div className="bar-fill" style={{width: '80%'}}></div>
                    </div>
                    <div className="breakdown-percent">~80% de tudo que você ouve/lê</div>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-words">3.000 palavras</div>
                    <div className="breakdown-bar">
                      <div className="bar-fill" style={{width: '95%'}}></div>
                    </div>
                    <div className="breakdown-percent">~95% de tudo que você ouve/lê</div>
                  </div>
                </div>
              </div>

              <div className="key-insight">
                <div className="insight-icon">💡</div>
                <div className="insight-content">
                  <strong>A sacada:</strong> Não estude palavras aleatórias. Foque nas mais frequentes primeiro. 
                  Cada palavra do "core vocabulary" aparece centenas de vezes por dia em conteúdo real. 
                  Palavras raras? Você pode aprender quando encontrar naturalmente.
                </div>
              </div>

              <p>
                Mas aqui está o problema: saber uma palavra não é só conhecer sua tradução. 
                Você precisa saber como ela é usada <strong>em contexto</strong> — em frases reais, 
                com as palavras que normalmente vêm junto. É aí que entra a ferramenta mais poderosa 
                para aprendizado de vocabulário...
              </p>
            </div>
          </section>

          {/* Pilar 2: Anki */}
          <section id="anki" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">2</span>
              <h2>Anki: Como Nunca Mais Esquecer</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                De nada adianta aprender 1.000 palavras se você vai esquecer 900 delas. O <strong>Anki</strong> resolve 
                esse problema usando ciência cognitiva a seu favor.
              </p>

              <div className="anki-explanation">
                <h4>Como funciona a Repetição Espaçada:</h4>
                <p>
                  Seu cérebro esquece informações em um padrão previsível. O Anki usa isso: ele te mostra 
                  cada card <strong>exatamente no momento em que você está prestes a esquecer</strong>. 
                  Isso significa menos tempo estudando e mais retenção.
                </p>

                <div className="forgetting-curve">
                  <div className="curve-visual">
                    <div className="curve-label">Sem revisão:</div>
                    <div className="curve-bars forget">
                      <div className="mini-bar" style={{height: '100%'}}></div>
                      <div className="mini-bar" style={{height: '60%'}}></div>
                      <div className="mini-bar" style={{height: '35%'}}></div>
                      <div className="mini-bar" style={{height: '20%'}}></div>
                      <div className="mini-bar" style={{height: '10%'}}></div>
                    </div>
                    <div className="curve-result">→ Esquece 90%</div>
                  </div>
                  <div className="curve-visual">
                    <div className="curve-label">Com Anki:</div>
                    <div className="curve-bars remember">
                      <div className="mini-bar" style={{height: '100%'}}></div>
                      <div className="mini-bar" style={{height: '95%'}}></div>
                      <div className="mini-bar" style={{height: '90%'}}></div>
                      <div className="mini-bar" style={{height: '92%'}}></div>
                      <div className="mini-bar" style={{height: '90%'}}></div>
                    </div>
                    <div className="curve-result">→ Retém 90%+</div>
                  </div>
                </div>
              </div>

              <div className="anki-tips">
                <h4>Como usar o Anki corretamente:</h4>
                <div className="tips-grid">
                  <div className="tip-item">
                    <div className="tip-icon">✅</div>
                    <div className="tip-text">
                      <strong>Frases, não palavras</strong><br/>
                      Coloque frases completas nos cards. "She's running late" é muito melhor que "late = atrasado".
                    </div>
                  </div>
                  <div className="tip-item">
                    <div className="tip-icon">✅</div>
                    <div className="tip-text">
                      <strong>Extraia do que você consome</strong><br/>
                      Pegue frases de séries, vídeos e textos que você assistiu. Isso cria "memória real".
                    </div>
                  </div>
                  <div className="tip-item">
                    <div className="tip-icon">✅</div>
                    <div className="tip-text">
                      <strong>10-20 cards novos por dia</strong><br/>
                      Menos é mais. Consistência diária supera quantidade. Não se sobrecarregue.
                    </div>
                  </div>
                  <div className="tip-item">
                    <div className="tip-icon">✅</div>
                    <div className="tip-text">
                      <strong>Revise todo dia (10-15 min)</strong><br/>
                      Não pule dias. O algoritmo depende de você revisar quando ele pede.
                    </div>
                  </div>
                </div>
              </div>

              <div className="tool-cta">
                <div className="tool-info">
                  <h4>🔗 Baixe o Anki</h4>
                  <p>Gratuito para PC, Mac e Android. Pago apenas no iOS.</p>
                </div>
                <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer" className="tool-button">
                  apps.ankiweb.net →
                </a>
              </div>
            </div>
          </section>

          {/* Pilar 3: Imersão */}
          <section id="imersao" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">3</span>
              <h2>Imersão: Treinando Seu Ouvido</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                Vocabulário te dá as peças. <strong>Imersão</strong> te ensina a montá-las. Seu cérebro precisa de 
                <strong> horas e horas</strong> de exposição para começar a processar o idioma automaticamente.
              </p>

              <div className="hours-reality">
                <h4>A realidade das horas necessárias:</h4>
                <p>
                  Estudos mostram que para atingir fluência conversacional (B2), você precisa de aproximadamente 
                  <strong> 500-600 horas</strong> de exposição de qualidade ao idioma. Parece muito? Veja por outro ângulo:
                </p>

                <div className="hours-calculation">
                  <div className="calc-item">
                    <div className="calc-time">1 hora/dia</div>
                    <div className="calc-equals">=</div>
                    <div className="calc-result">B2 em ~18 meses</div>
                  </div>
                  <div className="calc-item">
                    <div className="calc-time">2 horas/dia</div>
                    <div className="calc-equals">=</div>
                    <div className="calc-result">B2 em ~9 meses</div>
                  </div>
                  <div className="calc-item highlight-calc">
                    <div className="calc-time">3 horas/dia</div>
                    <div className="calc-equals">=</div>
                    <div className="calc-result">B2 em ~6 meses</div>
                  </div>
                </div>
              </div>

              <div className="immersion-key">
                <h4>O segredo da imersão efetiva:</h4>
                <p>
                  Não é qualquer exposição que conta. Assistir algo sem entender nada é inútil. 
                  A regra é: você deve entender <strong>70-90% do conteúdo</strong>. Se está entendendo menos, 
                  o material é difícil demais. Se está entendendo tudo, pode subir o nível.
                </p>

                <div className="comprehension-scale">
                  <div className="scale-item bad">
                    <div className="scale-percent">&lt;50%</div>
                    <div className="scale-label">Ruído — não aprende</div>
                  </div>
                  <div className="scale-item ok">
                    <div className="scale-percent">50-70%</div>
                    <div className="scale-label">Difícil — use legendas</div>
                  </div>
                  <div className="scale-item good">
                    <div className="scale-percent">70-90%</div>
                    <div className="scale-label">Ideal — zona de aprendizado</div>
                  </div>
                  <div className="scale-item easy">
                    <div className="scale-percent">&gt;90%</div>
                    <div className="scale-label">Fácil — aumente o desafio</div>
                  </div>
                </div>
              </div>

              <div className="language-reactor-section">
                <h4>🎬 Language Reactor: Sua arma secreta</h4>
                <p>
                  O <strong>Language Reactor</strong> transforma Netflix e YouTube em ferramentas de estudo. 
                  É a ponte perfeita entre "não entendo nada" e "imersão pura".
                </p>

                <div className="lr-features">
                  <div className="lr-feature">
                    <div className="lr-icon">📝</div>
                    <div className="lr-text">
                      <strong>Legendas duplas</strong>
                      <span>Inglês + português ao mesmo tempo</span>
                    </div>
                  </div>
                  <div className="lr-feature">
                    <div className="lr-icon">🔍</div>
                    <div className="lr-text">
                      <strong>Dicionário instantâneo</strong>
                      <span>Clique em qualquer palavra para ver tradução</span>
                    </div>
                  </div>
                  <div className="lr-feature">
                    <div className="lr-icon">🔄</div>
                    <div className="lr-text">
                      <strong>Repetição de frases</strong>
                      <span>Repita quantas vezes precisar com um clique</span>
                    </div>
                  </div>
                  <div className="lr-feature">
                    <div className="lr-icon">📤</div>
                    <div className="lr-text">
                      <strong>Exporta para Anki</strong>
                      <span>Salve frases direto para seus flashcards</span>
                    </div>
                  </div>
                </div>

                <div className="tool-cta">
                  <div className="tool-info">
                    <h4>🔗 Instale o Language Reactor</h4>
                    <p>Extensão gratuita para Chrome. Funciona com Netflix e YouTube.</p>
                  </div>
                  <a href="https://www.languagereactor.com/" target="_blank" rel="noreferrer" className="tool-button">
                    languagereactor.com →
                  </a>
                </div>
              </div>

              <div className="key-insight">
                <div className="insight-icon">🎯</div>
                <div className="insight-content">
                  <strong>Rotina de imersão sugerida:</strong> 30-60 min/dia de conteúdo com Language Reactor. 
                  Capture 5-10 frases úteis por sessão e leve para o Anki. Em poucos meses, você vai começar 
                  a entender sem precisar das legendas em português.
                </div>
              </div>
            </div>
          </section>

          {/* Pilar 4: Output */}
          <section id="output" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">4</span>
              <h2>Output: De Passivo para Ativo</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                Entender é uma coisa. <strong>Produzir</strong> é outra. Você pode assistir 1000 horas de conteúdo 
                e ainda travar na hora de falar. Output é onde você transforma conhecimento passivo em habilidade ativa.
              </p>

              <div className="output-types">
                <h4>Os dois tipos de output:</h4>
                <div className="output-grid">
                  <div className="output-item">
                    <div className="output-icon">✍️</div>
                    <h5>Escrita</h5>
                    <p>
                      Comece por aqui. Você tem tempo para pensar, pode consultar dicionário, e errar não tem pressão.
                    </p>
                    <ul>
                      <li>Diário em inglês (5-10 linhas/dia)</li>
                      <li>Comentários em vídeos/posts</li>
                      <li>Mensagens em comunidades</li>
                    </ul>
                  </div>
                  <div className="output-item">
                    <div className="output-icon">🗣️</div>
                    <h5>Fala</h5>
                    <p>
                      Depois que escrever ficar confortável, passe para a fala. É onde a fluência realmente se constrói.
                    </p>
                    <ul>
                      <li>Shadowing (repetir junto com áudio)</li>
                      <li>Falar sozinho descrevendo seu dia</li>
                      <li>Conversas com nativos/outros estudantes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="output-progression">
                <h4>Quando começar o output:</h4>
                <div className="progression-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <strong>Mês 1-2:</strong> Foco em input. Escrita leve (1-2 frases/dia).
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <strong>Mês 3-4:</strong> Aumente escrita (5-10 linhas/dia). Comece shadowing.
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <strong>Mês 5+:</strong> Conversas reais 2-3x por semana. Apps como HelloTalk e Tandem.
                    </div>
                  </div>
                </div>
              </div>

              <div className="output-tools">
                <h4>Ferramentas para praticar output:</h4>
                <div className="tools-mini-grid">
                  <a href="https://www.hellotalk.com/" target="_blank" rel="noreferrer" className="tool-mini">
                    <strong>HelloTalk</strong>
                    <span>Chat com nativos</span>
                  </a>
                  <a href="https://www.tandem.net/" target="_blank" rel="noreferrer" className="tool-mini">
                    <strong>Tandem</strong>
                    <span>Troca de idiomas</span>
                  </a>
                  <a href="https://www.italki.com/" target="_blank" rel="noreferrer" className="tool-mini">
                    <strong>iTalki</strong>
                    <span>Aulas com tutores</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Teoria e Gramática */}
          <section id="teoria" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">+</span>
              <h2>E a Gramática? Onde Entra a Teoria?</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                Teoria não é o inimigo — <strong>só não deve ser o foco principal</strong>. Use gramática como 
                ferramenta de suporte, não como base do estudo.
              </p>

              <div className="grammar-approach">
                <div className="approach-item">
                  <div className="approach-icon">❌</div>
                  <div className="approach-content">
                    <strong>Abordagem errada:</strong>
                    <p>Decorar regras → tentar aplicar → frustrção quando não funciona na prática.</p>
                  </div>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">✅</div>
                  <div className="approach-content">
                    <strong>Abordagem certa:</strong>
                    <p>Consumir conteúdo → notar padrões → estudar a regra para confirmar → voltar a consumir.</p>
                  </div>
                </div>
              </div>

              <div className="grammar-tips">
                <h4>Quando estudar teoria:</h4>
                <ul className="grammar-list">
                  <li>Quando você perceber um padrão que não entende (ex: por que às vezes é "has" e às vezes é "have")</li>
                  <li>Quando errar a mesma coisa repetidamente no output</li>
                  <li>Quando quiser acelerar a compreensão de algo que já está aparecendo na imersão</li>
                </ul>
              </div>

              <div className="key-insight">
                <div className="insight-icon">📖</div>
                <div className="insight-content">
                  <strong>Proporção sugerida:</strong> 80-90% do seu tempo em input/output, 10-20% em teoria. 
                  Gramática deve esclarecer o que você já está vendo, não ensinar do zero.
                </div>
              </div>
            </div>
          </section>

          {/* Curva de Aprendizado */}
          <section id="curva" className="pillar-section">
            <div className="pillar-header">
              <span className="pillar-number">📈</span>
              <h2>A Curva de Aprendizado: O Que Esperar</h2>
            </div>
            <div className="info-card">
              <p className="highlight-intro">
                A evolução <strong>não é linear</strong>. Entender isso vai te salvar de desistir no momento errado.
              </p>

              <div className="curve-visualization">
                <div className="curve-phase phase-1">
                  <div className="phase-header">
                    <span className="phase-name">Fase 1: Lua de Mel</span>
                    <span className="phase-time">Semanas 1-8</span>
                  </div>
                  <div className="phase-description">
                    <p>
                      Tudo é novo e empolgante. Você aprende palavras básicas rapidamente e sente 
                      progresso visível toda semana. É a fase mais motivadora.
                    </p>
                    <div className="phase-progress">
                      <div className="progress-label">Sensação de progresso:</div>
                      <div className="progress-bar">
                        <div className="progress-fill high"></div>
                      </div>
                      <span>Alta</span>
                    </div>
                  </div>
                </div>

                <div className="curve-phase phase-2">
                  <div className="phase-header">
                    <span className="phase-name">Fase 2: O Platô</span>
                    <span className="phase-time">Meses 3-12</span>
                  </div>
                  <div className="phase-description">
                    <p>
                      Aqui é onde a maioria desiste. O progresso fica invisível, parece que você 
                      estagnou. <strong>Mas você não estagnou</strong> — seu cérebro está consolidando. 
                      As conexões neurais estão se fortalecendo nos bastidores.
                    </p>
                    <div className="phase-progress">
                      <div className="progress-label">Sensação de progresso:</div>
                      <div className="progress-bar">
                        <div className="progress-fill low"></div>
                      </div>
                      <span>Baixa (mas real!)</span>
                    </div>
                  </div>
                </div>

                <div className="curve-phase phase-3">
                  <div className="phase-header">
                    <span className="phase-name">Fase 3: O Clique</span>
                    <span className="phase-time">Mês 12+</span>
                  </div>
                  <div className="phase-description">
                    <p>
                      De repente, coisas começam a fazer sentido sem esforço. Você entende piadas, 
                      pega referências, responde sem traduzir na cabeça. O inglês começa a se tornar 
                      uma segunda natureza.
                    </p>
                    <div className="phase-progress">
                      <div className="progress-label">Sensação de progresso:</div>
                      <div className="progress-bar">
                        <div className="progress-fill medium"></div>
                      </div>
                      <span>Constante</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="plateau-survival">
                <h4>⚠️ Como sobreviver ao platô:</h4>
                <ul className="survival-list">
                  <li><strong>Confie no processo</strong> — o progresso está acontecendo mesmo que você não sinta</li>
                  <li><strong>Mude o conteúdo, não o método</strong> — se enjoou, troque as séries, não abandone a imersão</li>
                  <li><strong>Meça de forma diferente</strong> — conte horas de exposição, não "nível de fluência"</li>
                  <li><strong>Volte para conteúdo antigo</strong> — assista algo que era difícil há 2 meses e veja a diferença</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resumo Final */}
          <section id="resumo" className="summary-section">
            <h2 className="section-title">🎯 Resumo: Sua Rotina Ideal</h2>
            <div className="summary-card">
              <p className="summary-intro">
                Juntando tudo, aqui está uma rotina diária que funciona:
              </p>

              <div className="routine-grid">
                <div className="routine-item">
                  <div className="routine-time">10-15 min</div>
                  <div className="routine-task">Anki</div>
                  <div className="routine-desc">Revisar cards + adicionar novos</div>
                </div>
                <div className="routine-item">
                  <div className="routine-time">30-60 min</div>
                  <div className="routine-task">Imersão</div>
                  <div className="routine-desc">Vídeos/séries com Language Reactor</div>
                </div>
                <div className="routine-item">
                  <div className="routine-time">10-15 min</div>
                  <div className="routine-task">Output</div>
                  <div className="routine-desc">Escrever ou falar usando o que aprendeu</div>
                </div>
              </div>

              <div className="total-time">
                <strong>Total:</strong> 50-90 minutos por dia
              </div>

              <div className="final-message">
                <p>
                  <strong>A consistência bate a intensidade.</strong> 45 minutos todo dia é muito melhor 
                  que 5 horas no fim de semana. Seu cérebro precisa de exposição regular para criar as 
                  conexões necessárias.
                </p>
                <p>
                  Não existe atalho. Mas seguindo esse método, você <strong>vai</strong> chegar lá. 
                  Milhares de pessoas já chegaram — a diferença entre elas e quem desistiu foi apenas 
                  <strong> continuar</strong>.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default EnglishGuide
