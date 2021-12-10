import { useCallback, useState } from 'react'
import { Image } from '@xmpie/api'
import { useLocalStorage } from './use-local-storage'

const LOCAL_STORAGE_KEY = '@xmpie:local-images'

export type FavouriteImagesActions = {
  images?: Image[]
  addFavourite: (image: Image) => void
  removeFavourite: (image: Image) => void
  isImageFavourite: (image: Image) => boolean
}

export const useFavouriteImages = (): FavouriteImagesActions => {
  const [images, setImages] = useLocalStorage<Image[]>(LOCAL_STORAGE_KEY, [])
  const [localImages, setLocalImages] = useState<Image[]>(images || [])

  const handleSet = useCallback(
    (images: Image[]) => {
      setImages(images)
      setLocalImages(images)
    },
    [setImages],
  )

  const addFavourite = useCallback(
    (image: Image) => {
      handleSet([...(images || []), image])
    },
    [handleSet, images],
  )

  const removeFavourite = useCallback(
    (image: Image) => {
      const newImages = images?.filter(({ previewURL }) => previewURL !== image.previewURL)
      handleSet(newImages || [])
    },
    [handleSet, images],
  )

  const isImageFavourite = useCallback(
    (image: Image) => {
      return Boolean(images?.find(({ previewURL }) => previewURL === image.previewURL))
    },
    [images],
  )

  return {
    images: localImages,
    addFavourite,
    removeFavourite,
    isImageFavourite,
  }
}
