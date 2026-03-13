# Framework Mentor Studio

> O mentor que transforma sua experiencia em framework monetizavel.

## Overview

Squad de **mentoria premium** que guia experts/gestores em transicao desde a identificacao da expertise unica ate a monetizacao atraves de mentoria high-touch. Baseado em 8 elite minds com frameworks documentados.

**Produto:** Acelerador PONTE 90 Dias — "De gestor preso a mentor premium em 90 dias"
**Metodo:** PONTE (Posicionar, Organizar, Nomear, Transformar, Escalar)
**Tiers:** R$4.500 / R$9.000 / R$22.500

---

## Quick Start

Ative o squad e use o comando `*start`:

```
@framework-mentor-studio
*start
```

O orchestrator (@fms-chief) vai guiar voce pela jornada completa.

---

## Estrutura do Repositorio

### Squad (infraestrutura de agentes)

```
squad.yaml                    # Definicao do squad
agents/                       # 8 agentes + orchestrator
tasks/                        # Tasks executaveis por fase
workflows/                    # Workflow da jornada completa
templates/                    # Canvas, offer, positioning (em branco)
checklists/                   # Qualidade de framework (22) + oferta (25)
```

### Outputs — Miguel Versiani (resultados das 5 fases)

| Fase | Arquivo | Descricao |
|------|---------|-----------|
| Input | [`00-input-bridge/genius-profile-summary.md`](outputs/miguel-versiani/00-input-bridge/genius-profile-summary.md) | Sintese dos dados da Zona de Genialidade |
| P | [`01-diagnose/diagnosis-report.md`](outputs/miguel-versiani/01-diagnose/diagnosis-report.md) | Mapa de zonas + Unique Ability + ULP + Gap Analysis |
| O+N | [`02-extract/signature-framework.md`](outputs/miguel-versiani/02-extract/signature-framework.md) | Metodo PONTE completo (5 fases documentadas) |
| O+N | [`02-extract/teaching-guide.md`](outputs/miguel-versiani/02-extract/teaching-guide.md) | 3 versoes de ensino (2min / 30min / 90dias) |
| T | [`03-package/offer-document.md`](outputs/miguel-versiani/03-package/offer-document.md) | Grand Slam Offer + Value Equation + 3 tiers |
| E | [`04-position/positioning-strategy.md`](outputs/miguel-versiani/04-position/positioning-strategy.md) | Posicionamento + pilares de conteudo + calendario |
| E | [`05-launch/launch-plan.md`](outputs/miguel-versiani/05-launch/launch-plan.md) | Plano de 90 dias + scripts + metricas |
| E | [`05-launch/qualification-script.md`](outputs/miguel-versiani/05-launch/qualification-script.md) | Criterios GATE + 5 perfis "nao" |
| E | [`05-launch/onboarding-checklist.md`](outputs/miguel-versiani/05-launch/onboarding-checklist.md) | Checklist pre-sessao-1 |
| E | [`05-launch/case-study-zero.md`](outputs/miguel-versiani/05-launch/case-study-zero.md) | O criador como primeiro caso |
| Sintese | [`mentor-blueprint.md`](outputs/miguel-versiani/mentor-blueprint.md) | Documento master — sintese dos 8 agentes |

### Business (assets de negocio real)

#### Oferta

| Arquivo | Descricao |
|---------|-----------|
| [`offer-page/offer-page-content.md`](business/offer-page/offer-page-content.md) | Copy client-facing da pagina de oferta |
| [`offer-page/faq.md`](business/offer-page/faq.md) | 15 perguntas frequentes |

#### Funil de Vendas

| Arquivo | Descricao |
|---------|-----------|
| [`funnel/funnel-map.md`](business/funnel/funnel-map.md) | Funil de 4 etapas (Consciencia → Acao) |
| [`funnel/intake-form-questions.md`](business/funnel/intake-form-questions.md) | 7 perguntas pre-conversa diagnostica |
| [`funnel/follow-up-sequences.md`](business/funnel/follow-up-sequences.md) | Sequencias pos-conversa (3 cenarios) |

