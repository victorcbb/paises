import { CardCountry } from '@/components/CardCountry'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { SelectIcon } from '@/components/SelectInput'

import {
  CardCountryWrapper,
  HomeContainer,
  HomeContent,
  SearchWrapper,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <SearchWrapper>
          <Input />
          <SelectIcon />
        </SearchWrapper>
        <CardCountryWrapper>
          <CardCountry />
          <CardCountry />
          <CardCountry />
          <CardCountry />
        </CardCountryWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
