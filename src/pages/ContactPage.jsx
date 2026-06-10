import { Link } from 'react-router-dom'
import Contact from '../layouts/Contact'

function ContactPage() {
    return (
        <div className="min-h-screen pt-8" style={{ color: 'var(--text-primary)' }}>
            <div className="mx-auto max-w-6xl px-5">
                <Link to="/" className="text-sm text-white/70 transition-colors hover:text-[#d4a373]">
                    &larr; Back to Home
                </Link>
            </div>
            <Contact />
        </div>
    )
}

export default ContactPage
