import { useCart } from '../../../hooks/use-cart'

export default function index() {
  const { items, total } = useCart()

  return (
    <div>
      <h1>OLA</h1>
    </div>
  )
}
