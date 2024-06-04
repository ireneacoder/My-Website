
import App from "../app/app"
import Healthyfi from "../healthyfi app/healthyfi"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Startex from "../startex/startex"
import Cued from "../cued/cued"
import DhartE from "../dhart-e/dhartE"
import Sciatica from "../sciatica/sciatica"
import BankFlow from "../bankflow/bankflow"
import CronAI from "../cronai/cronai"
export default function Routing()
{
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>}></Route>
                    <Route exact path='/healthyfi' element={<Healthyfi/>}> </Route>
                    <Route exact path='/startex' element={<Startex/>}> </Route>
                    <Route exact path='/cued' element={<Cued/>}></Route>
                    <Route exact path = '/dhartE' element={<DhartE/>}></Route>
                    <Route exact path = '/sciatica' element={<Sciatica/>}></Route>
                    <Route exact path = '/bankflow' element={<BankFlow/>}></Route>
                    <Route exact path = '/cronai' element={<CronAI/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}