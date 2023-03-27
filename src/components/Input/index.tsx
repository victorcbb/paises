import { AiOutlineSearch } from 'react-icons/ai'
import { InputContainer } from './styles'

export function Input() {
  return (
    <InputContainer>
      <AiOutlineSearch size={22} />
      <input type="text" placeholder="Pesquise um país" />
    </InputContainer>
  )
}
