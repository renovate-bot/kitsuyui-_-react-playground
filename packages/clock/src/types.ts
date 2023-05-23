export interface ClockProps {
  timezone: string
  date: Date
}

export interface ClockContainerProps {
  children: React.ReactElement | React.ReactElement[]
  refreshInterval?: number
}
