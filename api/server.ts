import app from './src/app'

const port = 8087

// Server
app.listen(port, () => {
    console.log(`Package status app listening on port ${port}`)
})