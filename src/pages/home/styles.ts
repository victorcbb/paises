import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.div`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 75px;
  }
`

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 80.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  margin: 1.875rem auto 3.75rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const CardCountryWrapper = styled.div`
  max-width: 80.625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  flex-wrap: wrap;

  margin: 0 auto 6rem;

  @media (min-width: 768px) {
    gap: 4.375rem;
  }
`
