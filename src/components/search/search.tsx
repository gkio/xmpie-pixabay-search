import { Button, Input } from '@xmpie/components'
import { useCallback, useState } from 'react'
import { Block } from '@xmpie/ui'
import { useNavigate } from 'react-router'
import { ROUTES } from '@xmpie/constants'
import { Content, Wrapper } from './search-styles'

type Props = {
  isFullHeight: boolean
  isSearching: boolean
  onSearch: (searchValue: string) => void
}

export const Search = ({ isFullHeight, onSearch, isSearching }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const navigate = useNavigate()
  const handleSearch = useCallback(() => {
    onSearch(searchValue)
  }, [searchValue, onSearch])

  const goToFavourites = useCallback(() => {
    navigate(ROUTES.favourites, { replace: true })
  }, [navigate])

  const buttonText = isSearching ? 'Searching...' : 'Search'

  return (
    <Content isFullHeight={isFullHeight}>
      <Wrapper>
        <Input
          type="text"
          placeholder="What image you would like to see from Pixabay?"
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
        />
        <Block marginHorizontal={10}>
          <Button runOnEnter onClick={handleSearch}>
            {buttonText}
          </Button>
        </Block>
        <Block marginHorizontal={10}>
          <Button onClick={goToFavourites}>Manage Favourites</Button>
        </Block>
      </Wrapper>
    </Content>
  )
}
