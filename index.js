const server = require ('./api/server')

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`It ain't broke yet! PORT:${PORT}`)
})
