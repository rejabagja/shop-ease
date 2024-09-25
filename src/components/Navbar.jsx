import { useState } from "react";

const Brand = ({name}) => {
  return (
    <h1 name="brand" className="text-2xl font-bold leading-9 drop-shadow-md hover:drop-shadow-2xl">
      <a href="#">{name}</a>
    </h1>
  )
}

const Links = ({children}) => {
  return (
    <div className="hidden sm:flex gap-x-1">
      {children}
    </div>
  )
}

const Item = ({target = "#", name}) => {
  return (
    <a href={target} className="font-medium px-4 py-2 hover:bg-blue-950 rounded-md">{name}</a>
  )
}

const Navbar = ({children}) => {
  const [isOpen, setIsopen] = useState(false);

  const linkItems = children[1].props.children.filter(link => link);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  }

  return (
    <nav className="h-14 bg-blue-900 text-white py-2 shadow shadow-black">
      <div className="container px-5 sm:px-0 mx-auto flex items-center justify-between sm:justify-start sm:gap-x-5">
        {children}
        {/* burger menu */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="relative w-10 h-10 focus:outline-none flex flex-col justify-center items-end">
            <div className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`block w-8 h-1 bg-white rounded-full my-1 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      {/* menu items when isOpen */}
      {isOpen && <div className="fixed top-14 inset-x-0 bottom-0 bg-stone-50 flex flex-col justify-center items-center gap-y-4 text-lg font-medium sm:hidden border-t border-slate-800">
        {
          linkItems.map((link, i) => (
            <a key={i} href={link.props.target} className="hover:border-blue-600 hover:border-2 rounded-md px-10 py-2 text-blue-800 font-bold">{link.props.name}</a>
          ))
        }
      </div>}
    </nav>
  )
}

Navbar.Brand = Brand;
Navbar.Links = Links;
Navbar.Links.Item = Item;

export default Navbar;