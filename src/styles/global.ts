import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.COLORS.white};
    color: ${({ theme }) => theme.COLORS.gray900};
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`
