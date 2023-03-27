import Image from 'next/image'
import { CardCountryContainer, Resume, ResumeData } from './styles'

import flagGermany from '../../assets/germany.png'

export function CardCountry() {
  return (
    <CardCountryContainer>
      <Image
        src={flagGermany}
        alt="bandeira da Alemnha"
        width={270}
        height={158}
      />
      <Resume>
        <strong>Alemanha</strong>
        <ResumeData>
          <span>
            <strong>População:</strong> 81.000.000
          </span>
          <span>
            <strong>Região:</strong> Europa
          </span>
          <span>
            <strong>Capital:</strong> Berlin
          </span>
        </ResumeData>
      </Resume>
    </CardCountryContainer>
  )
}
