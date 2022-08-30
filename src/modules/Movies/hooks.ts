import { useCallback, useEffect, useState } from 'react'

import { useGetMovies } from '~/services/hooks/movies'
import { Movies } from '~/services/types'

const useCustom = () => {
  const [moviesPerPage, setMoviePerPage] = useState<Movies[]>([])
  const [offset, setOffset] = useState(0)

  const { data } = useGetMovies({ offset })

  useEffect(() => {
    setMoviePerPage((prev) => [...prev, ...(data?.response?.results || [])])
  }, [data.response])

  const handleLoadMore = useCallback(async () => {
    setOffset(offset + 10)
  }, [offset])

  return {
    data: {
      moviesPerPage,
      loading: data.loading,
    },
    methods: {
      handleLoadMore,
    },
  }
}

export default useCustom
