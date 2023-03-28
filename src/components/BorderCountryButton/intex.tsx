import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { BorderCountryButtonContainer } from './styles'

interface BorderCountryButtonProps {
  text: string
}

export function BorderCountryButton({ text }: BorderCountryButtonProps) {
  const [countryName, setCountryName] = useState('')

  useEffect(() => {
    async function fetchCountry() {
      const response = await api.get(`/alpha/${text}`)
      setCountryName(response.data[0].name.common)
    }

    fetchCountry()
  })
  return (
    <BorderCountryButtonContainer href={`/details/${countryName}`}>
      {text}
    </BorderCountryButtonContainer>
  )
}
