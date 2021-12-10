import useSWR from 'swr'

const { REACT_APP_PIXABAY_API_KEY } = process.env

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export interface Image {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  imageWidth: number
  imageHeight: number
  imageSize: number
  views: number
  downloads: number
  collections: number
  likes: number
  comments: number
  user_id: number
  user: string
  userImageURL: string
}

interface Response {
  hits: Image[]
  total: number
  totalHits: number
}

type Args = {
  search: string
  perPage: number
  page: number
}

export const usePixabay = ({ search, page, perPage }: Args) => {
  const query = search.split(' ').join('+')
  const { data, error, isValidating } = useSWR<Response>(
    search
      ? `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${query}&per_page=${perPage}&page=${page}&min_width=${300}&image_type=photo`
      : null,
    fetcher,
  )

  return { data, isLoading: isValidating, error }
}
