import styled from 'styled-components'

export const BackButtonContainer = styled.button`
  width: 10.8125rem;
  height: 3.375rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  margin-bottom: 3.75rem;

  line-height: 1.375rem;

  cursor: pointer;
`
