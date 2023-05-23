import { face as arabicFace } from './arabic'
import { face as romanFace } from './roman'
export type FaceType = 'roman' | 'arabic'

export function computeFace(num: number, faceType: FaceType): string {
  switch (faceType) {
    case 'arabic':
      return arabicFace(num)
    case 'roman':
      return romanFace(num)
  }
}
