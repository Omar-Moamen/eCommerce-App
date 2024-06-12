import { createSelector } from "@reduxjs/toolkit";
import { RootState } from '@store/store';

// createSelector to avoid unnecessary revoke to the function
const getCartTotalQuantitySelector = createSelector(
   (state: RootState) => state.cart.items,
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