export type HourFormat = "24h" | "12h"

// Convierte una hora (0-23) a texto legible: "14:00" (24h) o "2 PM" (12h).
export function formatHourLabel(hour: number, format: HourFormat): string {
  if (format === "24h") {
    return `${hour.toString().padStart(2, "0")}:00`
  }

  const period = hour < 12 ? "AM" : "PM"
  const hour12 = hour % 12 === 0 ? 12 : hour % 12
  return `${hour12} ${period}`
}
