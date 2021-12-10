import type { Image } from '@xmpie/api'
import { Block, Star } from '@xmpie/ui'
import { FavouriteImagesActions, useImageViewQuery } from '@xmpie/hooks'
import { useCallback } from 'react'
import { ROUTES } from '@xmpie/constants'
import { Content, Img } from './gallery-styled'
import { useGallery } from './use-gallery'

type Props = FavouriteImagesActions & {
  images?: Image[]
  isLoading?: boolean
}

export const Gallery = ({ images, addFavourite, removeFavourite, isImageFavourite }: Props) => {
  const { navigateTo } = useImageViewQuery()
  const { handleOnClickFavourite } = useGallery({
    addFavourite,
    removeFavourite,
    isImageFavourite,
  })

  const goToImageView = useCallback(
    (imageSrc: string) => {
      navigateTo(ROUTES.imageView, {
        imageSrc,
      })
    },
    [navigateTo],
  )

  if (!images?.length) return null

  return (
    <Content>
      {images?.map((image) => (
        <Block key={image.id} marginVertical={20} marginHorizontal={20}>
          <Img
            onClick={() => goToImageView(image.previewURL)}
            key={image.pageURL}
            src={image.previewURL}
            alt={image.tags}
          />
          <Block onClick={() => handleOnClickFavourite(image)}>
            <Star isWhite={isImageFavourite(image)} />
          </Block>
        </Block>
      ))}
    </Content>
  )
}
