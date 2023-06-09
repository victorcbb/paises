import { BackButton } from '@/components/BackButton'
import { BorderCountryButton } from '@/components/BorderCountryButton/intex'
import { Header } from '@/components/Header'
import { api } from '@/services/api'
import { TranslateRegionsName } from '@/utils/translateRegionsName'
import { TranslateSubRegionsName } from '@/utils/translateSubRegionsName'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import {
  BlockInfos,
  Borders,
  DetailsContainer,
  DetailsContent,
  DetailsWrapper,
  FirstWrapperInfos,
  SecondWrapperInfos,
  WrapperInfos,
} from './styles'

interface DetailsProps {
  country: {
    name: string
    nativeName: string
    population: number
    region: string
    subRegion: string
    capital: string
    tld: string
    currency: string
    lenguages: string
    flagURL: string
    borders: string[] | undefined
  }
}

export default function Details({ country }: DetailsProps) {
  const splitedLenguages = country.lenguages.split('"')
  const lenguages = []
  for (let i = 0; i <= splitedLenguages.length; i++) {
    if ((i + 1) % 4 === 0) {
      lenguages.push(splitedLenguages[i])
    }
  }
  const concatenatedElementsArray = lenguages.join(', ')

  const translatedRegionName = TranslateRegionsName(country.region)
  const translatedSubRegionName = TranslateSubRegionsName(country.subRegion)

  return (
    <DetailsContainer>
      <Header />
      <DetailsContent>
        <BackButton />
        <DetailsWrapper>
          <Image
            src={country.flagURL}
            alt="bandeira"
            width={358}
            height={220}
            priority
            quality={100}
          />
          <BlockInfos>
            <h2>{country.name}</h2>
            <WrapperInfos>
              <FirstWrapperInfos>
                <p>
                  <strong>Nome nativo: </strong>
                  {country.nativeName}
                </p>
                <p>
                  <strong>População: </strong>
                  {country.population.toLocaleString('pt-BR')}
                </p>
                <p>
                  <strong>Região: </strong>
                  {translatedRegionName}
                </p>
                <p>
                  <strong>Sub-região: </strong>
                  {translatedSubRegionName}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </FirstWrapperInfos>
              <SecondWrapperInfos>
                <p>
                  <strong>TLD: </strong>
                  {country.tld}
                </p>
                <p>
                  <strong>Moeda: </strong>
                  {country.currency}
                </p>
                <span>
                  <strong>Idiomas: </strong>
                  {concatenatedElementsArray}
                </span>
              </SecondWrapperInfos>
            </WrapperInfos>
            <Borders>
              <strong>Fronteiras:</strong>
              <div>
                {country.borders &&
                  country.borders.map((border) => (
                    <BorderCountryButton key={border} text={border} />
                  ))}
              </div>
            </Borders>
          </BlockInfos>
        </DetailsWrapper>
      </DetailsContent>
    </DetailsContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const countryName = context.params?.name

  interface CountryProps {
    translations: {
      por: {
        common: string
      }
      cym: {
        common: string
      }
    }
    population: number
    region: string
    subregion: string
    capital: string
    tld: string
    flags: {
      png: string
    }
    borders: string[] | null
  }

  const country = await api.get(`/translation/${countryName}`)

  if (!country) {
    return {
      notFound: true,
    }
  }

  const {
    translations,
    population,
    region,
    subregion,
    capital,
    tld,
    flags,
    borders,
  }: CountryProps = country.data[0]

  const currencyAcronyn: string[] = JSON.stringify(
    country.data[0].currencies,
  ).split('"')

  const lenguages: string = JSON.stringify(country.data[0].languages)

  return {
    props: {
      country: {
        name: translations.por.common,
        nativeName: translations.cym.common,
        population,
        region,
        subRegion: subregion,
        capital,
        tld,
        currency: currencyAcronyn[1],
        lenguages,
        flagURL: flags.png,
        borders: borders === undefined ? null : borders,
      },
    },
  }
}
