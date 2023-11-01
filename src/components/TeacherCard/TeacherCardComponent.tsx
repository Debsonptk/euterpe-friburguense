import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { Card, CoverImage, DescriptionColor } from './styles'

interface IItemsProps {
  cover: string
  name: string
  description?: string
  instrument?: string
}

const ItemsCard: React.FC<IItemsProps> = ({
  cover,
  name,
  description,
  instrument,
}) => {
  return (
    <Card className="w-100">
      <Ratio aspectRatio="16x9">
        <CoverImage cover={cover} />
      </Ratio>
      <div className="px-4 pt-4">
        <h4 className="d-flex justify-content-center">{name}</h4>
        <p className="d-flex justify-content-center pb-1">{instrument}</p>
        <DescriptionColor className="pb-2">{description}</DescriptionColor>
      </div>
    </Card>
  )
}

export default memo(ItemsCard)
