import { Children, FC, useState } from 'react'
import Card from './Card'

interface Props {
  onVote(item: any, vote: boolean): void
}

const CardStack: FC<Props> = ({ children, onVote }) => {
  const [stack, setStack] = useState(Children.toArray(children))

  const pop = (array: any[]) =>
    array.filter((_, index) => index < array.length - 1)

  const handleVote = (item: any, vote: boolean) => {
    let newStack = pop(stack)
    setStack(newStack)
    onVote(item, vote)
  }

  return (
    <div className="z-10 flex items-center justify-center flex-1 w-full h-full overflow-hidden">
      {stack.map((item: any, index: number) => {
        let isTop = index === stack.length - 1

        return (
          <Card
            drag={isTop} // Only top card is draggable
            key={item.key || index}
            onVote={(result) => handleVote(item, result)}
          >
            {item}
          </Card>
        )
      })}
    </div>
  )
}

export default CardStack
