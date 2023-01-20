import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import List from '@mui/material/List'
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Header from '../components/Header'
import { Package } from '../app/slices/packageSlice'
import { RootState, AppDispatch } from '../app/store'
import { fetchAllPackages } from '../app/services/packageService'

interface SearchState {
    query: string,
    list: Package[]
}

const Home = () => {
    useEffect(() => {    
        dispatch(fetchAllPackages()).then(() => {
            setstate({
                query: '',
                list: packageResults
            })
        })
      }, [])

    const dispatch = useDispatch<AppDispatch>()
    const packageResults = useSelector((state: RootState) => state.packages.allPackages)
    const isLoading = useSelector((state: RootState) => state.packages.isLoading)
    const error = useSelector((state: RootState) => state.packages.error)
    const itemsPerPage = 30;
    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(20);

    const [state, setstate] = useState<SearchState>({
    query: '',
    list: packageResults
    })
    // How to get searchbar empty state to return all packageResults?
    const handleQuery = (e: any) => {
        const results = packageResults.filter(pack => {
            if (e.target.value === '' || !e.target.value ) {
                return packageResults
            }
        return pack.name.includes(e.target.value.toLowerCase())
        })
        console.log('result:', results)
        setstate({
            query: e.target.value,
            list: results
        })
        setNoOfPages(Math.ceil(results.length / itemsPerPage))
    }

    const handleChange = (event: any, value: number) => {
        setPage(value);
        setNoOfPages(Math.ceil(packageResults.length / itemsPerPage))
    };

    return (
        <>
        <Header />
        <Box>
            <Paper elevation={3} sx={{
            padding: '8px 32px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>

                <Box component="span">
                   <form>
                    <label>Search installed packages: </label>
                     <input type="search" value={state.query} onChange={handleQuery}/>
                   </form> 
                </Box>
                
                {isLoading 
                ? <Typography>Loading</Typography> 
                : <Box sx={{
                    width: '50%',
                }}>
                    <List dense>
                {state.list.length === 0
                ?   <ListItem><ListItemText primary="No items match your search"></ListItemText></ListItem>
                :   state.list.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map( onePackage => {
                return (
                    <ListItem component={Link} to={'/' + onePackage.name}>
                        <ListItemText primary={onePackage.name} secondary={onePackage.description} />
                    </ListItem>
                ) 
                })}
                </List>
                </Box>
                }
                <Box component="span">
                    <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="secondary"
                    size="large"
                    showFirstButton
                    showLastButton
                    />
                </Box>
                
            </Paper>
        </Box>
        </>
    )
}

export default Home