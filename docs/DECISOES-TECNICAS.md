# Decisoes Tecnicas

Este documento registra as principais escolhas do projeto e o motivo de cada uma.

## React Com Vite

O projeto usa React com Vite porque a aplicacao e uma interface de pagina unica, com estado local e build estatico.

Alternativa rejeitada: framework full-stack.

Motivo: nao ha backend, banco, autenticacao ou rota de servidor. Um framework maior aumentaria configuracao sem melhorar a entrega atual.

## JavaScript Em Vez De TypeScript

O projeto usa JavaScript.

Motivo: o objetivo principal era entregar uma aplicacao academica funcional, com testes de comportamento e regra de negocio simples.

Trade-off: TypeScript poderia reduzir erros de contrato entre componentes, mas tambem aumentaria o volume de configuracao. Para evolucao futura, a migracao mais segura seria comecar por `src/utils/tarefaUtils.js` e `src/hooks/useTaskManager.js`.

## `useReducer` Para Estado Central

A regra principal fica em `src/hooks/useTaskManager.js`.

Motivo: as acoes da aplicacao formam transicoes claras:

- adicionar;
- editar;
- alternar conclusao;
- remover;
- filtrar;
- selecionar data;
- mudar mes;
- alternar tema.

Com `useReducer`, cada acao fica concentrada no mesmo fluxo e a interface nao precisa duplicar regra de estado.

## `localStorage` Para Persistencia

O projeto salva tarefas, historico, filtro, calendario e tema no navegador.

Motivo: o GitHub Pages publica arquivos estaticos. Como nao ha servidor, `localStorage` resolve a persistencia local com baixa complexidade.

Trade-off: os dados ficam restritos ao navegador usado. Nao ha conta, backup remoto ou sincronizacao.

## Historico Como Registro De Movimento

O historico registra criacao, edicao, conclusao, reabertura e remocao.

Motivo: uma lista de tarefas sem historico mostra apenas o estado final. O historico explica o que aconteceu durante o uso e ajuda na apresentacao do fluxo.

## Periodo Calculado Pelo Horario

O usuario nao escolhe diretamente o periodo. Ele escolhe o horario, e o sistema calcula manha, tarde ou noite.

Motivo: reduz erro manual e mantem a regra consistente em cadastro e edicao.

Arquivos relacionados:

- `src/utils/tarefaUtils.js`;
- `src/components/FormularioTarefa.jsx`;
- `src/components/TarefaItem.jsx`.

## styled-components

O projeto usa `styled-components` para manter estilos proximos aos componentes.

Motivo: a interface tem muitos estados visuais ligados ao componente: tema, periodo, tarefa concluida, filtros e calendario. O uso de componentes estilizados ajuda a organizar essa variacao.

Trade-off: CSS puro ou CSS Modules tambem funcionariam. A decisao atual e manter uma base unica e nao misturar estrategias.

## GitHub Pages

A publicacao usa GitHub Pages porque o projeto gera build estatico.

Motivo: e suficiente para demonstrar o produto, manter link publico e validar o fluxo de deploy.

Limite: Pages nao executa backend. Toda regra roda no navegador.
