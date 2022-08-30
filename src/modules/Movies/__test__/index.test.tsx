import { render } from '@testing-library/react'
import React from 'react'

import { mockedAxiosCallback, mockedUseAxios } from '~/mocks/services/useAxios'
import Movies from '~/modules/Movies'
import {
  loadingResponseData,
  responseData,
} from '~/services/hooks/__test__/movies.data'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('<Movies />', () => {
  afterEach(jest.clearAllMocks)

  it('should render loading at the first time', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: loadingResponseData,
    }))

    const movieContainer = render(<Movies />)

    expect(
      movieContainer.queryByTestId('movies-card-list')
    ).not.toBeInTheDocument()
    expect(movieContainer.queryByTestId('loading')).toBeInTheDocument()
  })

  it('should render Movies Card List', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const movieContainer = render(<Movies />)

    const cardContainer = movieContainer.queryByTestId('movies-card-list')
    const cardItemList = movieContainer.getAllByRole('listitem')

    expect(cardContainer).toBeInTheDocument()
    expect(cardItemList).toHaveLength(2)
    expect(movieContainer.queryByTestId('loading')).not.toBeInTheDocument()
  })
})
