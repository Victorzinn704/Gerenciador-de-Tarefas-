# Regras de negocio

Este documento descreve as regras usadas pela aplicacao.

Para ver quais regras possuem teste, evidencia visual ou limite declarado, consulte `docs/MATRIZ-DE-TESTES-E-EVIDENCIAS.md`.

## Cadastro de tarefa

Uma tarefa precisa ter:

- Titulo.
- Explicacao.
- Data.
- Horario.

O sistema nao adiciona uma tarefa sem esses campos principais.

Arquivos relacionados:

- `src/components/FormularioTarefa.jsx`
- `src/hooks/useTaskManager.js`
- `src/components/FormularioTarefa.test.jsx`

## Classificacao por periodo

A classificacao por periodo e feita de forma automatica a partir do horario.

| Periodo | Inicio | Fim | Cor |
| --- | --- | --- | --- |
| Manha | 04h00 | 11h59 | Vermelho |
| Tarde | 12h00 | 17h59 | Verde |
| Noite | 18h00 | 03h59 | Azul |

Arquivos relacionados:

- `src/utils/tarefaUtils.js`
- `src/utils/tarefaUtils.test.js`
- `src/components/PeriodoPreview.jsx`
- `src/components/TarefaItem.jsx`

## Justificativa da regra

As fontes consultadas mostram que nao existe um horario unico para todas as pessoas e regioes. Os periodos do dia podem variar conforme rotina, luz natural e costume local.

Para este projeto, foi adotada uma regra simples e facil de entender:

- Manha comeca as 04h00 e termina antes de 12h00.
- Tarde comeca as 12h00 e termina antes de 18h00.
- Noite comeca as 18h00 e segue ate 03h59.

Essa regra atende bem uma agenda pessoal, pois separa madrugada e noite em uma mesma categoria visual.

## Referencias consultadas

- Britannica Dictionary: apresenta periodos aproximados do dia e informa que os horarios podem variar conforme rotina e luz natural.  
  https://www.britannica.com/dictionary/eb/qa/parts-of-the-day-early-morning-late-morning-etc

- Cambridge Dictionary: define morning como a parte do dia ate o meio do dia ou horario do almoco.  
  https://dictionary.cambridge.org/us/dictionary/english/morning

- Cambridge Dictionary: define afternoon como o periodo que comeca por volta de 12h e termina por volta de 18h ou quando o sol se poe.  
  https://dictionary.cambridge.org/us/dictionary/english/afternoon

- Time and Date: explica que AM e o periodo antes do meio-dia e PM e o periodo depois do meio-dia.  
  https://www.timeanddate.com/time/am-and-pm.html

## Historico

O historico registra as movimentacoes principais:

- Tarefa criada.
- Tarefa editada.
- Tarefa concluida.
- Tarefa reaberta.
- Tarefa removida.

Tarefas removidas saem da lista principal, mas continuam registradas no historico.

Arquivo relacionado:

- `src/hooks/useTaskManager.js`

## Persistencia

As informacoes sao salvas no `localStorage`.

Isso permite manter os dados no navegador mesmo apos atualizar a pagina.

Arquivo relacionado:

- `src/hooks/useTaskManager.js`

## Limites

- O historico registra eventos, mas nao permite restaurar automaticamente uma tarefa removida.
- A persistencia e local ao navegador.
- O projeto nao possui validacao de data futura ou recorrencia de tarefas.
