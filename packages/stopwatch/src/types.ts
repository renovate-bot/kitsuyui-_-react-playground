export interface StopwatchValue {
  elapsedTime: number
  running: boolean
}

export interface StopwatchActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
}

export type StopwatchProps = StopwatchValue & StopwatchActions

export interface StopwatchContainerProps {
  refreshInterval?: number
  children: React.ReactElement | React.ReactElement[]
  onStart?(): void
  onStop?(): void
}
