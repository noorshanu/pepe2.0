import { Fragment } from 'react'

let navItems = [
  {
    label: 'Home',
    route: '/',
    icon: '/assets/icons/business.png',
  },
  {
    label: 'About',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'Tokenomics',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'Telegram',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  {
    label: 'Twitter',
    route: 'Market',
    icon: '/assets/icons/finance.png',
  },
  // { label: "Features", route: "Create", icon: "/assets/icons/interface.png" },
  // { label: "Roadmap", route: "Wallet", icon: "/assets/icons/cube.png" },
]

export default function Navbar() {
  const route = '/'
  return (
    // bg-[#14141f]
    <div className="fixed top-0 left-0 right-0 mx-auto bg-white bg-opacity-[0.0001] backdrop-filter backdrop-blur-2xl z-10 max-w-7xl">
      <div className="font-orbitron flex items-center justify-between  py-3 md:justify-start md:space-x-10 animate-top-left">
        <img src="/logo.svg" className="" alt="" />
        <div className=" flex items-center flex-grow space-x-4 lg:w-0">
          <nav
            as="nav"
            className="hidden space-x-10 md:flex justify-end  items-center flex-grow mr-5"
          >
            {navItems.map((nav, i) => {
              return (
                <a
                  key={i}
                  href={nav.route}
                  className={`text-medium font-normal hover:text-[#54FF7F]
                     
                     ${
                       route == nav.route
                         ? ' text-[#54FF7F] '
                         : 'text-[#9292C5]'
                     }
                  `}
                >
                  <div className=" flex justify-center items-center">
                    <img src={nav.icon} className="mr-2" alt="" />
                    <span>{nav.label}</span>
                  </div>
                </a>
              )
            })}
          </nav>
          <a
            href="/"
            className="md:flex hidden  justify-self-end whitespace-nowrap rounded-md cursor-pointer border border-transparent transition-colors hover:border-white   py-2 font-bold  px-3 text-sm hover:text-white bg-[#E8BA4B] hover:bg-black "
          >
            <span>BUY APE 2.0</span>
          </a>
          <div className=" md:hidden flex justify-end w-full pr-3">
            <button className=" inline-flex items-center justify-center  rounded-md  p-2">
              <span className="sr-only">Open menu</span>
              =
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}