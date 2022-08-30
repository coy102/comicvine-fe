import React, { memo } from 'react'

import { Box, Divider, Grid } from '@mui/material'
import { Waypoint } from 'react-waypoint'

import CardItem from '~/components/CardItem'
import Loading from '~/components/Loading'
import { fontSize } from '~/styles/theme'

import FilterDrawer from './FilterDrawer'
import useCustom from './hooks'

const Campaign = () => {
  const { data, methods } = useCustom()

  return (
    <Box>
      <Box mb={2} mt={5} fontSize={fontSize[20]}>
        Movies
      </Box>
      <Divider />
      {data.moviesPerPage.length > 0 && (
        <Grid mt={5} data-testid="movies-card-list" spacing={5} container>
          {data.moviesPerPage.map(({ id, image, name }, i) => (
            <Grid xs={6} sm={6} key={id} item>
              <CardItem coverSrc={image.small_url} title={name} />
              {i === data.moviesPerPage.length - 1 && (
                <Waypoint onEnter={methods.handleLoadMore} />
              )}
            </Grid>
          ))}
        </Grid>
      )}
      {data.loading && <Loading />}
      <FilterDrawer
        handleChangeSearch={methods.handleChangeSearch}
        handleClickFilter={methods.handleClickFilter}
        handleToggleDrawer={methods.handleToggleDialog}
        open={data.toggleDrawer}
        searchValue={data.search}
      />
    </Box>
  )
}
export default memo(Campaign)
