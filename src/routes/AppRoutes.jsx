import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import SkillsPage from '../pages/SkillsPage'
import EducationPage from '../pages/EducationPage'
import ContactPage from '../pages/ContactPage'

function AppRoutes(){
    return(
        <div className="min-w-[320px]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;
