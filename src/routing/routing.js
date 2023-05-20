
import App from "../app/app"
import Healthyfi from "../healthyfi app/healthyfi"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Startex from "../startex/startex"
export default function Routing()
{
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>}></Route>
                    <Route exact path='/healthyfi' element={<Healthyfi/>}> </Route>
                    <Route exact path='/startex' element={<Startex/>}> </Route>
                </Routes>
            </Router>
        </div>
    )
}