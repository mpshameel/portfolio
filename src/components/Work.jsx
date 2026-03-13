export default function Work() {
    const work = [
        {
            name: 'AkbarTravels-Flights & Hotels Mobile App',
            icon: './assets/1.jpeg',
            description: 'Travel & Tourism Web App Development',
            link: 'https://www.akbartravels.com/in/flight?lan=en',
        },
        {
            name: 'AkbarTravels-Flights & Hotels Web App',
            icon: './assets/2.jpeg',
            description: 'Travel & Tourism Mobile App Development',
            link: 'https://play.google.com/store/apps/details?id=com.akbartravel.AkbarTravels&hl=en',
        },
        {
            name: 'Corporate Travel Mobile App',
            icon: './assets/3.jpeg',
            description: 'Mobile App Development',
            link: 'https://play.google.com/store/apps/details?id=com.akbartravels.corptravelapp&hl=en_IN',
        },
        {
            name: 'Umrah Trip Mobile App',
            icon: './assets/4.jpeg',
            description: 'Mobile App Development',
            link: 'https://play.google.com/store/apps/details?id=com.akbartravels.umrahtrip&hl=en',
        },
        {
            name: 'Peza Nyumba E-commerce Mobile App',
            icon: './assets/5.jpeg',
            description: 'E-commerce Mobile App Development',
            link: 'https://play.google.com/store/apps/details?id=com.peza.nyumba&hl=en',
        },
        {
            name: 'Peza Nyumba E-commerce Web App',
            icon: './assets/6.jpeg',
            description: 'E-commerce Web App Development',
            link: 'https://peza.homes/',
        },
        {
            name: 'LisbonDirect Static Web Site',
            icon: './assets/7.jpeg',
            description: 'Static Web Site Development',
            link: 'https://lisbondirectpt.com/',
        },
        {
            name: 'AkbarTravels B2B Web App',
            icon: './assets/8.jpeg',
            description: 'B2B Web App Development',
            link: 'https://agents.akbartravelsonline.com/b2bplus/login',
        },
    ];
    return (
        <div id="work" className="w-full px-[5%] py-10 scroll-mt-20">
            {/* Reduced px-[12%] to px-[5%] to allow more horizontal space on the screen */}

            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

            {/* Removed max-w-2xl and mx-auto to achieve full width */}
            <p className="w-full mt-5 mb-12 font-Ovo text-xl leading-relaxed text-gray-800 dark:text-white/90 text-center">
                Welcome to my professional portfolio! Explore a diverse range of projects showcasing my
                expertise in full-stack web development, high-performance mobile apps, and intuitive UI/UX design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <a
                            href={work.link || "#work"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10"
                        >
                            {/* This empty anchor stays invisible but makes the whole card clickable */}
                        </a>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a> */}

        </div>
    )
}