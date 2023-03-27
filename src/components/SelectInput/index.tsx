import { FiChevronDown } from 'react-icons/fi'
import {
  Content,
  Icon,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from './styles'

export function SelectIcon() {
  return (
    <Root>
      <Trigger>
        <Value placeholder="Filtre pela região" />
        <Icon>
          <FiChevronDown size={28} />
        </Icon>
      </Trigger>
      <Portal>
        <Content position="popper">
          <Viewport>
            <Item value="Americas">
              <ItemText>Americas</ItemText>
            </Item>

            <Item value="Europa">
              <ItemText>Europa</ItemText>
            </Item>

            <Item value="Asia">
              <ItemText>Asia</ItemText>
            </Item>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  )
}
