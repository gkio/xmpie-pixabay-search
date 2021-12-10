import { FavouriteImagesActions } from '@xmpie/hooks'
import { useCallback } from 'react'
import { Image } from '@xmpie/api'

export const useGallery = ({
  addFavourite,
  removeFavourite,
  isImageFavourite,
}: FavouriteImagesActions) => {
  const handleOnClickFavourite = useCallback(
    (image: Image) => {
      const isFavourite = isImageFavourite(image)
      if (isFavourite) {
        removeFavourite(image)
        return
      }

      addFavourite(image)
    },
    [isImageFavourite, addFavourite, removeFavourite],
  )

  return {
    handleOnClickFavourite,
  }
}
