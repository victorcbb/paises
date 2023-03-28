export function TranslateSubRegionsName(subRegion: string): string {
  let translatedName = ''

  switch (true) {
    case subRegion === 'Eastern Africa':
      translatedName = 'África Oriental'
      break
    case subRegion === 'Western Africa':
      translatedName = 'África Ocidental'
      break
    case subRegion === 'Middle Africa':
      translatedName = 'África Central'
      break
    case subRegion === 'Northern Africa':
      translatedName = 'Norte de África'
      break
    case subRegion === 'Southern Africa':
      translatedName = 'África do Sul'
      break
    case subRegion === 'Central America':
      translatedName = 'América Central'
      break
    case subRegion === 'North America':
      translatedName = 'América do Norte'
      break
    case subRegion === 'South America':
      translatedName = 'América do Sul'
      break
    case subRegion === 'Caribbean':
      translatedName = 'Caribe'
      break
    case subRegion === 'Eastern Asia':
      translatedName = 'Ásia Ocidental'
      break
    case subRegion === 'Central Asia':
      translatedName = 'Ásia Central'
      break
    case subRegion === 'Southern Asia':
      translatedName = 'Sul da Ásia'
      break
    case subRegion === 'Western Asia':
      translatedName = 'Ásia Oriental'
      break
    case subRegion === 'South-Eastern Asia':
      translatedName = 'Sudeste da Ásia'
      break
    case subRegion === 'Central Europe':
      translatedName = 'Europa Central'
      break
    case subRegion === 'Western Europe':
      translatedName = 'Europa Ocidental'
      break
    case subRegion === 'Northern Europe':
      translatedName = 'Europa do Norte'
      break
    case subRegion === 'Southern Europe':
      translatedName = 'Europa do Sul'
      break
    case subRegion === 'Eastern Europe':
      translatedName = 'Europa Oriental'
      break
    case subRegion === 'Australia and New Zealand':
      translatedName = 'Australásia'
      break
    case subRegion === 'Melanesia':
      translatedName = 'Melanésia'
      break
    case subRegion === 'Micronesia':
      translatedName = 'Micronésia'
      break
    case subRegion === 'Polynesia':
      translatedName = 'Polinésia'
      break
  }

  return translatedName
}
