import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import List from '@mui/material/List'
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton'

import Header from '../components/Header'
import { Package } from '../app/slices/packageSlice'

const testData: Package[] = [
    {
        name: 'test-package-1',
        description: 'a test package with some text',
        depends: ['some-other','one-more']
    },
    {
        name: 'test-package-2',
        description: 'a test package with some text',
        depends: ['some-other','one-more']
    },
    {
        name: 'test-package-3',
        description: 'a test package with some text',
        depends: ['some-other','one-more']
    }
]

const Home = () => {
    return (
        <>
        <Header />
        <h1>Homepage</h1>
        <List>
            {testData.map( onePackage => {
               return (
                <ListItem component={Link} to={'/' + onePackage.name}>
                    <ListItemText primary={onePackage.name} secondary={onePackage.description} />
                </ListItem>
               ) 
            })}
        </List>
        </>
    )
}

export default Home