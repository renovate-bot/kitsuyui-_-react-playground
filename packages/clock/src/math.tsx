export function hourToDegree(hour: number): number {
  return hour * 30
}

export function secondToDegree(second: number): number {
  return second * 6
}

export function minuteToDegree(minute: number): number {
  return minute * 6
}

export function degreeToSin(degree: number): number {
  return Math.sin(degreeToRadian(degree))
}

export function degreeToCos(degree: number): number {
  return Math.cos(degreeToRadian(degree))
}

export function degreeToRadian(degree: number): number {
  return degree * (Math.PI / 180)
}
