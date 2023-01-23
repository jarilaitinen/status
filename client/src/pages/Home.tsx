import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import Table from '../components/Table'
import { RootState } from '../app/store'

const Home = () => {

    const isLoading = useSelector((state: RootState) => state.packages.isLoading)
    const error = useSelector((state: RootState) => state.packages.error)


    return (
        <>
        <Header />
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',   
        padding: '0px 16px'
        }} >
            <Paper elevation={3} sx={{
            padding: '8px 32px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
                <Searchbar />
                {error ? <Typography>An error occurred fetching package data.</Typography> : <></>}                
                {isLoading 
                ? <Typography>Loading</Typography> 
                : <Box sx={{
                    width: '50%',
                }}>
                    <Table />
                </Box>
                }
                
            </Paper>
        </Box>
        </>
    )
}

export default Home