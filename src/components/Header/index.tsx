import { useSelector } from 'react-redux'
import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store/store'

type Props = {
  // itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const items = useSelector((state: RootReducer) => state.kart.items)

  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
