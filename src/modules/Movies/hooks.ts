import { useCallback, useEffect, useState } from 'react'

import { useGetMovies } from '~/services/hooks/movies'
import { Movies } from '~/services/types'

const useCustom = () => {
  const [search, setSearch] = useState('')
  const [moviesPerPage, setMoviePerPage] = useState<Movies[]>([])
  const [offset, setOffset] = useState(0)
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const { axiosCallback, data } = useGetMovies({ offset, search })

  useEffect(() => {
    setMoviePerPage((prev) => [...prev, ...(data?.response?.results || [])])
  }, [data.response])

  const handleLoadMore = useCallback(async () => {
    setOffset(offset + 10)
  }, [offset])

  const handleToggleDialog = useCallback(() => {
    setToggleDrawer((prev) => !prev)
  }, [])

  const handleChangeSearch = useCallback((e) => setSearch(e.target.value), [])

  const handleClickFilter = useCallback(() => {
    axiosCallback()
  }, [])

  return {
    data: {
      moviesPerPage,
      search,
      toggleDrawer,
      loading: data.loading,
    },
    methods: {
      handleClickFilter,
      handleChangeSearch,
      handleLoadMore,
      handleToggleDialog,
    },
  }
}

export default useCustom
