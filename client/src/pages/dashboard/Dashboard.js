import React, { useState } from 'react'
// components
import Chart from "./Chart";
// constants
import { rows } from "../../constants/data";
// mui
import { Grid, Link, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, Pagination } from "@mui/material";
// vars
const ITEMS_PER_PAGE = 5;

const Dashboard = () => {
    const [pendingOrdersPage, setPendingOrdersPage] = useState(1);
    const [pastOrdersPage, setPastOrdersPage] = useState(1);
    const [transactionsPage, setTransactionsPage] = useState(1);

    const handlePendingOrdersPage = page => {
        setPendingOrdersPage(page);
        window.scrollTo(0, 0);
    }

    const handlePastOrdersPage = page => {
        setPastOrdersPage(page);
        window.scrollTo(0, 0);
    }

    const handleTransactionsPage = page => {
        setTransactionsPage(page);
        window.scrollTo(0, 0);
    }

    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Chart />
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Recent Deposits</Typography>
                    <Typography component="p" variant="h4">
                        $3,024.00
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                        on 15 March, 2019
                    </Typography>
                    <div>
                        <Link color="primary">
                            View balance
                        </Link>
                    </div>
                </Paper>
            </Grid>
            {/* Pending Orders */}
            <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Pending Orders</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl No.</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice((pendingOrdersPage - 1) * ITEMS_PER_PAGE, pendingOrdersPage * ITEMS_PER_PAGE).map((row, index) => (
                                <TableRow sx={{ cursor: "pointer", "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }} key={"DashboardPendingOrders" + index}>
                                    <TableCell>{(ITEMS_PER_PAGE * (pendingOrdersPage - 1)) + index + 1}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
                                    <TableCell align="right">{`$${row.amount}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination sx={{ margin: "auto", mt: 2 }} count={Math.ceil((rows.length || 0) / ITEMS_PER_PAGE)} color="primary" onChange={(e, page) => handlePendingOrdersPage(page)} />
                </Paper>
            </Grid>
            {/* Past Orders */}
            <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Past Orders</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl No.</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice((pastOrdersPage - 1) * ITEMS_PER_PAGE, pastOrdersPage * ITEMS_PER_PAGE).map((row, index) => (
                                <TableRow sx={{ cursor: "pointer", "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }} key={"DashboardPastOrders" + index}>
                                    <TableCell>{(ITEMS_PER_PAGE * (pastOrdersPage - 1)) + index + 1}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
                                    <TableCell align="right">{`$${row.amount}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination sx={{ margin: "auto", mt: 2 }} count={Math.ceil((rows.length || 0) / ITEMS_PER_PAGE)} color="primary" onChange={(e, page) => handlePastOrdersPage(page)} />
                </Paper>
            </Grid>
            {/* Past Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Transactions</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl No.</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice((transactionsPage - 1) * ITEMS_PER_PAGE, transactionsPage * ITEMS_PER_PAGE).map((row, index) => (
                                <TableRow sx={{ cursor: "pointer", "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }} key={"DashboardTransactions" + index}>
                                    <TableCell>{(ITEMS_PER_PAGE * (transactionsPage - 1)) + index + 1}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
                                    <TableCell align="right">{`$${row.amount}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination sx={{ margin: "auto", mt: 2 }} count={Math.ceil((rows.length || 0) / ITEMS_PER_PAGE)} color="primary" onChange={(e, page) => handleTransactionsPage(page)} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Dashboard