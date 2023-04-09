import apiRouter from './routers/TestAPI.js'

function routers(app){
    app.use("/testapi" , apiRouter)
}

export default routers;