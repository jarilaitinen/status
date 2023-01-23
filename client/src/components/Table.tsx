import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListItem, ListItemText, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import List from '@mui/material/List'
import { Link } from "react-router-dom"


import { fetchAllPackages } from '../app/services/packageService'
import { RootState, AppDispatch } from '../app/store'

const Table = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {
        packages: {allPackages, searchResults, isSearching}
    } = useSelector((state: RootState) => state)
    const itemsPerPage = 30;
    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(Math.ceil(allPackages.length / itemsPerPage));

    useEffect(() => {
        allPackages.length === 0 && dispatch(fetchAllPackages());
      }, [dispatch, allPackages.length])

    useEffect(() => {
        setPagecount();
        console.log('setting pagecount')
    })

    const handlePageturn = (event: any, value: number) => {
        setPage(value);
    };

    const setPagecount = () => {
        if ( isSearching ) {
                setNoOfPages(Math.ceil(searchResults.length / itemsPerPage))
            } else {
                setNoOfPages(Math.ceil(allPackages.length / itemsPerPage))
            }    
    }

    return(
        <Box>
        <List dense>
            {isSearching === true 
            ? searchResults.slice((page - 1) * itemsPerPage, page * itemsPerPage).map( onePackage => {
                return (
                    <ListItem component={Link} to={'/' + onePackage.name}>
                        <ListItemText primary={onePackage.name} secondary={onePackage.description} />
                    </ListItem>
                ) 
                })
            : allPackages.slice((page - 1) * itemsPerPage, page * itemsPerPage).map( onePackage => {
                return (
                    <ListItem component={Link} to={'/' + onePackage.name}>
                        <ListItemText primary={onePackage.name} secondary={onePackage.description} />
                    </ListItem>
                ) 
                })
            }
        </List>
            <Box component="span">
                <Pagination
                count={noOfPages}
                page={page}
                onChange={handlePageturn}
                defaultPage={1}
                color="secondary"
                size="large"
                showFirstButton
                showLastButton
                />
            </Box>
        </Box>

    )
}

export default Table
