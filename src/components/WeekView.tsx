import { getWeekDays, isSameDay } from "../lib/date"
import { formatHourLabel, type HourFormat } from "../lib/time"
import "./WeekView.css"

const WEEKDAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

interface WeekViewProps {
  referenceDate: Date
  startHour?: number
  endHour?: number
  hourFormat?: HourFormat
}

function WeekView({
  referenceDate,
  startHour = 7,
  endHour = 23,
  hourFormat = "24h",
}: WeekViewProps) {
  const days = getWeekDays(referenceDate)
  const today = new Date()

  const hourCount = endHour - startHour + 1
  const hours = Array.from({ length: hourCount }, (_, i) => startHour + i)

  return (
    <div className="week-view">
      <div className="week-view__header">
        <div className="week-view__corner" />
        {days.map((day, i) => (
          <div key={day.toISOString()} className="week-view__day-header">
            <span className="week-view__weekday-label">{WEEKDAY_LABELS[i]}</span>
            <span
              className={
                "week-view__day-number" +
                (isSameDay(day, today) ? " week-view__day-number--today" : "")
              }
            >
              {day.getDate()}
            </span>
          </div>
        ))}
      </div>
      <div className="week-view__body">
        <div className="week-view__hours">
          {hours.map((hour) => (
            <div key={hour} className="week-view__hour-label">
              {formatHourLabel(hour, hourFormat)}
            </div>
          ))}
        </div>
        <div className="week-view__grid">
          {hours.map((hour) =>
            days.map((day) => (
              <div
                key={`${day.toISOString()}-${hour}`}
                className="week-view__slot"
              />
            )),
          )}
        </div>
      </div>
    </div>
  )
}

export default WeekView
