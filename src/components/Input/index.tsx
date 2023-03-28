import { ChangeEvent } from 'react'

import { useSearch } from '@/context/SearchContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './styles'

export function Input() {
  const { setSearch } = useSearch()

  return (
    <InputContainer>
      <AiOutlineSearch size={22} />
      <input
        type="text"
        placeholder="Pesquise um país"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </InputContainer>
  )
}
