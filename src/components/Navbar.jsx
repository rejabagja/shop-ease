import { useState } from "react";
import { Link } from "react-router-dom";

const LinkItem = (props) => {
  const {to="#", children, classname, handleClick = () => {}} = props;
  return (
    <Link
      to={to} 
      className={`text-blue-800 sm:text-white font-medium px-4 py-2 rounded-md ${classname}`}
      onClick={handleClick}
      >
      {children}
    </Link>
  )
}

const Navbar = () => {
  const [isLogin, username, cart] = [true, 'Reza', []]; // diambil dari redux
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  }

  const classNavlink = ["sm:hover:bg-blue-950", "hover:border", "hover:border-blue-500", "sm:hover:border-0"].join(" ");

  const handleLogout = () => {
    console.log('logout');
  }

  return (
    <nav className="h-14 bg-blue-900 py-2 shadow shadow-black">
      <div className="container px-5 sm:px-0 mx-auto flex items-center justify-between sm:justify-start sm:gap-x-5">
        <h1 name="brand" className="text-2xl font-bold leading-9 drop-shadow-md hover:drop-shadow-2xl text-white">
          <Link to="/">ShopeEase</Link>
        </h1>
        <div className={`fixed z-30 top-14 inset-x-0 bottom-0 flex-col gap-y-1 bg-stone-50 sm:static sm:flex sm:flex-row sm:bg-transparent sm:text-white sm:gap-x-1 sm:gap-y-0 justify-center items-center ${isOpen ? "flex" : "hidden"}`}>
          <LinkItem na to="/" classname={classNavlink} handleClick={() => toggleMenu()}>Home</LinkItem>
          { isLogin ? (
            <>
              <LinkItem to="/cart" classname={classNavlink} handleClick={() => toggleMenu()}>Cart: <span className="bg-red-500 px-2 tex-center w-2 h-2 rounded text-slate-100">{cart.length}</span></LinkItem>
              <LinkItem setNavOverlay={setIsopen} classname="cursor-default">{username}</LinkItem>
              <LinkItem classname={classNavlink} handleClick={() => handleLogout()}>Logout</LinkItem>
            </>) : (
            <>
              <LinkItem to="/login" classname={classNavlink}>
                Login
              </LinkItem>
            </>
            )
          }
        </div>
        {/* burger and close icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="relative w-10 h-10 focus:outline-none flex flex-col justify-center items-end">
            <div className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`block w-8 h-1 bg-white rounded-full my-1 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;