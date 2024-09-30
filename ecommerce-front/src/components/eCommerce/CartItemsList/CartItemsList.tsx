import { CartItem } from "@components/eCommerce"
import { TProduct } from "@customTypes/product"

type TCartItemsListProps = {
   products: TProduct[],
}

function CartItemsList({ products }: TCartItemsListProps)
{
   const renderList = products.map(product => <CartItem key={product.id} {...product} />)

   return (
      <>
         {renderList}
      </>
   )
}

export default CartItemsList
