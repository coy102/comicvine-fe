import { useCallback, useMemo, useState } from 'react'

import { MoviesParam, useGetMovies } from '~/services/hooks/movies'

const useCustom = () => {
  const [filter] = useState<MoviesParam>({
    limit: 10,
    offset: 0,
  })

  const { data } = useGetMovies(filter)

  const [search, setSearch] = useState('')

  // Memo campaign list
  const memoMovie = useMemo(() => {
    const res = data.response

    return {
      movies: res?.results || [],
    }
  }, [data])

  // Handle change search
  const handleChangeSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  return {
    data: {
      ...memoMovie,
      loading: data.loading,
      search,
    },
    methods: {
      handleChangeSearch,
    },
  }
}

export default useCustom
