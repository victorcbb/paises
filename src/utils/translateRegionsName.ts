export function TranslateRegionsName(region: string): string {
  let translatedName = ''

  switch (true) {
    case region === 'Africa':
      translatedName = 'África'
      break
    case region === 'Americas':
      translatedName = 'Américas'
      break
    case region === 'Antarctic':
      translatedName = 'Antártica'
      break
    case region === 'Asia':
      translatedName = 'Ásia'
      break
    case region === 'Europe':
      translatedName = 'Europa'
      break
    case region === 'Oceania':
      translatedName = 'Oceania'
      break
  }

  return translatedName
}
