import React, { useContext, useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { VscListSelection } from "react-icons/vsc";
import { RiCloseCircleLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo.png';
import { Tooltip } from 'antd';
import { AppContext } from '../Product/proContext';
function Navbar() {
    const [navTogg,upNavTogg] = useState(false);
    const {cartNumber} = useContext(AppContext);
    const navRout = [
        {
            lnk: '/',
            name: 'Home',
        },
        {
            lnk: '/collection',
            name: 'Collection',
        },
        {
            lnk: '/about',
            name: 'About',
        },
        {
            lnk: '/contact',
            name: 'Contact',
        },
    ];
    return (
        <nav className='flex justify-evenly items-center p-4'>
            <div className="flex items-center">
                <img className='w-10' src={Logo} alt="logo" />
                <h1 className='font-bold text-2xl'>SHOP</h1>
            </div>
            <ul className={navTogg ? 'flex justify-center items-center max-[840px]:flex-col max-[840px]:fixed max-[840px]:top-0 max-[840px]:right-0 max-[840px]:-z-10 max-[840px]:w-72 max-[840px]:justify-start max-[840px]:h-screen max-[840px]:shadow-lg max-[840px]:py-40 max-[840px]:font-bold max-[840px]:transition-all max-[840px]:duration-700': 'flex justify-center items-center max-[840px]:flex-col max-[840px]:fixed max-[840px]:top-0 max-[840px]:-right-80 max-[840px]:w-72  max-[840px]:justify-start max-[840px]:h-screen max-[840px]:shadow-lg max-[840px]:transition-all max-[840px]:duration-700 max-[840px]:py-6'}>
                {
                    navRout.map((element, index) => {
                        return (
                            <li onClick={() => upNavTogg(false)} className='px-2 max-[840px]:mb-6  max-[840px]:py-3  text-[#fd86b8] max-[840px]:text-2xl' key={index}><NavLink to={element.lnk}>{element.name}</NavLink></li>
                        );
                    })
                }
            </ul>
           <NavLink to='/cart'>
           <div className="relative">
                <Tooltip title="Cart" color='#fd86b8' key='#fd86b8'>
                    <CiShoppingCart className='text-3xl -z-10' />
                </Tooltip>
                <p className='absolute -top-3 text-white left-6  font-bold bg-teal-400 px-1 rounded-full'>{cartNumber()}</p>
            </div>
           </NavLink>
            <div>
            {navTogg ? <RiCloseCircleLine className='text-4xl text-teal-400 z-30 lg:hidden max-[1024px]:hidden max-[840px]:block' onClick={() => upNavTogg(false)}/> : <VscListSelection className='text-4xl text-teal-400 z-30 lg:hidden max-[1024px]:hidden max-[840px]:block' onClick={() => upNavTogg(true)} />}
            </div>
        </nav>
    )
}

export default Navbar;