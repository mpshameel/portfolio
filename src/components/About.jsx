export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'vscode', icon: './assets/Android_Studio_icon_(2023).svg.png', },
        { name: 'vscode', icon: './assets/flutter.png', },
        { name: 'vscode', icon: './assets/png-transparent-slack-new-hd-logo-thumbnail.png', },
        { name: 'vscode', icon: './assets/png-clipart-django-python-computer-icons-logo-python-text-label.png', },
        { name: 'firebase', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Flutter, Python-Django, HTML, CSS, JavaScript React Js, Next Js, Angular Js',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Bachelors in Computer Science',
        },
        {
            name: 'Experience',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Flutter Developer from Benzy Infotech pvt ltd',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built from scratch more than 6 projects, Collaboratd in more than 12 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="w-full my-20">
                <div className="w-full">

                    <p className="mb-10 w-full font-Ovo text-lg leading-relaxed">
                        Shameel Mp is a veteran Full-Stack Developer with over 7 years of tech expertise and 5+ years of professional industry experience.
                        I specializes in architecting robust, scalable backends using <strong>Python and Django</strong> to power complex data systems.
                        On the frontend, I masters <strong>Next.js, Angular</strong>, and pure <strong>HTML/CSS/JS</strong> to build high-performance, responsive user interfaces.
                        Shameel is also an expert in <strong>Flutter</strong>, delivering native-quality mobile applications for both Android and iOS.
                        By leveraging modern tools like <strong>Tailwind CSS</strong>, I ensures every digital product is visually polished and technically optimized.
                        His dual mastery of backend efficiency and frontend aesthetics allows him to provide secure, end-to-end freelance solutions.
                        Dedicated to performance and growth, Shameel transforms complex technical requirements into seamless, user-centric digital experiences.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                        {data.map((item) => (
                            <li key={item.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex flex-wrap items-center gap-3 sm:gap-5 w-full">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}