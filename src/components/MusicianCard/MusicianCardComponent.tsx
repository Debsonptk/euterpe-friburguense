/* eslint-disable import/order */
import { memo } from 'react'

import { IconType } from 'react-icons'

import { BackgroundContainer, TextSize } from './styles'

interface IHomeCardProps {
  icon: IconType
  title: string
  musician1: string
  musician2?: string
  musician3?: string
  musician4?: string
  musician5?: string
  musician6?: string
  musician7?: string
  musician8?: string
  musician9?: string
  musician10?: string
  musician11?: string
  musician12?: string
}

const MusicianCard: React.FC<IHomeCardProps> = ({
  icon,
  title,
  musician1,
  musician2,
  musician3,
  musician4,
  musician5,
  musician6,
  musician7,
  musician8,
  musician9,
  musician10,
  musician11,
  musician12,
}) => {
  const Icon = icon

  return (
    <BackgroundContainer className="d-flex flex-column h-100">
      <div className="d-flex">
        <Icon size={55} />
      </div>
      <h4 className="pt-2 pb-3">{title}</h4>
      <TextSize className=" mb-3 flex-grow-1">{musician1}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician2}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician3}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician4}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician5}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician6}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician7}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician8}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician9}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician10}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician11}</TextSize>
      <TextSize className=" mb-3 flex-grow-1">{musician12}</TextSize>
    </BackgroundContainer>
  )
}

export default memo(MusicianCard)
