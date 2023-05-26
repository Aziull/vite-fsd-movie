
export {
  useMediaRecomendedQuery,
  useMediaAllQuery,
  useMediaDetailsQuery,
  mediaApi
} from './api/mediaApi';

export type { MediaId, Media, MediaDetail } from './model/types'
export { default as MediaCard } from './ui/MediaCard/MediaCard'
export { mediaSlice } from './model/slice'