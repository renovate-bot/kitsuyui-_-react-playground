# @kitsuyui/react-clock

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock)

<img width="134" alt="clock" src="https://github.com/kitsuyui/react-playground/assets/2596972/8af20bee-4852-44d1-8ac3-ae4d2661c817">

## Installation

### npm

```sh
npm install @kitsuyui/react-clock
```

### yarn

```sh
yarn add @kitsuyui/react-clock
```

## Usage

```tsx
import {
  ClockContainer,
  AnalogClock,
  DigitalClock,
} from '@kitsuyui/react-clock'

const Clock = () => {
  return (
    <ClockContainer>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}
```

ClockContainer is a component that provides DateContext.
Clocks are pure components that do not depend on DateContext. Only the date and timezone are passed as props.
So you can define your own Timer component by same interface.

```typescript
export interface ClockProps {
  timezone: string
  date: Date
}
```
