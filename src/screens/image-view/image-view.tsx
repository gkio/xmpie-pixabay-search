import { useImageViewQuery } from '@xmpie/hooks'
import { Content, ImageWrapper } from './image-view-styled'

export const ImageView = () => {
  const {
    queryParams: { imageSrc },
  } = useImageViewQuery()

  return (
    <Content>
      <ImageWrapper src={imageSrc} alt="image view" />
    </Content>
  )
}
