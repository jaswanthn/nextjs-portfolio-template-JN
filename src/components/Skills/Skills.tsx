'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { skillList } from '@/appData'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

const Skills = () => {
  return (
    <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
      <div className="flex gap-8 lg:gap-24">
        {skillList.map(({ name, icon }, index) => (
          <span
            key={index}
            className="font-inter text-primary-content flex items-center text-xs lg:text-base">
            <Image src={icon} alt={name} className="mx-2 size-11 lg:size-14" />
            {name}
          </span>
        ))}
      </div>
    </MarqueeWrapper>
  )
}

export default Skills
