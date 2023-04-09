import TestapiRouter from './routers/TestAPI.js'
import FakeapiRouter from './routers/FakeAPI.js'

function routers(app){
    app.use("/testapi" , TestapiRouter)
    app.use("/fakeapi" , FakeapiRouter)
}

export default routers;