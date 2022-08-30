import React, { memo } from 'react'

import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box, Button, Fab, TextField } from '@mui/material'

import CustomDrawer from '~/components/CustomDrawer'

interface Props {
  open: boolean
  handleChangeSearch: (e) => void
  handleClickFilter: () => void
  handleToggleDrawer: () => void
  searchValue: string
}

const Filter = ({
  open,
  handleChangeSearch,
  handleClickFilter,
  handleToggleDrawer,
  searchValue,
}: Props) => (
  <Box>
    <Fab
      data-testid="fab-filter"
      onClick={handleToggleDrawer}
      color="primary"
      size="small"
      variant="extended"
      sx={{
        position: 'fixed',
        bottom: 10,
        py: 5,
        px: 4,
      }}
    >
      <FilterAltIcon sx={{ mr: 1 }} />
      Filter
    </Fab>
    <CustomDrawer
      open={open}
      handleToggleDialog={handleToggleDrawer}
      title="Filter"
    >
      <Box mb={4}>
        <TextField
          label="Filter by Alias"
          value={searchValue}
          onChange={handleChangeSearch}
          variant="outlined"
          margin="dense"
          inputProps={{
            'data-testid': 'select-sort-by',
          }}
          fullWidth
        />
      </Box>
      <Box>
        <Button onClick={handleClickFilter} fullWidth>
          Filter
        </Button>
      </Box>
    </CustomDrawer>
  </Box>
)
export default memo(Filter)
