import { Clock, Stopwatch, Timer } from '@kitsuyui/react-components'
import React from 'react'
import useSound from 'use-sound'

import './App.css'
import Sound from './sound_effects/24.wav'

function App() {
  const [completeSound] = useSound(Sound, { playbackRate: 1 })
  return (
    <div className="App">
      <Clock />
      <Timer
        onComplete={() => {
          return completeSound()
        }}
      />
      <Stopwatch />
    </div>
  )
}

export default App
