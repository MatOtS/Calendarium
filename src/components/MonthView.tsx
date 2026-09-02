import { WEEKDAY_LABELS, getMonthMatrix, isSameDay, isSameMonth } from "../lib/date"
import "./MonthView.css"

interface MonthViewProps {
  referenceDate: Date
}

function MonthView({ referenceDate }: MonthViewProps) {
  const weeks = getMonthMatrix(referenceDate)
  const days = weeks.flat()
  const today = new Date()

  return (
    <div className="month-view">
      <div className="month-view__grid month-view__grid--header">
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} className="month-view__weekday">
            {label}
          </div>
        ))}
      </div>
      <div className="month-view__grid month-view__grid--body">
        {days.map((day) => {
          const classNames = ["month-view__day"]
          if (!isSameMonth(day, referenceDate)) {
            classNames.push("month-view__day--outside")
          }
          if (isSameDay(day, today)) {
            classNames.push("month-view__day--today")
          }

          return (
            <div key={day.toISOString()} className={classNames.join(" ")}>
              <span className="month-view__day-number">{day.getDate()}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MonthView
