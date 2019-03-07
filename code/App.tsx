import { Data, animate, Override, Animatable } from 'framer'

const data = Data({ left: Animatable(0) })

export const Scale: Override = () => {
  return {
    left: data.left,
    onTap() {
      var move = Math.floor(Math.random() * 230)
      animate.spring(data.left, move)
    },
  }
}
