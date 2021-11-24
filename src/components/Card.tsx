import clsx from 'clsx'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { FC, ReactChild, useEffect, useRef, useState } from 'react'

interface Props {
  children?: ReactChild[] | ReactChild
  drag: boolean
  id?: any
  onVote(item: any, vote: boolean): void
}

const Card: FC<Props> = ({ children, drag, onVote, id }) => {
  const cardElem = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const [constrained, setConstrained] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right' | undefined>()
  const [velocity, setVelocity] = useState<number>()

  const getVote = (childNode: any, parentNode: any) => {
    const childRect = childNode.getBoundingClientRect()
    const parentRect = parentNode.getBoundingClientRect()
    let result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined
    return result
  }

  const getDirection = () => {
    return velocity && velocity >= 1
      ? 'right'
      : velocity && velocity <= -1
      ? 'left'
      : undefined
  }

  const getTrajectory = () => {
    setVelocity(x.getVelocity())
    setDirection(getDirection())
  }

  const flyAway = (min: number) => {
    if (!cardElem.current) return
    const flyAwayDistance = (direction: 'left' | 'right') => {
      // @ts-ignore
      const parentWidth =
        // @ts-ignore
        cardElem.current.parentNode.getBoundingClientRect().width
      // @ts-ignore
      const childWidth = cardElem.current.getBoundingClientRect().width
      return direction === 'left'
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2
    }

    // @ts-ignore
    if (direction && Math.abs(velocity) > min) {
      setConstrained(false)
      controls.start({
        x: flyAwayDistance(direction),
      })
    }
  }

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      const childNode = cardElem.current
      // @ts-ignore
      const parentNode = cardElem.current.parentNode
      const result = getVote(childNode, parentNode)
      // @ts-ignore
      result !== undefined && onVote(result)
    })

    return () => unsubscribeX()
  })

  return (
    <motion.div
      animate={controls}
      className="!absolute w-full max-w-xl z-50"
      drag={drag}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(500)}
      whileTap={{ scale: 1.1 }}
    >
      <div
        className={clsx(
          'shadow-lg rounded-xl overflow-hidden transform transition-transform duration-150 ease-in-out cursor-[grab] active:cursor-[grabbing]',
          drag && '!rotate-0'
        )}
        style={{
          transform: `rotate(${Math.random() * (5 - -5) + -5}deg)`,
        }}
        suppressHydrationWarning
      >
        {children}
      </div>
    </motion.div>
  )
}

export default Card
