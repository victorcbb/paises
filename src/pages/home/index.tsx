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
  const [filteredCoutries, setFilteredCountries] = useState<CoutryProps[]>([])
  const { search, region } = useSearch()

  useEffect(() => {
    async function fetchCountries() {
      if (search.length > 0) {
        try {
          const response = await api.get(`/translation/${search}`)

          setCountries(response.data)

          setFilteredCountries([])
          return
        } catch (error) {
          alert('Sem resultados')
        }
      }

      const response = await api.get(`/all`)

      return setCountries(response.data)
    }

    if (region.length > 1) {
      const response = coutries.filter((country) => country.region === region)

      setFilteredCountries(response)
    } else if (region === '') {
      setFilteredCountries([])
    }

    fetchCountries()
  }, [search, region])

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <SearchWrapper>
          <Input />
          <SelectIcon />
        </SearchWrapper>
        <CardCountryWrapper>
          {filteredCoutries.length > 1
            ? filteredCoutries.map((country, index) => (
                <CardCountry
                  key={index}
                  name={country.translations.por.common}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                  flag={country.flags.png}
                />
              ))
            : coutries.map((country, index) => (
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
