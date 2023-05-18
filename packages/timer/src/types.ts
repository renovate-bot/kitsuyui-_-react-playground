export interface TimerValue {
  remaining: number
  running: boolean
}

export interface TimerActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
  incrementTimerValue(value: number): void
  setTimerValue(value: number): void
}

export type TimerProps = TimerValue & TimerActions

export interface TimerContainerProps {
  refreshInterval?: number
  children: React.ReactElement | React.ReactElement[]
  onStart?(): void
  onStop?(): void
  onComplete?(): void
}
