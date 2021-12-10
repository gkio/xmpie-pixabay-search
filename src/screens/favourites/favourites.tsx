import { Button, Gallery } from '@xmpie/components'
import { useFavouriteImages } from '@xmpie/hooks'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'
import { ROUTES } from '@xmpie/constants'
import { Block } from '@xmpie/ui'
import { NoFavouritesText } from './favourites-styled'

export const Favourites = () => {
  const navigate = useNavigate()
  const { images, isImageFavourite, removeFavourite, addFavourite } = useFavouriteImages()

  const goToHome = useCallback(() => {
    navigate(ROUTES.home, { replace: true })
  }, [navigate])

  return (
    <Block marginHorizontal={20} marginVertical={20}>
      <Button onClick={goToHome}>Go To Home</Button>
      {!images?.length && <NoFavouritesText>No favourite images</NoFavouritesText>}
      <Gallery
        isImageFavourite={isImageFavourite}
        removeFavourite={removeFavourite}
        addFavourite={addFavourite}
        images={images}
      />
    </Block>
  )
}
