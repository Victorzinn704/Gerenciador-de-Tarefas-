import { describe, expect, it } from 'vitest'
import {
  formatarHorario,
  montarHorario,
  normalizarHorario,
  obterPartesHorario,
  periodoPorHorario,
} from './tarefaUtils'

describe('tarefaUtils', () => {
  it('monta horario com hora de 1 a 24 e minuto de 00 a 59', () => {
    expect(montarHorario('1', '0')).toBe('01:00')
    expect(montarHorario('24', '59')).toBe('24:59')
    expect(montarHorario('30', '90')).toBe('24:59')
  })

  it('normaliza horarios digitados em formatos simples', () => {
    expect(normalizarHorario('4h')).toBe('04:00')
    expect(normalizarHorario('18h30')).toBe('18:30')
    expect(normalizarHorario(' 7:05 ')).toBe('07:05')
  })

  it('extrai as partes de um horario normalizado', () => {
    expect(obterPartesHorario('09:15')).toEqual({ hora: '09', minuto: '15' })
    expect(obterPartesHorario('')).toEqual({ hora: '', minuto: '' })
  })

  it('classifica manha entre 04h00 e 11h59', () => {
    expect(periodoPorHorario('04:00')).toBe('manha')
    expect(periodoPorHorario('11:59')).toBe('manha')
  })

  it('classifica tarde entre 12h00 e 17h59', () => {
    expect(periodoPorHorario('12:00')).toBe('tarde')
    expect(periodoPorHorario('17:59')).toBe('tarde')
  })

  it('classifica noite entre 18h00 e 03h59', () => {
    expect(periodoPorHorario('18:00')).toBe('noite')
    expect(periodoPorHorario('03:59')).toBe('noite')
    expect(periodoPorHorario('24:00')).toBe('noite')
  })

  it('formata horarios para exibicao com alinhamento visual', () => {
    expect(formatarHorario('09:00')).toBe('09h')
    expect(formatarHorario('14:30')).toBe('14h30')
    expect(formatarHorario('')).toBe('Sem horario')
  })
})
