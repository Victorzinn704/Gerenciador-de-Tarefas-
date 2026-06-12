export const periodos = [
  { valor: 'manha', label: 'Manha', legenda: '04h ate 11h59' },
  { valor: 'tarde', label: 'Tarde', legenda: '12h ate 17h59' },
  { valor: 'noite', label: 'Noite', legenda: '18h ate 03h59' },
]

export const horasDisponiveis = Array.from({ length: 24 }, (_, indice) =>
  String(indice + 1).padStart(2, '0'),
)

export const minutosDisponiveis = Array.from({ length: 60 }, (_, indice) =>
  String(indice).padStart(2, '0'),
)

export function criarId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function hojeKey() {
  return formatarDataKey(new Date())
}

export function formatarDataKey(data) {
  const ano = data.getFullYear()
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dia = String(data.getDate()).padStart(2, '0')

  return `${ano}-${mes}-${dia}`
}

export function criarDataPorKey(dataKey) {
  const [ano, mes, dia] = dataKey.split('-').map(Number)

  return new Date(ano, mes - 1, dia)
}

export function formatarDataCompleta(dataKey) {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(criarDataPorKey(dataKey))
}

export function formatarDataCurta(dataKey) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(criarDataPorKey(dataKey))
}

export function formatarMesAno(data) {
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric',
  }).format(data)
}

function normalizarHora(valor) {
  const numero = Number.parseInt(String(valor).replace(/\D/g, ''), 10)

  if (Number.isNaN(numero)) {
    return ''
  }

  if (numero <= 0) {
    return '24'
  }

  return String(Math.min(numero, 24)).padStart(2, '0')
}

function normalizarMinuto(valor) {
  const numero = Number.parseInt(String(valor).replace(/\D/g, ''), 10)

  if (Number.isNaN(numero)) {
    return ''
  }

  return String(Math.min(Math.max(numero, 0), 59)).padStart(2, '0')
}

export function montarHorario(hora, minuto) {
  const horaNormalizada = normalizarHora(hora)
  const minutoNormalizado = normalizarMinuto(minuto)

  if (!horaNormalizada || !minutoNormalizado) {
    return ''
  }

  return `${horaNormalizada}:${minutoNormalizado}`
}

export function normalizarHorario(horario) {
  const horarioLimpo = String(horario ?? '').trim()

  if (!horarioLimpo) {
    return ''
  }

  const horaInteira = horarioLimpo.match(/^(\d{1,2})h$/i)

  if (horaInteira) {
    return montarHorario(horaInteira[1], '00')
  }

  const horarioCompleto = horarioLimpo.match(/^(\d{1,2})(?::|h)(\d{1,2})$/i)

  if (horarioCompleto) {
    return montarHorario(horarioCompleto[1], horarioCompleto[2])
  }

  return horarioLimpo
}

export function obterPartesHorario(horario) {
  const horarioNormalizado = normalizarHorario(horario)
  const partes = horarioNormalizado.match(/^(\d{2}):(\d{2})$/)

  if (!partes) {
    return { hora: '', minuto: '' }
  }

  return {
    hora: partes[1],
    minuto: partes[2],
  }
}

export function periodoPorHorario(horario) {
  const { hora } = obterPartesHorario(horario)
  const horaNumerica = Number(hora)

  if (!hora || Number.isNaN(horaNumerica)) {
    return 'manha'
  }

  if (horaNumerica >= 4 && horaNumerica < 12) {
    return 'manha'
  }

  if (horaNumerica >= 12 && horaNumerica < 18) {
    return 'tarde'
  }

  return 'noite'
}

export function formatarHorario(horario) {
  const horarioNormalizado = normalizarHorario(horario)

  if (!horarioNormalizado) {
    return 'Sem horario'
  }

  if (/^\d{2}:\d{2}$/.test(horarioNormalizado)) {
    const [hora, minuto] = horarioNormalizado.split(':')
    return minuto === '00' ? `${hora}h` : `${hora}h${minuto}`
  }

  return horarioNormalizado
}

export function obterLabelPeriodo(periodo) {
  return periodos.find((item) => item.valor === periodo)?.label ?? 'Manha'
}
