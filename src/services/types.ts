export interface BaseMovie {
  id: string
  movie_banner: string
  title: string
  original_title: string
  original_title_romanised: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
  url: string
}

export type FilmsResponse = Pick<BaseMovie, 'id' | 'title' | 'movie_banner'>[]

export interface Image {
  icon_url: string
  medium_url: string
  screen_url: string
  screen_large_url: string
  small_url: string
  super_url: string
  thumb_url: string
  tiny_url: string
  original_url: string
  image_tags: string
}

export interface Producer {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Studio {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Writer {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Movies {
  api_detail_url: string
  box_office_revenue: string
  budget: string
  date_added: string
  date_last_updated: string
  deck: string
  description: string
  distributor?: any
  has_staff_review?: any
  id: number
  image: Image
  name: string
  producers: Producer[]
  rating: string
  release_date: string
  runtime: string
  site_detail_url: string
  studios: Studio[]
  total_revenue: string
  writers: Writer[]
}

export interface MoviesResponse {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: Movies[]
  version: string
}
