import styled from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
`

export const DetailsContent = styled.div`
  width: 100%;
  max-width: 82.625rem;

  padding: 0 1rem 4rem;
  margin: 1.875rem auto 0;

  h2 {
    font-size: 2rem;
    line-height: 2.75rem;
    font-weight: ${({ theme }) => theme.FONT_WEIGHTS.Bold};

    margin: 0 0 1.625rem;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;

  @media (min-width: 1440px) {
    gap: 2.875rem;
    align-items: flex-end;

    img {
      width: 35rem;
      height: 25.0625rem;
    }
  }
`

export const BlockInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FirstWrapperInfos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SecondWrapperInfos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Borders = styled.section`
  width: 100%;
  max-width: 28.5625rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  margin-top: 2rem;

  div {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    span {
      width: 5rem;
      height: 1.875rem;

      border: 1px solid ${({ theme }) => theme.COLORS.gray900};
      border-radius: 4px;

      text-align: center;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`
