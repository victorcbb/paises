import { useRouter } from 'next/router'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { BackButtonContainer } from './styles'

export function BackButton() {
  const router = useRouter()

  return (
    <BackButtonContainer type="button" onClick={() => router.back()}>
      <HiOutlineArrowLeft size={28} />
      Voltar
    </BackButtonContainer>
  )
}
