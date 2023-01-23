import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Header = () => {
    return(
        <AppBar
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative'
          }}>
            <Link href='/' variant="h1">Check Package Status</Link>
        </AppBar>
    )
}

export default Header