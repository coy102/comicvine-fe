import { memo } from 'react'

import styled from '@emotion/styled'
import { AppBar, Box, Toolbar } from '@mui/material'

import { IMG_BRAND } from '~/config/image'

import StyledImage from '../StyledImage'

const StyledAppbar = styled(AppBar)({
  maxWidth: 500,
  margin: '0px auto',
  right: 'unset',
})

const Navbar = () => (
  <Box width="100%" display="flex" justifyContent="center">
    <StyledAppbar position="fixed">
      <Toolbar variant="dense">
        <Box py={1}>
          <StyledImage
            alt="logo"
            src={IMG_BRAND.BRAND_LOGO}
            height={50}
            width="100%"
            unoptimized
          />
        </Box>
      </Toolbar>
    </StyledAppbar>
  </Box>
)

export default memo(Navbar)
