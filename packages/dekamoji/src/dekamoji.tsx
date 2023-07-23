import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Dekamoji: React.FC<Props> = (props): JSX.Element => {
  return (
    <div
      style={{
        // Display characters as wide as the screen size.
        width: '100%',
        height: '100%',
        lineHeight: '100%',
        fontSize: '100%',
      }}
    >
      {props.children}
    </div>
  )
}
