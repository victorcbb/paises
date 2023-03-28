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
            <Item value="Africa">
              <ItemText>África</ItemText>
            </Item>
            <Item value="Americas">
              <ItemText>Américas</ItemText>
            </Item>
            <Item value="Asia">
              <ItemText>Ásia</ItemText>
            </Item>

            <Item value="Europe">
              <ItemText>Europa</ItemText>
            </Item>

            <Item value="Antarctic">
              <ItemText>Antártica</ItemText>
            </Item>
            <Item value="Oceania">
              <ItemText>Oceania</ItemText>
            </Item>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  )
}
