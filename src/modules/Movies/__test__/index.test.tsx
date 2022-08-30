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
  it('should render loading at the first time', () => {
    mockedUseAxios.mockImplementationOnce(() => ({
      axiosCallback: mockedAxiosCallback,
      data: loadingResponseData,
    }))

    const campaignContainer = render(<Movies />)

    expect(campaignContainer.queryByTestId('loading')).toBeInTheDocument()
    expect(
      campaignContainer.queryByTestId('movies-card-list')
    ).not.toBeInTheDocument()
  })

  it('should render Movies Card List', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const campaignContainer = render(<Movies />)

    const cardContainer = campaignContainer.queryByTestId('movies-card-list')
    const cardItemList = campaignContainer.getAllByRole('listitem')

    expect(cardContainer).toBeInTheDocument()
    expect(cardItemList).toHaveLength(2)

    expect(campaignContainer.queryByTestId('loading')).not.toBeInTheDocument()
  })
})
