# Guia De Uso

Este guia explica como usar a aplicacao sem exigir conhecimento previo de React ou JavaScript.

## Acessar A Aplicacao

A versao publicada fica no GitHub Pages:

```text
https://victorzinn704.github.io/Gerenciador-de-Tarefas-/
```

A aplicacao roda no navegador e guarda os dados no `localStorage`. Isso significa que as tarefas ficam salvas no mesmo navegador enquanto os dados do site nao forem apagados.

## Criar Uma Tarefa

1. Escolha a data no calendario.
2. Preencha o titulo.
3. Preencha a explicacao.
4. Escolha hora e minuto.
5. Confira o periodo calculado automaticamente.
6. Clique em `Adicionar`.

Campos obrigatorios:

| Campo | Motivo |
| --- | --- |
| Titulo | Identifica a tarefa na lista. |
| Explicacao | Registra o contexto da atividade. |
| Horario | Permite classificar manha, tarde ou noite. |

## Entender A Cor Da Tarefa

A cor vem do horario:

| Periodo | Horario |
| --- | --- |
| Manha | 04h00 ate 11h59 |
| Tarde | 12h00 ate 17h59 |
| Noite | 18h00 ate 03h59 |

Essa regra ajuda a separar rapidamente a rotina do dia sem criar categorias manuais.

## Editar Uma Tarefa

1. Clique em `Editar`.
2. Altere titulo, explicacao ou horario.
3. Clique em `Salvar`.

Quando o horario muda, o periodo tambem e recalculado.

## Concluir Ou Reabrir

Use o checkbox da tarefa para alternar entre ativa e concluida.

O historico registra as duas movimentacoes:

- `concluida`;
- `reaberta`.

## Remover

Clique em `Remover` para tirar a tarefa da lista principal.

A tarefa removida nao volta para a lista, mas a acao fica registrada no historico.

## Filtrar

Os filtros de status ajudam a reduzir a tela:

| Filtro | O que mostra |
| --- | --- |
| Todas | Tarefas ativas e concluidas. |
| Ativas | Somente tarefas ainda pendentes. |
| Concluidas | Somente tarefas finalizadas. |

## Alternar Tema

O botao no topo alterna entre tema claro e tema escuro.

O tema atual tambem fica salvo no navegador.

## Limites Do Uso

- Nao existe login.
- Nao existe sincronizacao entre dispositivos.
- Nao existe backend.
- Limpar os dados do navegador pode apagar as tarefas.
- O objetivo e organizar uma rotina local, nao substituir um sistema corporativo de tarefas.
