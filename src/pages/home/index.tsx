import { CardCountry } from '@/components/CardCountry'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { SelectIcon } from '@/components/SelectInput'
import { useSearch } from '@/context/SearchContext'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'

import {
  CardCountryWrapper,
  HomeContainer,
  HomeContent,
  SearchWrapper,
} from './styles'

interface CoutryProps {
  translations: {
    por: {
      common: string
    }
  }
  population: number
  region: string
  capital: string
  flags: {
    png: string
  }
}

export default function Home() {
  const [coutries, setCountries] = useState<CoutryProps[]>([])
  const { search } = useSearch()

  useEffect(() => {
    async function fetchCountries() {
      if (search.length > 0) {
        try {
          const response = await api.get(`/translation/${search}`)

          return setCountries(response.data)
        } catch (error) {
          alert('Sem resultados')
        }
      }

      const response = await api.get(`/all`)

      return setCountries(response.data)
    }

    fetchCountries()
  }, [search])

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <SearchWrapper>
          <Input />
          <SelectIcon />
        </SearchWrapper>
        <CardCountryWrapper>
          {coutries.map((country, index) => (
            <CardCountry
              key={index}
              name={country.translations.por.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flags.png}
            />
          ))}
        </CardCountryWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
