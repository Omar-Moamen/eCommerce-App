import { createSelector } from "@reduxjs/toolkit";
import { RootState } from '@store/store';

// createSelector to avoid unnecessary revoke to this function with useAppSelector()
const getCartTotalQuantitySelector = createSelector(
   (state: RootState) => state.cart.items,
   // items is the returned value from the callback func above.
   (items) =>
   {
      const totalQuantity = Object.values(items)
         .reduce((accumulator, currentValue) =>
         {
            return accumulator + currentValue;
         }, 0)

      return totalQuantity;
   })

export { getCartTotalQuantitySelector }