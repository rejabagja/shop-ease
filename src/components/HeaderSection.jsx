const HeaderSection = ({children}) => {
  return (
    <h1 
      className="text-2xl font-bold pl-5 mt-5 border-b-2 pb-3 text-blue-950"
    >
      {children}
    </h1>
  )
}

export default HeaderSection;