import { Fragment, useState } from 'react'

let navItems = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '#about',
  },
  {
    label: 'Tokenomics',
    route: '#token',
  },
  {
    label: 'Telegram',
    route: 'https://t.me/APECOIN2point0',
  },
  {
    label: 'Twitter',
    route: 'https://twitter.com/APECOIN2point0',
  },
]

export default function Navbar() {
  let [open, setOpen] = useState(false)
  const route = '/'
  return (
    <>
      <div className="fixed top-0 left-0 right-0 mx-auto bg-white bg-opacity-[0.0001] backdrop-filter backdrop-blur-2xl z-10 max-w-7xl">
        <div className="font-orbitron flex items-center justify-between  py-3 lg:justify-start lg:space-x-10 animate-top-left px-5">
          <img src="/logo.svg" className="" alt="" />
          <div className=" flex items-center flex-grow space-x-4 lg:w-0">
            <nav
              as="nav"
              className="hidden space-x-10 lg:flex justify-end  items-center flex-grow mr-5"
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
              className="lg:flex hidden  justify-self-end whitespace-nowrap rounded-md cursor-pointer border border-transparent transition-colors hover:border-white   py-2 font-bold  px-3 text-sm hover:text-white bg-[#E8BA4B] hover:bg-black "
            >
              <span>BUY APE 2.0</span>
            </a>
            <div className=" lg:hidden flex justify-end w-full pr-3">
              <button
                onClick={() => setOpen(!open)}
                className=" inline-flex items-center justify-center  rounded-md  p-2"
              >
                <span className="sr-only">Open menu</span>
                <img src={open ? '/close.png' : '/horzBar.svg'} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#3D3D3D] shadow-2xl rounded-lg fixed top-24 right-2 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        } lg:hidden block`}
      >
        <ul className="">
          {navItems.map((navItem) => (
            <a
              href={navItem.route}
              className="py-2 text-white w-52 block hover:bg-yellow-900 hover:bg-opacity-60 font-medium px-5"
            >
              {navItem.label}
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}
