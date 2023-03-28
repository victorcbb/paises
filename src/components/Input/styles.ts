import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  max-width: 29.5625rem;
  height: 54px;
  box-shadow: 0px 0px 6px rgba(12, 16, 19, 0.5);
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding-inline: 1rem;

  svg {
    fill: ${({ theme }) => theme.COLORS.gray500};
  }

  > input {
    width: 100%;
    background: transparent;
    border: none;
    line-height: 1.375rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray500};
    }
  }
`
