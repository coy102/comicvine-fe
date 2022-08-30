import { css } from '@emotion/react'

const globalCss = css`
  html,
  body {
    overflow-x: hidden;
  }
  * {
    fontfamily: Inter, sans-serif;
  }
  .textWrap {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .drawer {
    max-width: 500px;
    margin: auto !important;
    display: flex;
  }
`

export default globalCss
