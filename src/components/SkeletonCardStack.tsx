import clsx from 'clsx'
import { VFC } from 'react'
import useMedia from 'react-use/lib/useMedia'
import { Swiper, SwiperSlide } from 'swiper/react'
import SkeletonCard from './SkeletonCard'

const SkeletonCardStack: VFC = () => {
  const isMd = useMedia('(min-width: 768px)')

  return (
    <>
      <Swiper
        className={clsx('w-full h-full', !isMd && '!p-7')}
        slidesPerView={isMd ? 2 : 1}
        spaceBetween={64}
        centeredSlides
        grabCursor
      >
        <SwiperSlide className="flex animate-pulse" draggable={false}>
          <SkeletonCard isActive />
        </SwiperSlide>
        <SwiperSlide className="flex animate-pulse" draggable={false}>
          <SkeletonCard />
        </SwiperSlide>
        <SwiperSlide className="flex animate-pulse" draggable={false}>
          <SkeletonCard />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 z-50" />
    </>
  )
}

export default SkeletonCardStack
