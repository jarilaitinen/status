import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import { Search } from '@mui/icons-material'

import { RootState, AppDispatch } from '../app/store'
import { searchPackages, setIsSearching } from '../app/slices/packageSlice'

const Searchbar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [keyword, setKeyword] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value)

    useEffect(() => {
        keyword !== ''
          ? dispatch(setIsSearching(true))
          : dispatch(setIsSearching(false))

        const search = setTimeout(() => {
            keyword !== '' && dispatch(searchPackages(keyword))
        }, 500)
        
        return () => clearTimeout(search)
        }, [keyword, dispatch])

    return(
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative'
          }}>
            <InputBase
            type="text"
            placeholder="Search packages"
            onChange={handleInputChange}
            />
            <Search className="search-icon" fontSize="medium" />
        </Box>
    )
}

export default Searchbar