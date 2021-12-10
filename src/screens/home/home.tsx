import { Gallery, Search } from '@xmpie/components'
import { useFavouriteImages } from '@xmpie/hooks'
import { useHome } from './use-home'

export const Home = () => {
  const { isInitialView, images, isLoading, handleSearch } = useHome()
  const { isImageFavourite, removeFavourite, addFavourite } = useFavouriteImages()

  return (
    <div>
      <Search isFullHeight={isInitialView} onSearch={handleSearch} isSearching={isLoading} />
      <Gallery
        isImageFavourite={isImageFavourite}
        removeFavourite={removeFavourite}
        addFavourite={addFavourite}
        isLoading={isLoading}
        images={images}
      />
    </div>
  )
}
