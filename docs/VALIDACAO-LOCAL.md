# Validacao Local

Data: 2026-06-16.

## Ambiente

| Item | Valor |
| --- | --- |
| Sistema | Windows |
| Shell | PowerShell |
| Runtime | Node.js conforme `package.json`, versao minima `>=22` |
| Gerenciador de pacotes | npm |

## Comandos Executados

```bash
npm ci
npm run lint
npm run test
npm run build
```

## Resultado

| Comando | Resultado observado |
| --- | --- |
| `npm ci` | Dependencias instaladas e auditoria sem vulnerabilidades reportadas. |
| `npm run lint` | Passou sem erro. |
| `npm run test` | 3 arquivos de teste passaram, totalizando 11 testes. |
| `npm run build` | Build de producao gerado em `dist/`. |

## Evidencias Visuais

| Evidencia | Arquivo |
| --- | --- |
| Desktop em tema claro | `docs/screenshots/desktop-claro.png` |
| Mobile em tema escuro | `docs/screenshots/mobile-escuro.png` |

## Cobertura De Comportamento

Os testes atuais cobrem:

- normalizacao de horario;
- calculo de periodo;
- validacao de campos obrigatorios;
- cadastro de tarefa;
- conclusao de tarefa;
- edicao de horario com recalculo de periodo.

## Limites Da Validacao

- A validacao nao cobre sincronizacao entre dispositivos, porque o projeto nao tem backend.
- A validacao nao cobre acessibilidade automatizada com axe.
- A validacao nao mede performance em dispositivo real.
- O historico e a persistencia dependem do `localStorage` do navegador.

Esses limites nao bloqueiam o escopo atual, mas indicam pontos de evolucao se o projeto crescer.

## Revalidacao Da Matriz - 2026-06-16

Escopo: inclusao da matriz de testes, casos de uso e evidencias.

Comandos executados:

```bash
npm ci
npm run lint
npm run test
npm run build
npm audit --audit-level=high
```

Resultado:

| Comando | Resultado observado |
| --- | --- |
| `npm ci` | Instalou 243 pacotes e auditou 244 pacotes sem vulnerabilidades. |
| `npm run lint` | Passou sem erro. |
| `npm run test` | 3 arquivos de teste passaram, totalizando 11 testes. |
| `npm run build` | Build de producao gerado em `dist/`. |
| `npm audit --audit-level=high` | Retornou 0 vulnerabilidades. |

Tambem foram executados:

- `git diff --check`, sem erro de whitespace;
- varredura de higiene publica nos arquivos versionaveis revisados, sem caminho pessoal, token GitHub, chave `sk-*` real, IP remoto especifico ou senha literal.
