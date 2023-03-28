import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextData {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  region: string
  setRegion: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext({} as SearchContextData)

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch, region, setRegion }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext)

  return context
}
