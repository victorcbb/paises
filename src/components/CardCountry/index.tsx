import Image from 'next/image'
import { CardCountryContainer, Resume, ResumeData } from './styles'

import { memo } from 'react'

interface CardCountryProps {
  name: string
  population: number
  region: string
  capital: string
  flag: string
}

export const CardCountry = memo(function CardCountry({
  name,
  population,
  capital,
  region,
  flag,
}: CardCountryProps) {
  return (
    <CardCountryContainer href={`/details/${name}`}>
      <Image
        src={flag}
        alt={`bandeira do(a) ${name}`}
        width={270}
        height={158}
        priority
      />
      <Resume>
        <strong>{name}</strong>
        <ResumeData>
          <span>
            <strong>População:</strong> {population.toLocaleString('pt-BR')}
          </span>
          <span>
            <strong>Região:</strong> {region}
          </span>
          <span>
            <strong>Capital:</strong> {capital}
          </span>
        </ResumeData>
      </Resume>
    </CardCountryContainer>
  )
})
