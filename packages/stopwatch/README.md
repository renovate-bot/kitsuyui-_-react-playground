# @kitsuyui/react-stopwatch

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch)

<img width="204" alt="Stopwatch" src="https://github.com/kitsuyui/react-playground/assets/2596972/b25cc228-24ce-45eb-850a-c3775b708d3d">

## Installation

### npm

```sh
npm install @kitsuyui/react-stopwatch
```

### yarn

```sh
yarn add @kitsuyui/react-stopwatch
```

## Usage

```tsx
import { StopWatchContainer, MinimalStopwatch } from '@kitsuyui/react-stopwatch'

const Stopwatch = () => {
  return (
    <StopwatchContainer>
      <StopwatchContext.Consumer>
        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
  )
}
```

StopwatchContainer is a component that provides StopwatchContext.
Stopwatchs are pure components that do not depend on StopwatchContext. Accept StopwatchProps as props.
So you can define your own Stopwatch component by same interface.

```typescript
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
```
