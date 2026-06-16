# Estrutura do projeto

O projeto foi organizado para separar interface, regras, estilos e testes.

## Pastas principais

```text
src/
├── components/
├── hooks/
├── styles/
├── test/
├── utils/
├── App.jsx
└── main.jsx
```

## Components

Contem os componentes visuais da aplicacao.

```text
src/components/
├── Calendario.jsx
├── Filtros.jsx
├── FormularioTarefa.jsx
├── Header.jsx
├── HistoricoTarefas.jsx
├── HorarioPicker.jsx
├── PeriodoPreview.jsx
└── TarefaItem.jsx
```

## Hooks

Contem a regra central de estado da aplicacao.

```text
src/hooks/useTaskManager.js
```

Esse hook controla:

- Lista de tarefas.
- Historico.
- Filtro atual.
- Data selecionada.
- Mes visivel no calendario.
- Tema atual.

## Styles

Contem os estilos com styled-components.

```text
src/styles/
├── GlobalStyle.js
├── themes.js
└── components/
```

Os estilos foram separados por componente para evitar arquivos muito grandes.

## Utils

Contem funcoes de apoio.

```text
src/utils/tarefaUtils.js
```

Esse arquivo possui funcoes para:

- Criar identificadores.
- Formatar datas.
- Montar e normalizar horarios.
- Classificar periodo do dia.
- Exibir horario de forma padronizada.

## Test

Contem configuracoes auxiliares para os testes.

```text
src/test/setup.js
src/test/renderWithTheme.jsx
```

## App.jsx

`App.jsx` integra os componentes e passa os dados necessarios para cada parte da interface.

Ele nao concentra todas as regras. A regra principal fica em `useTaskManager.js` e as funcoes de horario ficam em `tarefaUtils.js`.

## Fluxo De Dados

```text
Usuario
  -> componentes de entrada
  -> useTaskManager
  -> reducer
  -> tarefas/historico/tema/data
  -> componentes de exibicao
  -> localStorage
```

## Responsabilidades Principais

| Arquivo | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Monta a tela e conecta componentes ao estado. |
| `src/hooks/useTaskManager.js` | Centraliza estado, acoes, historico e persistencia. |
| `src/utils/tarefaUtils.js` | Normaliza datas, horarios e periodos. |
| `src/components/FormularioTarefa.jsx` | Recebe dados de nova tarefa e valida campos obrigatorios. |
| `src/components/TarefaItem.jsx` | Exibe, edita, conclui e remove uma tarefa. |
| `src/components/Calendario.jsx` | Controla selecao de dia e navegacao de mes. |
| `src/components/HistoricoTarefas.jsx` | Mostra os eventos registrados. |

## Regra De Manutencao

Novas regras de negocio devem entrar primeiro em `useTaskManager.js` ou `tarefaUtils.js`.

Componentes devem apenas coletar entrada, exibir saida e disparar acoes. Isso evita duplicacao de regra entre formulario, lista e calendario.
