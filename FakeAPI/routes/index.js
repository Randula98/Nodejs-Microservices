import apiRouter from './routers/FakeAPI.js'

function routers(app){
    app.use("/fakeapi" , apiRouter)
}

export default routers;