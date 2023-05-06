import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import React from 'react'

import './App.css'

const Clock = () => {
  return (
    <ClockContainer>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="Asia/Tokyo" date={date} />
            <AnalogClock timezone="America/New_York" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  )
}

export default App