#### Produto Entregavel (o que o cliente recebe)

| Arquivo | Descricao |
|---------|-----------|
| [`product/metodo-ponte-handbook.md`](business/product/metodo-ponte-handbook.md) | Handbook do mentorado (client-facing) |
| [`product/client-workbook.md`](business/product/client-workbook.md) | 10 exercicios/templates para o mentorado |
| `product/session-guides/` | 10 guias de sessao (2 por fase PONTE) — ver tabela abaixo |

**Session Guides:**

| Sessao | Fase | Tema |
|--------|------|------|
| [01](business/product/session-guides/session-01-posicionar.md) | P | Mapeamento de Zonas |
| [02](business/product/session-guides/session-02-posicionar.md) | P | Upper Limit Problem + Gap Analysis |
| [03](business/product/session-guides/session-03-organizar.md) | O | Brain Dump Guiado |
| [04](business/product/session-guides/session-04-organizar.md) | O | Organizacao e Destilacao |
| [05](business/product/session-guides/session-05-nomear.md) | N | Design do Framework |
| [06](business/product/session-guides/session-06-nomear.md) | N | Nomeacao + Canvas + Visual |
| [07](business/product/session-guides/session-07-transformar.md) | T | Value Equation + Offer Stack |
| [08](business/product/session-guides/session-08-transformar.md) | T | Pricing + Proposta Consultiva |
| [09](business/product/session-guides/session-09-escalar.md) | E | Enrollment Conversation + Conteudo |
| [10](business/product/session-guides/session-10-escalar.md) | E | Launch + Delegacao + Retrospectiva |

#### Operacoes

| Arquivo | Descricao |
|---------|-----------|
| [`operations/delegation-playbook.md`](business/operations/delegation-playbook.md) | O que fazer, automatizar e delegar |

### Docs (conteudo e estrategia)

#### Planos de Conteudo LinkedIn (6 meses, ~60 pecas)

| Arquivo | Periodo |
|---------|---------|
| [`content-plans/mes1.md`](docs/content-plans/mes1.md) — [`mes6.md`](docs/content-plans/mes6.md) | Semanas 1-24 |

#### Assets de Lancamento

| Arquivo | Descricao |
|---------|-----------|
| [`launch-assets/dia1-linkedin-profile.md`](docs/launch-assets/dia1-linkedin-profile.md) | Textos prontos para perfil LinkedIn |
| [`launch-assets/dia1-primeiro-post.md`](docs/launch-assets/dia1-primeiro-post.md) | Primeiro post a publicar |

#### Alem do LinkedIn

| Arquivo | Descricao |
|---------|-----------|
| [`beyond-linkedin/newsletter-strategy.md`](docs/beyond-linkedin/newsletter-strategy.md) | Estrategia Substack quinzenal |
| [`beyond-linkedin/lead-magnet-concept.md`](docs/beyond-linkedin/lead-magnet-concept.md) | Quiz "Em que Zona voce esta?" |

---

## The Mentor Journey (5 Phases)

```
ZONA DE                                              ZONA DE
EXCELENCIA ─────────── A PONTE ──────────────── GENIALIDADE

[P]──────>[O]──────>[N]──────>[T]──────>[E]
 │          │         │         │         │
 ▼          ▼         ▼         ▼         ▼
Saber      Extrair   Criar    Precificar  Crescer
onde       o que     framework  pelo       com
estou      sei       proprio    valor      sistema

Sem. 1-2   Sem. 3-4  Sem. 5-6  Sem. 7-8   Sem. 9-12
```

### Phase 1: DIAGNOSE — Identifique sua expertise unica
- Unique Ability Discovery (Dan Sullivan)
- Expertise Positioning (David C. Baker)
- Output: Diagnosis Report

### Phase 2: EXTRACT — Estruture seu conhecimento em framework
- Knowledge Capture com CODE method (Tiago Forte)
- Framework Design com SPARK Process (Susanna Reay)
- Output: Signature Framework documentado

