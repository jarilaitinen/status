import AppBar from '@mui/material/AppBar'

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
            <a href='/'><h2>Check Package Status</h2></a>
        </AppBar>
    )
}

export default Header