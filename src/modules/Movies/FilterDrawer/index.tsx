import React, { memo } from 'react'

import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Box, Fab } from '@mui/material'

import CustomDrawer from '~/components/CustomDrawer'

interface Props {
  open: boolean
  handleToggleDrawer: () => void
}

const Filter = ({ open, handleToggleDrawer }: Props) => (
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
      <Box mb={4}>Drawer</Box>
    </CustomDrawer>
  </Box>
)
export default memo(Filter)
