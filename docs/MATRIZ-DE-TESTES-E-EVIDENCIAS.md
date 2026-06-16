# Matriz De Testes, Casos De Uso E Evidencias

Data da revisao: 2026-06-16.

## Objetivo

Este documento liga cada comportamento importante da aplicacao ao arquivo que implementa a regra, ao teste que protege a regra e a evidencia que comprova o uso.

A leitura correta e:

```text
caso de uso -> regra de negocio -> arquivo -> teste -> evidencia -> limite
```

## Casos De Uso

| ID | Caso de uso | Regra principal | Arquivos | Teste/evidencia | Limite conhecido |
| --- | --- | --- | --- | --- | --- |
| UC-01 | Criar tarefa com titulo, explicacao, data e horario | Tarefa sem campos obrigatorios nao deve ser cadastrada | `src/components/FormularioTarefa.jsx`, `src/hooks/useTaskManager.js` | `src/components/FormularioTarefa.test.jsx` | Nao ha validacao de recorrencia ou data futura |
| UC-02 | Classificar tarefa por periodo do dia | Horario define manha, tarde ou noite automaticamente | `src/utils/tarefaUtils.js`, `src/components/PeriodoPreview.jsx` | `src/utils/tarefaUtils.test.js` | Periodos sao uma convencao do projeto, nao regra universal |
| UC-03 | Editar horario e recalcular periodo | Ao editar horario, o periodo precisa acompanhar a mudanca | `src/components/TarefaItem.jsx`, `src/utils/tarefaUtils.js` | `src/components/TarefaItem.test.jsx` | Edicao nao registra diff campo a campo no historico |
| UC-04 | Marcar tarefa como concluida ou reaberta | A conclusao alterna estado e registra evento | `src/components/TarefaItem.jsx`, `src/hooks/useTaskManager.js` | `src/components/TarefaItem.test.jsx` | Historico nao permite desfazer automaticamente |
| UC-05 | Filtrar por todas, ativas e concluidas | Filtro muda a lista visivel sem apagar dados | `src/components/Filtros.jsx`, `src/App.jsx`, `src/hooks/useTaskManager.js` | Validacao manual e screenshots | Ainda nao ha teste automatizado especifico para filtro |
| UC-06 | Selecionar data no calendario | Data selecionada orienta cadastro e visualizacao | `src/components/Calendario.jsx`, `src/hooks/useTaskManager.js` | Validacao manual e screenshots | Nao ha agenda recorrente ou sincronizacao externa |
| UC-07 | Consultar historico de movimentacoes | Criacao, edicao, conclusao, reabertura e remocao entram no historico | `src/components/HistoricoTarefas.jsx`, `src/hooks/useTaskManager.js` | Validacao manual em `docs/VALIDACAO-LOCAL.md` | Historico fica no navegador local |
| UC-08 | Alternar tema claro/escuro | Tema muda a camada visual sem alterar tarefas | `src/components/Header.jsx`, `src/styles/themes.js`, `src/hooks/useTaskManager.js` | `docs/screenshots/desktop-claro.png`, `docs/screenshots/mobile-escuro.png` | Tema depende do estado salvo no navegador |
| UC-09 | Publicar app estatico no GitHub Pages | Build precisa gerar `dist` sem backend | `.github/workflows/pages.yml`, `vite.config.js` | Workflow `Deploy GitHub Pages` | Dados continuam locais por `localStorage` |

## Regras Que Nao Podem Quebrar

| ID | Regra | Onde aparece | Validacao |
| --- | --- | --- | --- |
| REG-01 | Titulo, explicacao e horario sao obrigatorios para adicionar tarefa | `FormularioTarefa.jsx` | `FormularioTarefa.test.jsx` |
| REG-02 | Periodo e calculado por horario, nao escolhido manualmente | `tarefaUtils.js` | `tarefaUtils.test.js` |
| REG-03 | Concluir e reabrir usam a mesma acao de alternancia | `TarefaItem.jsx`, `useTaskManager.js` | `TarefaItem.test.jsx` |
| REG-04 | Persistencia e local ao navegador | `useTaskManager.js` | validacao local e limite documentado |
| REG-05 | Historico registra movimentacao mesmo quando tarefa e removida | `useTaskManager.js`, `HistoricoTarefas.jsx` | validacao manual; gap para teste automatizado |
| REG-06 | GitHub Pages nao executa backend | README e `DECISOES-TECNICAS.md` | workflow Pages e documentacao |

## Matriz De Validacao

| Camada | Comando | O que comprova |
| --- | --- | --- |
| Instalacao | `npm ci` | Dependencias reprodutiveis a partir do lockfile |
| Padrao de codigo | `npm run lint` | ESLint sem erro |
| Regras automatizadas | `npm run test` | Vitest cobre utils, formulario e item de tarefa |
| Cobertura | `npm run test:coverage` | Mede cobertura quando necessario |
| Build | `npm run build` | Vite gera versao estatica de producao |
| Publicacao | workflow `Deploy GitHub Pages` | Build publicado no Pages depois de push em `main` |
| Qualidade | workflow `Quality` | CI roda install, lint, test e build em PR/push |

## Evidencias

| Evidencia | Caminho | O que prova |
| --- | --- | --- |
| Relatorio local | `docs/VALIDACAO-LOCAL.md` | Comandos executados e limites da validacao |
| Estrategia de testes | `docs/TESTES.md` | Quais comportamentos sao cobertos por Vitest |
| Desktop claro | `docs/screenshots/desktop-claro.png` | Layout desktop e tema claro |
| Mobile escuro | `docs/screenshots/mobile-escuro.png` | Responsividade e tema escuro |
| Regras de negocio | `docs/REGRAS-DE-NEGOCIO.md` | Periodos, historico e persistencia |
| Workflow de qualidade | `.github/workflows/quality.yml` | Validacao automatica em pull request e push |

## Gaps Tecnicos

| Gap | Impacto | Acao recomendada |
| --- | --- | --- |
| Filtro, calendario, historico e tema ainda dependem de validacao manual | Parte do fluxo visual pode regredir sem teste automatizado | Criar testes com Testing Library para esses componentes |
| Nao ha teste de persistencia com `localStorage` | Mudanca no hook pode quebrar carregamento salvo | Adicionar teste do hook ou teste de integracao do fluxo |
| Nao ha auditoria automatizada de acessibilidade | Problemas de contraste/labels podem passar no CI | Avaliar axe em teste futuro |
| Nao ha sincronizacao entre dispositivos | Usuario perde continuidade fora do navegador atual | Manter como limite ou criar backend em outra fase |
