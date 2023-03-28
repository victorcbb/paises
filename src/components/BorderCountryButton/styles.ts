import Link from 'next/link'
import styled from 'styled-components'

export const BorderCountryButtonContainer = styled(Link)`
  width: 5rem;
  height: 1.875rem;

  border: 1px solid ${({ theme }) => theme.COLORS.gray900};
  border-radius: 4px;

  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.COLORS.gray900};
`
