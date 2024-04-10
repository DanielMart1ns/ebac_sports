import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store/store'
import { useGetProductsQuery } from '../services/api'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   adicionarAoCarrinho: (produto: ProdutoType) => void
//   favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () => {
  const { data: produto } = useGetProductsQuery()

  const favoritesItems = useSelector(
    (state: RootReducer) => state.favorite.item
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritesItems.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            // favoritar={favoritar}
            // aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
