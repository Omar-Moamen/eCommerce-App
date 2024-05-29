import { Grid } from "@mui/material";

type GridListProps<T> = {
   records: T[];
   renderItem: (record: T) => React.ReactNode;
}

type HasId = { id?: number }

// Typescript will infer the generic type based on the child component
// without writing <GridList<TCategory> />
export default function GridList<T extends HasId>({ records, renderItem }: GridListProps<T>)
{
   const renderedList = records.length > 0 ? records.map(record => (
      <Grid
         key={record.id}
         item
         xs={6} sm={4} md={3}
         display="flex" justifyContent="center"
      >
         {renderItem(record)}
      </Grid>
   )) : "There are no categories";

   return (
      <>
         {renderedList}
      </>
   )
}
