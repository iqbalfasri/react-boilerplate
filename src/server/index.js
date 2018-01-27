import WebServer from './web.server'

let webServer = new WebServer()

webServer.start()
    .then(() => {
        console.log('Web Server started on Port 3000')
    })
    .catch((err) => {
        console.error('failed to start web server ' + err)
    })