### Phase 3: PACKAGE — Crie sua oferta irresistivel
- Grand Slam Offer (Alex Hormozi)
- Value-Based Pricing (Alan Weiss)
- Output: Oferta com 3 tiers de preco

### Phase 4: POSITION — Estabeleca sua autoridade
- Expertise Positioning (Blair Enns)
- Content Authority Strategy (David C. Baker)
- Output: Estrategia de posicionamento + calendario de conteudo

### Phase 5: LAUNCH — Adquira seus primeiros clientes
- High-Touch Client Creation (Rich Litvin)
- Lead Generation System (Alex Hormozi)
- Output: Plano de lancamento + roadmap de 90 dias

---

## Agents

### Orchestrator
| Agent | Role |
|-------|------|
| **@fms-chief** (Maestro) | Orchestrator — routes requests, manages journey |

### Tier 0 — Diagnosis
| Agent | Role | Key Frameworks |
|-------|------|---------------|
| **@dan-sullivan** | Unique Ability Expert | Unique Ability, Who Not How, 10x vs 2x |
| **@david-baker** | Positioning Expert | Business of Expertise, Drop & Give Me Twenty |

### Tier 1 — Masters (Monetization)
| Agent | Role | Key Frameworks |
|-------|------|---------------|
| **@alex-hormozi** | Offer Architect | Grand Slam Offer, Value Equation, $100M Leads |
| **@alan-weiss** | Pricing Strategist | Value-Based Fees, Million Dollar Proposals |
| **@blair-enns** | Expertise Seller | Win Without Pitching, Pricing Creativity |
| **@rich-litvin** | Client Creator | Prosperous Coach, 4Cs, Enrollment Conversations |

### Tier 2 — Systematizers
| Agent | Role | Key Frameworks |
|-------|------|---------------|
| **@susanna-reay** | Framework Architect | Framework Thinking, SPARK Process |
| **@tiago-forte** | Knowledge Engineer | BASB, PARA, CODE, Progressive Summarization |

---

## Commands

| Command | Description |
|---------|-------------|
| `*start` | Begin the Mentor Journey (guided) |
| `*diagnose` | Run Phase 1 only (Unique Ability + Positioning) |
| `*extract-framework` | Run Phase 2 only (Knowledge Capture + Framework Design) |
| `*create-offer` | Run Phase 3 only (Grand Slam Offer + Pricing) |
| `*position` | Run Phase 4 only (Expertise Positioning + Content Strategy) |
| `*acquire-clients` | Run Phase 5 only (Client Creation + Lead Generation) |
| `*help` | Show available commands |
| `*exit` | Exit the squad |

## Templates

| Template | Purpose |
|----------|---------|
| `framework-canvas.md` | Design your signature framework |
| `grand-slam-offer.md` | Create your premium offer |
| `positioning-statement.md` | Define your authority position |

## Checklists

| Checklist | Purpose |
|-----------|---------|
| `framework-quality.md` | Validate framework quality (22 criteria) |
| `offer-validation.md` | Validate offer readiness (25 criteria) |

---

## MVP — O Minimo Para Comecar a Vender

Se quiser comecar a vender ANTES de tudo estar perfeito:

1. [`offer-page-content.md`](business/offer-page/offer-page-content.md) — pagina de oferta
2. [`intake-form-questions.md`](business/funnel/intake-form-questions.md) — questionario pre-conversa
3. [`session-01`](business/product/session-guides/session-01-posicionar.md) + [`session-02`](business/product/session-guides/session-02-posicionar.md) — suficiente para iniciar primeiro cliente
4. [`funnel-map.md`](business/funnel/funnel-map.md) — saber o processo

---

*Framework Mentor Studio v2.0.0 | 8 Elite Minds | 5 Phases | Built with Squad Creator*
*Reestruturado: outputs organizados por fase, business assets, produto entregavel completo*
