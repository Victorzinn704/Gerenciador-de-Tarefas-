# Testes

O projeto usa Vitest e Testing Library.

## Objetivo dos testes

Os testes verificam pontos importantes da aplicacao:

- Regras de horario.
- Classificacao automatica por periodo.
- Cadastro de tarefa.
- Validacao de campos obrigatorios.
- Edicao de horario.
- Acao de concluir tarefa.

## Comandos

Executar todos os testes:

```bash
npm run test
```

Executar testes em modo observacao:

```bash
npm run test:watch
```

Gerar relatorio de cobertura:

```bash
npm run test:coverage
```

## Arquivos de teste

```text
src/utils/tarefaUtils.test.js
src/components/FormularioTarefa.test.jsx
src/components/TarefaItem.test.jsx
```

## Validacao recomendada antes de publicar

Antes de enviar alteracoes para o GitHub, execute:

```bash
npm run lint
npm run test
npm run build
```

Esses comandos confirmam que o codigo esta padronizado, que as regras principais funcionam e que a aplicacao gera uma versao de producao.

## Ultima Validacao Registrada

Data: 2026-06-16.

Resultado:

- `npm ci` passou sem vulnerabilidades reportadas;
- `npm run lint` passou;
- `npm run test` passou com 3 arquivos de teste e 11 testes;
- `npm run build` passou.

Detalhes em `docs/VALIDACAO-LOCAL.md`.
