import Link from 'next/link'
import { Content, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <Link href={'/'}>Países</Link>
      </Content>
    </HeaderContainer>
  )
}
