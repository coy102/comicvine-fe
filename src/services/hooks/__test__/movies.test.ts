import { renderHook } from '@testing-library/react-hooks'

import { mockedAxiosCallback, mockedUseAxios } from '~/mocks/services/useAxios'

import { useGetMovies } from '../movies'

import {
  config,
  errorResponseData,
  loadingResponseData,
  responseData,
} from './movies.data'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('Hooks services campaign - useGetMovies', () => {
  afterEach(jest.clearAllMocks)

  it('should return loading response', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: loadingResponseData,
    }))

    const { result } = renderHook(() => useGetMovies({ offset: 0 }))

    expect(mockedUseAxios).toHaveBeenCalledWith(config)

    expect(mockedAxiosCallback).toHaveBeenCalled()
    expect(result.current.data).toEqual(loadingResponseData)
  })

  it('should return success response', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const { result } = renderHook(() => useGetMovies({ offset: 0 }))

    expect(mockedUseAxios).toHaveBeenCalledWith(config)

    expect(mockedAxiosCallback).toHaveBeenCalled()
    expect(result.current.data).toEqual(responseData)
  })

  it('should return error response', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: errorResponseData,
    }))

    const { result } = renderHook(() => useGetMovies({ offset: 0 }))

    expect(mockedUseAxios).toHaveBeenCalledWith(config)

    expect(mockedAxiosCallback).toHaveBeenCalled()
    expect(result.current.data).toEqual(errorResponseData)
  })
})
