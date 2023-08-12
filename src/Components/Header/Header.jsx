import logo from '../../assets/dynaqube1.png'
const Header = () => {
  const navItem = <>
    <li className="lg:text-white font-normal text-lg"><a href="#home">Home</a></li>
    <li className="lg:text-white font-normal text-lg"><a href="#feature">Features</a></li>
    <li className="lg:text-white font-normal text-lg"><a href="#about">About</a></li>
    <li className="lg:text-white font-normal text-lg"><a href="#products">Products</a></li>
    <li className="lg:text-white font-normal text-lg"><a href="#tokenomics">Tokenomics</a></li>
    <li className="text-white font-normal text-lg"><a>Staking</a></li>
  </>
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <div className="flex justify-center items-center ml-5 lg:ml-0">
          <img src={logo} className='w-[50px] h-[50px] ' alt="" />
          <a className="btn btn-ghost normal-case lg:text-3xl text-xl text-[#02AAFF]">BlockTech</a>
         
        </div>

      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>

    </div>
  );
};

export default Header;