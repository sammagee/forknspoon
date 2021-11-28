import clsx from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { VFC } from 'react'
import useMedia from 'react-use/lib/useMedia'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'

interface CardStackProps {
  items: any[]
}

const CardStack: VFC<CardStackProps> = ({ items }) => {
  const isMd = useMedia('(min-width: 768px)')

  return (
    <Swiper
      className={clsx('w-full h-full', !isMd && '!p-7')}
      slidesPerView={isMd ? 2 : 1}
      spaceBetween={64}
      centeredSlides
      grabCursor
    >
      {items.map((item) => (
        <SwiperSlide key={uniqueId()} className="flex">
          {({ isActive }) => <Card isActive={isActive} item={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardStack
