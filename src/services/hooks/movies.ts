import { useEffect } from 'react'

import { MoviesResponse } from '../types'
import useAxios from '../useAxios'

export interface MoviesParam {
  limit: number
  offset: number
}

export const useGetMovies = ({ limit, offset }: MoviesParam) => {
  const { axiosCallback, data } = useAxios<MoviesResponse>({
    method: 'GET',
    url: `/movies/?api_key=ec18b0fe6ed5207389d7c5f45b12695824e373f0&format=json&limit=${limit}&offset=${offset}`,
  })

  useEffect(() => {
    axiosCallback()
  }, [])

  return {
    data,
  }
}
