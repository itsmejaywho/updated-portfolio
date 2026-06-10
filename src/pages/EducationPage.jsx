import { Link } from 'react-router-dom'
import Education from '../layouts/Education'
import Footer from '../layouts/Footer'

function EducationPage() {
    return (
        <div className="min-h-screen pt-8" style={{ color: 'var(--text-primary)' }}>
            <div className="mx-auto max-w-6xl px-5">
                <Link to="/" className="text-sm text-white/70 transition-colors hover:text-[#d4a373]">
                    &larr; Back to Home
                </Link>
            </div>
            <Education />
            <Footer />
        </div>
    )
}

export default EducationPage
