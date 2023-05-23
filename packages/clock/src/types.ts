export interface ClockProps {
  timezone: string
  date: Date
}

export interface ClockContainerProps {
  children: React.ReactElement | React.ReactElement[]
  refreshInterval?: number
}

export type StepStyle = 'tick' | 'sweep'

export type AnalogClockFaceType = 'roman' | 'arabic'

export type HMS = {
  hour: number
  minute: number
  second: number
}
