import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  padding: 0 1.875rem;

  @media (min-width: 768px) {
    padding: 0 4.6875rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 80.625rem;
  margin: 0 auto;

  a {
    color: ${({ theme }) => theme.COLORS.gray900};
    font-weight: ${({ theme }) => theme.FONT_WEIGHTS.Bold};
    font-size: 2rem;
    line-height: 2.75rem;
  }
`
