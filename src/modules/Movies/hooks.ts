import { useCallback, useEffect, useState } from 'react'

import { useGetMovies } from '~/services/hooks/movies'
import { Movies } from '~/services/types'

const useCustom = () => {
  const [moviesPerPage, setMoviePerPage] = useState<Movies[]>([])
  const [offset, setOffset] = useState(0)

  const { data } = useGetMovies({ offset })

  const [search, setSearch] = useState('')

  useEffect(() => {
    setMoviePerPage((prev) => [...prev, ...(data?.response?.results || [])])
  }, [data.response])

  // Handle change search
  const handleChangeSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const handleLoadMore = useCallback(async () => {
    setOffset(offset + 10)
  }, [offset])

  return {
    data: {
      moviesPerPage,
      loading: data.loading,
      search,
    },
    methods: {
      handleLoadMore,
      handleChangeSearch,
    },
  }
}

export default useCustom
