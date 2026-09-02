export const WEEKDAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

export function startOfDay(date: Date): Date {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  return result
}

export function addDays(date: Date, amount: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + amount)
  return result
}

// Semana de lunes a domingo.
export function startOfWeek(date: Date): Date {
  const day = date.getDay() // 0 = domingo ... 6 = sábado
  const diffFromMonday = (day + 6) % 7
  return startOfDay(addDays(date, -diffFromMonday))
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

// Matriz de semanas (lunes a domingo) que cubre el mes completo,
// incluyendo días del mes anterior/siguiente para completar cada semana.
export function getMonthMatrix(referenceDate: Date): Date[][] {
  const firstOfMonth = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    1,
  )
  const lastOfMonth = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth() + 1,
    0,
  )

  const start = startOfWeek(firstOfMonth)
  const end = addDays(startOfWeek(lastOfMonth), 6)

  const days: Date[] = []
  for (let day = start; day <= end; day = addDays(day, 1)) {
    days.push(day)
  }

  const weeks: Date[][] = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }
  return weeks
}
