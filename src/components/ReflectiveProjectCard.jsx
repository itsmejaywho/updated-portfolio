import { Activity, ExternalLink, Lock } from 'lucide-react'
import './ReflectiveProjectCard.css'

function ReflectiveProjectCard({
    title,
    role,
    description,
    tags,
    link,
    accent = '#d4a373',
    index,
}) {
    return (
        <article className="reflective-project-card" style={{ '--project-accent': accent }}>
            <svg className="reflective-project-filters" aria-hidden="true">
                <defs>
                    <filter id={`project-metallic-${index}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="2" result="noise" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="18"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="rippled"
                        />
                        <feSpecularLighting
                            in="noiseAlpha"
                            surfaceScale="20"
                            specularConstant="1.45"
                            specularExponent="20"
                            lightingColor="#ffffff"
                            result="light"
                        >
                            <fePointLight x="0" y="0" z="300" />
                        </feSpecularLighting>
                        <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
                        <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
                    </filter>
                </defs>
            </svg>

            <div className="reflective-project-preview">
                <iframe
                    src={link}
                    title={`${title} preview`}
                    loading="lazy"
                    className="reflective-project-frame"
                />
            </div>

            <div className="reflective-project-noise" />
            <div className="reflective-project-sheen" />
            <div className="reflective-project-border" />

            <div className="reflective-project-content">
                <header className="reflective-project-header">
                    <div className="reflective-project-badge">
                        <Lock size={14} />
                        <span>LIVE PROJECT</span>
                    </div>
                    <Activity size={20} className="reflective-project-status" />
                </header>

                <div className="reflective-project-body">
                    <div>
                        <p className="reflective-project-role">{role}</p>
                        <h2 className="reflective-project-title">{title}</h2>
                        <p className="reflective-project-description">{description}</p>
                    </div>
                </div>

                <footer className="reflective-project-footer">
                    <div className="reflective-project-tags">
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reflective-project-link"
                        aria-label={`Open ${title}`}
                    >
                        <ExternalLink size={18} />
                    </a>
                </footer>
            </div>
        </article>
    )
}

export default ReflectiveProjectCard
