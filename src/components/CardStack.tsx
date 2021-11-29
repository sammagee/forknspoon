import clsx from 'clsx'
import uniqueId from 'lodash/uniqueId'
import { VFC } from 'react'
import useMedia from 'react-use/lib/useMedia'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { usePreferences } from '../hooks/usePreferences'
import RecipeCard from './RecipeCard'
import RestaurantCard from './RestaurantCard'

interface CardStackProps {
  items: any[]
}

const CardStack: VFC<CardStackProps> = ({ items }) => {
  const isMd = useMedia('(min-width: 768px)')
  const [preferences] = usePreferences()

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
          {({ isActive }) =>
            preferences.diningOptions === 'recipe' ? (
              <RecipeCard isActive={isActive} item={item} />
            ) : (
              <RestaurantCard isActive={isActive} item={item} />
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardStack
