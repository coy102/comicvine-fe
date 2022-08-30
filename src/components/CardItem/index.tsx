import React, { memo } from 'react'

import { Box, Tooltip, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'

import StyledImage from '../StyledImage'

interface Props {
  coverSrc: string
  title: string
}

const CardItem = ({ coverSrc, title }: Props) => (
  <Box role="listitem" mb={5} display="flex" flexDirection="column">
    <StyledImage
      loader={() => coverSrc}
      src={coverSrc}
      width="100%"
      height={273}
    />
    <Tooltip title={title}>
      <Typography
        className="textWrap"
        mt={2}
        fontSize={fontSize[16]}
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Tooltip>
  </Box>
)
export default memo(CardItem)
