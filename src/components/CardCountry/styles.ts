import Link from 'next/link'
import styled from 'styled-components'

export const CardCountryContainer = styled(Link)`
  width: 16.875rem;
  height: 21.1875rem;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.gray900};

  border-radius: 8px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.625rem;
  padding-left: 1.5rem;

  > strong {
    font-size: 1.25rem;
    line-height: 1.6875rem;
  }
`

export const ResumeData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  font-size: 0.875rem;
  line-height: 1.1875rem;
`
