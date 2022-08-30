import { useEffect } from 'react'

import { MoviesResponse } from '../types'
import useAxios from '../useAxios'

export interface MoviesParam {
  offset: number
  search: string
}

export const defaultParam = {
  api_key: '76b211ef760607835ac3a928ce8ba84655d56f74',
  format: 'json',
  limit: 10,
  field_list: 'id,image,name',
}

export const useGetMovies = ({ offset, search }: MoviesParam) => {
  const { axiosCallback, data } = useAxios<MoviesResponse>({
    method: 'GET',
    url: `/movies`,
    params: {
      ...defaultParam,
      offset,
      filter: `name:${search}`,
    },
  })

  useEffect(() => {
    axiosCallback()
  }, [offset])

  return {
    axiosCallback,
    data,
  }
}
