import React from 'react'
import './EnglishGuide.css'

function EnglishGuide() {
  return (
    <div className="english-guide-page">
      <div className="container">
        <div className="guide-content">
          <h1 className="page-title">English Guide</h1>
          <p className="page-subtitle">
            Guia direto ao ponto: fundamentos → etapas → níveis → curva → ferramentas.
          </p>

          <section id="sumario" className="info-section">
            <h2 className="section-title">🧭 Sumário (clique para ir direto)</h2>
            <div className="info-card toc-card">
              <p className="toc-intro">
                Aqui está o “mapa” do seu estudo. Siga na ordem para evoluir sem se perder.
              </p>

              <div className="toc-grid">
                <a className="toc-link" href="#como-funciona">
                  <div className="toc-title">Fundamentos do aprendizado</div>
                  <div className="toc-desc">Exposição + core vocabulário + revisão + uso.</div>
                </a>
                <a className="toc-link" href="#etapas">
                  <div className="toc-title">Plano gradual (A1 → C1)</div>
                  <div className="toc-desc">O que fazer em cada fase.</div>
                </a>
                <a className="toc-link" href="#anki">
                  <div className="toc-title">Revisão espaçada (Anki)</div>
                  <div className="toc-desc">Como revisar sem perder tempo.</div>
                </a>
                <a className="toc-link" href="#vocabulario">
                  <div className="toc-title">Core vocabulário e níveis</div>
                  <div className="toc-desc">Quantas palavras e o que esperar.</div>
                </a>
                <a className="toc-link" href="#imersao">
                  <div className="toc-title">Exposição e horas necessárias</div>
                  <div className="toc-desc">Tempo médio para A1–C2.</div>
                </a>
                <a className="toc-link" href="#curva">
                  <div className="toc-title">Curva de aprendizado</div>
                  <div className="toc-desc">Início rápido → platô → fluência.</div>
                </a>
                <a className="toc-link" href="#recursos">
                  <div className="toc-title">Ferramentas úteis (com links)</div>
                  <div className="toc-desc">Anki, Language Reactor, podcasts, troca de conversas.</div>
                </a>
              </div>
            </div>
          </section>

          <section id="resumo" className="info-section">
            <h2 className="section-title">🚀 Resumo: como aprender inglês de verdade</h2>
            <div className="info-card summary-card">
              <p className="summary-intro">
                Leia isso antes de qualquer coisa. Aqui está o método completo, passo a passo.
              </p>

              <div className="summary-step">
                <div className="summary-step-number">1</div>
                <div className="summary-step-content">
                  <h4>Foque no vocabulário mais frequente (core vocabulary)</h4>
                  <p>
                    As <strong>1000 palavras mais usadas</strong> cobrem cerca de 80% do que você ouve e lê no dia a dia.
                    Comece por elas. Não perca tempo com palavras raras no início.
                  </p>
                  <ul className="info-list">
                    <li><strong>Top 100:</strong> base de quase tudo (the, be, to, have, I, you, it, that…).</li>
                    <li><strong>101–500:</strong> destrava conversas simples e vídeos fáceis.</li>
                    <li><strong>501–1000:</strong> consolida leitura e escuta do dia a dia.</li>
                  </ul>
                </div>
              </div>

              <div className="summary-step">
                <div className="summary-step-number">2</div>
                <div className="summary-step-content">
                  <h4>Use o Anki para não esquecer</h4>
                  <p>
                    O <strong>Anki</strong> é um app de flashcards que usa <em>repetição espaçada</em>: ele mostra cada card
                    exatamente quando você está prestes a esquecer. Isso fixa o vocabulário com menos tempo de estudo.
                  </p>
                  <ul className="info-list">
                    <li><strong>O que colocar:</strong> frases curtas com contexto (não só palavras soltas).</li>
                    <li><strong>De onde tirar:</strong> do que você assistiu ou leu — cria "memória real".</li>
                    <li><strong>Quanto:</strong> 10–20 novos cards/dia + revisar todo dia (~10–15 min).</li>
                  </ul>
                  <p className="summary-link">
                    👉 <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer">Baixe o Anki aqui (apps.ankiweb.net)</a>
                  </p>
                </div>
              </div>

              <div className="summary-step">
                <div className="summary-step-number">3</div>
                <div className="summary-step-content">
                  <h4>Faça imersão com suporte (exposição compreensível)</h4>
                  <p>
                    Você precisa de <strong>exposição diária</strong> ao idioma. No começo, imersão "pura" frustra.
                    O ideal é entender 70–90% do que você consome. Use ferramentas de suporte.
                  </p>
                  <ul className="info-list">
                    <li><strong>Tempo mínimo:</strong> 30–60 min/dia de vídeos, séries ou podcasts em inglês.</li>
                    <li><strong>Regra:</strong> se não entende quase nada, o conteúdo está difícil demais.</li>
                    <li><strong>Capture:</strong> 5–10 frases úteis por sessão e leve para o Anki.</li>
                  </ul>
                </div>
              </div>

              <div className="summary-step">
                <div className="summary-step-number">4</div>
                <div className="summary-step-content">
                  <h4>Use o Language Reactor para estudar assistindo</h4>
                  <p>
                    O <strong>Language Reactor</strong> é uma extensão de navegador que transforma Netflix e YouTube
                    em ferramentas de estudo. Ele oferece legendas duplas, dicionário instantâneo e repetição de frases.
                  </p>
                  <ul className="info-list">
                    <li><strong>Legendas duplas:</strong> inglês + português ao mesmo tempo.</li>
                    <li><strong>Clique em palavras:</strong> veja tradução e ouça pronúncia.</li>
                    <li><strong>Repita frases:</strong> treine listening e capture vocabulário.</li>
                  </ul>
                  <p className="summary-link">
                    👉 <a href="https://www.languagereactor.com/" target="_blank" rel="noreferrer">Instale o Language Reactor (languagereactor.com)</a>
                  </p>
                </div>
              </div>

              <div className="summary-step">
                <div className="summary-step-number">5</div>
                <div className="summary-step-content">
                  <h4>Saiba quanto tempo leva (expectativas práticas)</h4>
                  <p>
                    Aprender inglês leva tempo. Estimativas realistas para quem estuda com consistência:
                  </p>
                  <ul className="info-list">
                    <li><strong>A2 (básico funcional):</strong> 3–6 meses com 1h/dia</li>
                    <li><strong>B1 (conversação):</strong> 6–12 meses com 1h/dia</li>
                    <li><strong>B2 (fluência prática):</strong> 1–2 anos com 1h/dia</li>
                    <li><strong>C1 (avançado):</strong> 2–3+ anos com exposição constante</li>
                  </ul>
                  <p>
                    Dobrando o tempo diário, você reduz o prazo pela metade. A chave é <strong>não parar</strong>.
                  </p>
                </div>
              </div>

              <div className="tip-box summary-tip">
                <strong>✅ Rotina mínima (45 min/dia):</strong><br />
                10 min Anki + 20 min vídeo com Language Reactor + 15 min escrever/falar usando o vocabulário do dia.
              </div>
            </div>
          </section>

          <section id="como-funciona" className="info-section">
            <h2 className="section-title">🧠 Fundamentos: o que realmente faz você aprender</h2>
            <div className="info-card">
              <h3>Sem isso, o progresso trava</h3>
              <p>
                Você aprende quando combina <strong>exposição compreensível</strong>, <strong>revisão inteligente</strong> e
                <strong> uso ativo</strong>. O atalho é focar no <strong>core vocabulário</strong>.
              </p>

              <div className="highlight-box">
                <h4>1) Exposição (input) diária</h4>
                <ul className="info-list">
                  <li><strong>Objetivo:</strong> entender 70–90% do conteúdo.</li>
                  <li><strong>Como:</strong> vídeos/textos com legenda em inglês + pausas para anotar.</li>
                  <li><strong>Regra prática:</strong> 20–40 min/dia de conteúdo compreensível.</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>2) Core vocabulário (frequência)</h4>
                <ul className="info-list">
                  <li><strong>Top 100:</strong> base de quase tudo que você vê/ouve.</li>
                  <li><strong>500–1000 palavras:</strong> destravam conversas simples.</li>
                  <li><strong>2000+ palavras:</strong> autonomia real no dia a dia.</li>
                </ul>
                <p>
                  Detalhe por nível em <a href="#vocabulario">Core Vocabulário</a>.
                </p>
              </div>

              <div className="highlight-box">
                <h4>3) Revisão + uso</h4>
                <ul className="info-list">
                  <li><strong>Revisão:</strong> Anki fixa palavras no momento certo.</li>
                  <li><strong>Output:</strong> 5–10 frases por dia usando o que você viu.</li>
                </ul>
                <p>
                  Veja <a href="#anki">Repetição espaçada</a>.
                </p>
              </div>

              <div className="tip-box">
                <strong>✅ Rotina mínima:</strong> 10 min Anki + 20 min input + 10 min escrever 5 frases.
              </div>
            </div>
          </section>

          <section id="etapas" className="info-section">
            <h2 className="section-title">🪜 Plano gradual (A1 → C1)</h2>
            <div className="info-card">
              <h3>Faça em etapas para não travar</h3>

              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <div className="step-body">
                    <h4>A1 (Base)</h4>
                    <p>Frases prontas + core vocabulário + hábito diário.</p>
                    <p className="step-meta"><strong>Meta:</strong> 300–700 palavras + 30 frases úteis.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <div className="step-body">
                    <h4>A2 → B1 (Consolidação)</h4>
                    <p>Mais input com suporte + revisão diária + output leve.</p>
                    <p className="step-meta"><strong>Meta:</strong> 5–10 linhas/dia e falar 2–3x/semana.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <div className="step-body">
                    <h4>B1 → B2 (Fluidez)</h4>
                    <p>Aumentar output e reduzir dependência do português.</p>
                    <p className="step-meta"><strong>Meta:</strong> conversação semanal + correção de erros recorrentes.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">4</div>
                  <div className="step-body">
                    <h4>C1+ (Refino)</h4>
                    <p>Nuance, vocabulário específico e compreensão avançada.</p>
                    <p className="step-meta"><strong>Meta:</strong> leitura/áudio complexos + escrita com feedback.</p>
                  </div>
                </div>
              </div>

              <div className="highlight-box">
                <h4>Rotina mínima (45 min/dia)</h4>
                <ul className="info-list">
                  <li><strong>10 min:</strong> Anki (revisões)</li>
                  <li><strong>20 min:</strong> Input com suporte</li>
                  <li><strong>15 min:</strong> Output (escrever/falar)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="anki" className="info-section">
            <h2 className="section-title">🔄 Repetição Espaçada (Anki)</h2>
            <div className="info-card">
              <h3>Use para não esquecer</h3>
              <p>
                O Anki mostra os cards exatamente quando você vai esquecer. Isso economiza tempo e fixa o vocabulário.
              </p>

              <div className="highlight-box">
                <h4>Uso direto ao ponto</h4>
                <ul className="info-list">
                  <li><strong>10–20 novos cards/dia</strong> (frases curtas, não palavras soltas).</li>
                  <li><strong>Revisar todo dia</strong> (consistência &gt; quantidade).</li>
                  <li><strong>Fonte dos cards:</strong> o que você assistiu/leu.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="vocabulario" className="info-section">
            <h2 className="section-title">📚 Core Vocabulário e Níveis</h2>
            <div className="info-card">
              <h3>Frequência primeiro. Depois, especialize.</h3>
              <p>
                As palavras mais frequentes aparecem o tempo todo. Domine o básico e você entende muito mais rápido.
              </p>

              <div className="vocab-grid">
                <div className="vocab-category">
                  <h4>Top 100 (base)</h4>
                  <p>the, be, to, of, and, a, in, that, have, I, it, for, not, on, with, he, as, you, do, at...</p>
                  <span className="vocab-priority">🔥 Prioridade Máxima</span>
                </div>

                <div className="vocab-category">
                  <h4>101–500 (destrava)</h4>
                  <p>Verbos comuns, adjetivos básicos, preposições, pronomes...</p>
                  <span className="vocab-priority">⭐ Alta Prioridade</span>
                </div>

                <div className="vocab-category">
                  <h4>501–1000 (consolida)</h4>
                  <p>Vocabulário recorrente em situações do dia a dia.</p>
                  <span className="vocab-priority">📖 Média Prioridade</span>
                </div>
              </div>

              <div className="highlight-box">
                <h4>Estimativas por nível (varia por pessoa)</h4>
                <ul className="info-list">
                  <li><strong>A1:</strong> 500–700 palavras</li>
                  <li><strong>A2:</strong> 1000–1500 palavras</li>
                  <li><strong>B1:</strong> 2000–3000 palavras</li>
                  <li><strong>B2:</strong> 4000–5000 palavras</li>
                  <li><strong>C1:</strong> 8000+ palavras</li>
                  <li><strong>C2:</strong> 12000+ palavras</li>
                </ul>
                <p>Use isso como referência, não como regra rígida.</p>
              </div>
            </div>
          </section>

          <section id="imersao" className="info-section">
            <h2 className="section-title">⏰ Exposição e horas necessárias</h2>
            <div className="info-card">
              <h3>Quanto tempo, em média, para cada nível</h3>
              <p>
                Estimativas do FSI (Foreign Service Institute). A variação depende da qualidade do estudo e constância.
              </p>

              <div className="hours-grid">
                <div className="hours-card">
                  <div className="hours-level">A1 - Iniciante</div>
                  <div className="hours-number">60–100 horas</div>
                  <p>Frases básicas e apresentações simples</p>
                </div>

                <div className="hours-card">
                  <div className="hours-level">A2 - Básico</div>
                  <div className="hours-number">180–200 horas</div>
                  <p>Conversas sobre temas familiares</p>
                </div>

                <div className="hours-card">
                  <div className="hours-level">B1 - Intermediário</div>
                  <div className="hours-number">350–400 horas</div>
                  <p>Situações do dia a dia com autonomia</p>
                </div>

                <div className="hours-card">
                  <div className="hours-level">B2 - Intermediário Superior</div>
                  <div className="hours-number">500–600 horas</div>
                  <p>Textos mais complexos e conversas fluidas</p>
                </div>

                <div className="hours-card">
                  <div className="hours-level">C1 - Avançado</div>
                  <div className="hours-number">700–800 horas</div>
                  <p>Uso flexível e eficaz</p>
                </div>

                <div className="hours-card">
                  <div className="hours-level">C2 - Fluente</div>
                  <div className="hours-number">1000–1200 horas</div>
                  <p>Domínio amplo e natural</p>
                </div>
              </div>

              <div className="highlight-box">
                <h4>📊 Cálculo prático</h4>
                <ul className="info-list">
                  <li><strong>1 hora/dia:</strong> A1 em 2–3 meses | B1 em ~1 ano | C1 em ~2 anos</li>
                  <li><strong>2 horas/dia:</strong> A1 em ~1 mês | B1 em ~6 meses | C1 em ~1 ano</li>
                  <li><strong>3 horas/dia:</strong> A1 em ~3 semanas | B1 em ~4 meses | C1 em ~8 meses</li>
                </ul>
              </div>

              <div className="tip-box">
                <strong>💡 Regra de ouro:</strong> 30 minutos focados valem mais que 2 horas distraído.
              </div>
            </div>
          </section>
          <section id="curva" className="info-section">
            <h2 className="section-title">📈 Curva de Aprendizado</h2>
            <div className="info-card">
              <h3>É normal sentir o ritmo mudar</h3>
              <p>
                A curva não é linear. Entender isso evita frustração e te mantém consistente.
              </p>

              <div className="learning-curve">
                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 1: Início rápido (0–3 meses)</h4>
                    <p>Você aprende o básico e vê evolução visível.</p>
                    <div className="progress-indicator">Progresso: 0% → 20%</div>
                  </div>
                </div>

                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 2: Platô intermediário (3–12 meses)</h4>
                    <p>O progresso fica mais lento, mas continua.</p>
                    <div className="progress-indicator">Progresso: 20% → 60%</div>
                  </div>
                </div>

                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 3: Fluência funcional (12+ meses)</h4>
                    <p>Melhorias sutis e consistentes.</p>
                    <div className="progress-indicator">Progresso: 60% → 90%+</div>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>⚠️ Importante:</strong> O platô é normal. Continue a rotina e ajuste o input.
              </div>
            </div>
          </section>

          <section id="recursos" className="info-section">
            <h2 className="section-title">🔗 Ferramentas úteis (com links)</h2>
            <div className="info-card">
              <div className="tools-grid">
                <div className="tool-item">
                  <h4>🔄 Anki</h4>
                  <p>
                    Flashcards com repetição espaçada.{" "}
                    <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer">
                      apps.ankiweb.net
                    </a>
                  </p>
                  <span className="tool-tag">Essencial</span>
                </div>

                <div className="tool-item">
                  <h4>📚 Language Reactor</h4>
                  <p>
                    Extensão para Netflix/YouTube.{" "}
                    <a href="https://www.languagereactor.com/" target="_blank" rel="noreferrer">
                      languagereactor.com
                    </a>
                  </p>
                  <span className="tool-tag">Recomendado</span>
                </div>

                <div className="tool-item">
                  <h4>🎧 BBC Podcasts</h4>
                  <p>
                    "6 Minute English", "The English We Speak".{" "}
                    <a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noreferrer">
                      bbc.co.uk/learningenglish
                    </a>
                  </p>
                </div>

                <div className="tool-item">
                  <h4>📖 LingQ</h4>
                  <p>
                    Leitura com suporte de tradução.{" "}
                    <a href="https://www.lingq.com/" target="_blank" rel="noreferrer">
                      lingq.com
                    </a>
                  </p>
                </div>

                <div className="tool-item">
                  <h4>💬 HelloTalk</h4>
                  <p>
                    Conversa com nativos.{" "}
                    <a href="https://www.hellotalk.com/" target="_blank" rel="noreferrer">
                      hellotalk.com
                    </a>
                  </p>
                </div>

                <div className="tool-item">
                  <h4>💬 Tandem</h4>
                  <p>
                    Troca de idiomas por chat/voz.{" "}
                    <a href="https://www.tandem.net/" target="_blank" rel="noreferrer">
                      tandem.net
                    </a>
                  </p>
                </div>

                <div className="tool-item">
                  <h4>🎬 YouTube</h4>
                  <p>
                    English with Lucy, BBC Learning English.{" "}
                    <a href="https://www.youtube.com/@bbclearningenglish" target="_blank" rel="noreferrer">
                      youtube.com/@bbclearningenglish
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default EnglishGuide
