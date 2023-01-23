import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

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
            <a href='/'><Typography variant="h2">Check Package Status</Typography></a>
        </AppBar>
    )
}

export default Header