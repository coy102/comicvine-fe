import React, { memo } from 'react'

import { Box, Grid } from '@mui/material'

import CardItem from '~/components/CardItem'
import Loading from '~/components/Loading'

import useCustom from './hooks'

const Campaign = () => {
  const { data } = useCustom()

  if (data.loading) return <Loading />

  return (
    <Box>
      <Grid mt={5} data-testid="campaign-card-list" spacing={5} container>
        {data.movies.map(({ id, image, name }) => (
          <Grid lg={3} md={3} xs={6} sm={6} key={id} item>
            <CardItem coverSrc={image.small_url} title={name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default memo(Campaign)
