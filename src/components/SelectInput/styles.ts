import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const Root = styled(Select.Root)``

export const Trigger = styled(Select.Trigger)`
  width: 12.25rem;
  height: 3.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  > span {
    font-size: 1rem;
  }
`

export const Value = styled(Select.Value)``

export const Icon = styled(Select.Icon)``

export const Portal = styled(Select.Portal)`
  width: 100%;
`

export const Content = styled(Select.Content)`
  width: 12.25rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: -0.5rem;
`

export const ScrollDownButton = styled(Select.ScrollDownButton)``

export const Viewport = styled(Select.Viewport)``

export const Item = styled(Select.Item)`
  height: 2rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.COLORS.white};

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ItemText = styled(Select.ItemText)``
