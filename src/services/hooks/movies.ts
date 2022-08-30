import { useEffect } from 'react'

import { MoviesResponse } from '../types'
import useAxios from '../useAxios'

export interface MoviesParam {
  offset: number
}

const defaultParam = {
  api_key: 'ec18b0fe6ed5207389d7c5f45b12695824e373f0',
  format: 'json',
  limit: 10,
}

export const useGetMovies = ({ offset }: MoviesParam) => {
  const { axiosCallback, data } = useAxios<MoviesResponse>({
    method: 'GET',
    url: `/movies`,
    params: {
      ...defaultParam,
      offset,
    },
  })

  useEffect(() => {
    axiosCallback()
  }, [offset])

  return {
    data,
  }
}
