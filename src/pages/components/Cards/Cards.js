import Link from 'next/link'
import { useContext } from 'react'

import { CartContext } from '../../../hooks/use-cart'
import { BACKEND_URL } from '../../helpers'
import CartButton from '../CartButton'
import * as S from './stayled'
function Card({ slug, id, foto, description, valor }) {
  const { addToCart } = useContext(CartContext)
  console.log({ addToCart })
  return (
    <S.Wrapper1 key={id}>
      <S.Wrapper2>
        <S.Img src={`${BACKEND_URL + foto}`}></S.Img>
        <S.Descricao>
          <p>{description}</p>
          <p>{valor}</p>
        </S.Descricao>
        <p>
          <Link href={`produtos/${slug}`}>Comprar</Link>
        </p>
      </S.Wrapper2>
    </S.Wrapper1>
  )
}

export default Card
