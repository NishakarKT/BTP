import React, { useState } from 'react'
// mui
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, Pagination } from '@mui/material'
// constants
import { rows } from "../../constants/data";
// vars
const ITEMS_PER_PAGE = 10;

const Products = () => {
  const [page, setPage] = useState(1);

  const handlePage = page => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Grid container spacing={3}>
      {/* My Products */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>My Products</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Sl No.</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship To</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((row, index) => (
                <TableRow sx={{ cursor: "pointer", "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }} key={"DashboardProductsProduct" + index}>
                  <TableCell>{(ITEMS_PER_PAGE * (page - 1)) + index + 1}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell>{`$${row.amount}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination sx={{ margin: "auto", mt: 2 }} count={Math.ceil((rows.length || 0) / ITEMS_PER_PAGE)} color="primary" onChange={(e, page) => handlePage(page)} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Products