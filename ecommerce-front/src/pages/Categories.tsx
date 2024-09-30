import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getCategories from '@store/categories/actions/getCategories';

import { Category } from "@components/eCommerce"
import { Container, Grid } from "@mui/material"
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

export default function Categories()
{
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(state => state.categories);

   useEffect(() =>
   {
      // To avoid categories re-render every time we visit categories page
      // Because categories-page doesn't need to update quickly & constantly like products
      if (!records.length)
      {
         dispatch(getCategories())
      }
   }, [dispatch, records]);

   return (
      <Container className="pageMinHeight" maxWidth="xl" sx={{ pt: "20px" }}>
         <Grid container
            rowSpacing="25px"
            columnSpacing={{ xs: 0, sm: "25px" }}
         >
            <Loading status={loading} error={error}>
               <GridList
                  records={records}
                  renderItem={(record) => <Category {...record} />}
               />
            </Loading>
         </Grid>
      </Container>
   )
}


