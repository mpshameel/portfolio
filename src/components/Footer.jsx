export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:shameelahmedmp@gmail.com">shameelahmedmp@gmail.com</a>
                    <span className="mx-2">|</span>

                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:mpshameelfreelancer@gmail.com">mpshameelfreelancer@gmail.com</a>

                    <span className="mx-2">|</span>

                    <img src="./assets/phone_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/phone_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="tel:+918891503603">+91 8891503603</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="https://github.com/mpshameel" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>

                    <li>
                        <a href="https://gitlab.com/mp_shameel" target="_blank" rel="noopener noreferrer">GitLab</a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/shameelahmedmp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>

                    <li>
                        <a href="https://wa.me/918891503603" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </li>

                    <li>
                        <a href="mailto:shameelahmedmp@gmail.com">Email</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}