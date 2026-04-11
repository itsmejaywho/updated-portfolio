import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Projects from '../pages/Projects'

function AppRoutes(){
    return(
        <div className="min-w-[320px]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;