export default function Services() {
    const services = [
        {
            name: 'Web development',
            icon: './assets/web-icon.png',
            description: 'My expertise spans the complete development lifecycle, from designing intuitive UI/UX with Tailwind CSS to building scalable backends using Python and Django. I master modern frontend frameworks like Next.js and Angular, alongside pure HTML/CSS/JS, and deliver high-performance cross-platform mobile applications via Flutter. My professional background is defined by a commitment to clean code, seamless API integrations, and secure, high-growth deployments that transform complex technical requirements into refined user experiences.',
            link: '#',
        },
        {
            name: 'Mobile app',
            icon: './assets/mobile-icon.png',
            description: 'I specialize in delivering high-performance, native-quality experiences for both iOS and Android using a single codebase. Leveraging the power of Flutter, I build fluid, aesthetically pleasing interfaces that do not compromise on speed or security. My app development process covers the entire lifecycle—from conceptualizing user-centric UI/UX and integrating complex Python/Django backends via REST APIs to rigorous testing and final deployment on the App Store and Google Play. Whether developing feature-rich applications from scratch or optimizing existing mobile projects for better performance, I focus on creating scalable, robust apps that provide a seamless experience across all mobile devices.',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: './assets/ui-icon.png',
            description: 'My UI/UX process is driven by a deep understanding of user behavior, ensuring that every design is not only visually striking but also accessible and easy to navigate. I excel at transforming complex project requirements into pixel-perfect wireframes and interactive prototypes, which I then bring to life using modern styling tools like Tailwind CSS. By focusing on responsive layouts, seamless transitions, and consistent branding, I ensure that the digital journey is fluid across all devices, from desktop browsers to mobile screens. My goal is always to bridge the gap between user needs and business objectives through clean, purposeful design.',
            link: '#',
        },
        {
            name: 'Backend development',
            icon: './assets/graphics-icon.png',
            description: 'I specialize in architecting the robust, invisible engines that power high-performance applications. My backend philosophy centers on building secure, scalable, and highly efficient server-side logic that can handle complex data structures and high user traffic without compromise. I excel at designing RESTful APIs for seamless frontend and mobile integration, managing relational databases, and implementing advanced authentication and security protocols. By prioritizing clean code and optimized query performance, I ensure that the foundation of every project is not only stable but also perfectly prepared for future growth and technical evolution.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[5%] py-10 scroll-mt-20">
            {/* Reduced padding from 12% to 5% to give it even more width on large screens */}

            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>

            {/* Removed max-w-2xl and mx-auto to allow full width */}
            <p className="w-full mt-8 mb-12 font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/90">
                I am a veteran Full-Stack Developer with over 7 years of tech expertise and 5+ years of professional industry experience, providing end-to-end solutions from initial concept to final deployment.
                I specialize in building high-performance web and mobile applications from scratch, bridging robust <strong>Python/Django</strong> backends with sleek <strong>Next.js, Angular</strong>, or pure <strong>HTML/CSS/JS</strong> frontends, and delivering native-quality iOS and Android apps via <strong>Flutter</strong>.
                My services extend far beyond initial development; I excel at integrating into existing teams to modernize legacy code, resolving complex bugs, and optimizing UI/UX for better engagement.
                From seamless API integrations and rigorous testing to secure cloud deployment and project management, I ensure every project is scalable, secure, and technically superior.
            </p>
            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}