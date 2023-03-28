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
}

const SearchContext = createContext({} as SearchContextData)

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext)

  return context
}
