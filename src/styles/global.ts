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

  body, input, textarea {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHTS.regular};    
  }

  a {
    text-decoration: none;
  }

  input[type=text] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
`
