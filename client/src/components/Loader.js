import React from 'react'
import { Stack } from "@mui/material"
import { CircularProgress } from '@mui/material'

const Loader = ({ sx }) => {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{ width: "100vw", height: "100vh", zIndex: 9999 }}>
            <CircularProgress sx={sx} />
        </Stack>
    )
}

export default Loader