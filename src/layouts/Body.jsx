import { Link } from 'react-router-dom'
import PixelCard from '../components/PixelCard'
import Me from '../assets/me.png'
import Resume from '../assets/resume.pdf'

const quickLinks = [
    {
        label: 'My Projects',
        detail: 'See all of the project I have done.',
        path: '/projects',
    },
    {
        label: 'About Me',
        detail: 'Learn about my skill and background.',
        path: '/skills',
    },
    {
        label: 'Contact Me',
        detail: 'Send a message directly.',
        path: '/contact',
    },
]

const highlights = [
    'Builds responsive React interfaces',
    'Focused on clean UI and usability',
    'Learns full-stack tools through projects',
]

function Body() {
    return (
        <div className="relative h-screen overflow-hidden px-5 py-8 sm:px-8 lg:px-14">
            <div className="absolute left-[48%] top-0 hidden h-24 w-px rotate-[-38deg] bg-white/25 lg:block" />
            <div className="absolute right-9 top-24 hidden h-16 w-px rotate-[28deg] bg-white/25 lg:block" />

            <div className="relative mx-auto flex h-full max-w-7xl flex-col">
                <div className="flex items-start justify-between gap-6">
                    <Link
                        to="/"
                        className="border-b border-white/70 pb-1 text-sm font-medium text-white/90"
                    >
                        it&apos;s me
                    </Link>

                    <div className="hidden grid-cols-3 gap-5 text-left md:grid">
                        {quickLinks.map(({ label, detail, path }) => (
                            <Link
                                key={label}
                                to={path}
                                className="group min-w-[8.5rem] border-t border-white/35 pt-3 text-white transition-colors hover:text-[#d4a373]"
                            >
                                <span className="flex items-center justify-between gap-3 text-xs font-bold">
                                    {label}
                                    <svg
                                        className="h-3 w-3 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7 17 17 7M9 7h8v8" />
                                    </svg>
                                </span>
                                <span className="mt-1 block max-w-[9.5rem] text-[0.62rem] leading-snug text-white/55">
                                    {detail}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid min-h-0 flex-1 items-center gap-10 pt-10 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:pt-20">
                    <div className="relative z-10 pb-10 lg:pb-0">
                        <div className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#d4a373]">
                            Hello
                        </div>

                        <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                            <h1 className="text-[clamp(2.6rem,6vw,5.9rem)] font-light leading-[0.95] tracking-normal text-white">
                                Hello! <span className="font-black">I&apos;m Richmon</span>
                            </h1>
                            <span className="mb-2 inline-flex items-center gap-3 text-lg text-white/80 sm:text-2xl">
                                <span className="h-px w-16 bg-white/55" />
                                Web Developer
                                <span className="h-2 w-2 rotate-45 bg-[#d4a373]" />
                            </span>
                        </div>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/68">
                            Hello! I&apos;m Richmon Jay Francisco, an aspiring full-stack developer
                            who enjoys building clean, responsive, and human-friendly web experiences.
                        </p>

                        <ul className="mt-8 space-y-3 text-sm text-white/82">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[0.62rem] font-bold text-black">
                                        <svg
                                            className="h-2.5 w-2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="m5 12 4 4L19 6" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
                            >
                                Let&apos;s Talk
                            </Link>
                            <a
                                href={Resume}
                                download
                                className="inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-semibold text-white/88 transition-colors hover:text-[#d4a373]"
                            >
                                Download CV
                                <svg
                                    className="h-3.5 w-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="relative flex min-h-0 -translate-y-8 items-start justify-center overflow-hidden lg:h-[calc(100vh-7.25rem)] lg:-translate-y-12">
                        <PixelCard
                            variant="blue"
                            gap={8}
                            speed={35}
                            colors="#f8fafc,#7dd3fc,#d4a373"
                            className="h-full w-full"
                            noFocus
                        >
                            <div className="pixel-card-content flex h-full w-full items-start justify-center">
                                <div className="absolute bottom-24 left-4 z-10 hidden h-32 w-32 rounded-full bg-black text-white shadow-2xl ring-1 ring-white/15 md:grid place-items-center">
                                    <span className="text-3xl font-light">Hello</span>
                                </div>
                                <div className="absolute right-1 top-16 hidden text-7xl font-black text-white/10 lg:block">
                                    RJ
                                </div>
                                <div className="absolute top-16 h-[88%] w-full rounded-t-full bg-white/8 blur-sm" />
                                <img
                                    src={Me}
                                    alt="Richmon Jay Francisco"
                                    className="relative z-10 h-[84vh] max-h-[58rem] min-h-[38rem] w-[145%] max-w-none object-cover object-top drop-shadow-[0_28px_45px_rgba(0,0,0,0.45)] sm:w-[132%] lg:h-[calc(100vh-4rem)] lg:w-[140%]"
                                />
                            </div>
                        </PixelCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
