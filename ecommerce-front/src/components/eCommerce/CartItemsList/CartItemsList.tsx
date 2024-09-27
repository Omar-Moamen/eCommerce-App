import { CartItem } from "@components/eCommerce"
import { TProduct } from "@customTypes/product"

type TCartItemsListProps = {
   products: TProduct[],
}

function CartItemsList({ products }: TCartItemsListProps)
{
   const renderList = products.map(el => <CartItem key={el.id} {...el} />)

   return (
      <>
         {renderList}
      </>
   )
}

export default CartItemsList
