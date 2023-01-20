import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '../components/Header'
import { PackageDetail } from '../app/slices/packageSlice'
import { RootState, AppDispatch } from '../app/store'
import { fetchOnePackage } from '../app/services/packageService'

const Single = () => {
    const dispatch = useDispatch<AppDispatch>()
    const thisPackage = useSelector((state: RootState) => state.packages.onePackage)
    const params = useParams();
    const packageName: string | undefined = params.name!;

    useEffect(() => {
        try {
          dispatch(fetchOnePackage(packageName))
          console.log('loading packages')
        } catch (error) {
          console.log(error)
        }
      }, [])
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
            width: '100%'
        }}>
            <Typography variant='h1'>{thisPackage.name}</Typography>
            <Typography>{thisPackage.description}</Typography>
            <Typography variant='h3'>This package currently depends on:</Typography>
            {thisPackage.depends.map( depend => {
                return(
                    <a href={'/' + depend}><Typography>{depend},</Typography></a>
                )
            })}
            <Typography variant='h3'>Packages depending on this package:</Typography>
            {thisPackage.dependencies.map( dependency => {
                return(
                    <a href={'/' + dependency}>{dependency},</a>
                )
            })}
        </Paper>
        </Box>
 
      </>
    )
  }
  export default Single