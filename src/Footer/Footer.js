import React from 'react'
import logo from '../Images/logo.png';
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { Divider } from 'antd';
function Footer() {
  return (
   <footer className='p-5'>
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-evenly items-center flex-wrap pb-4">
        <img src={logo} alt="footer" />
        <h1 className='text-3xl font-bold'>SHOP</h1>
      </div>
      <ul className='flex justify-evenly items-center flex-wrap pb-4'>
        <li className='px-1'>Company</li>
        <li className='px-1'>Product</li>
        <li className='px-1'>Offices</li>
        <li className='px-1'>About</li>
        <li className='px-1'>Contact</li>
      </ul>
      <div className="flex justify-evenly items-center">
        <FaInstagram className='text-3xl cursor-pointer'/>
        <LuFacebook className='text-3xl cursor-pointer'/>
        <FaTwitter className='text-3xl cursor-pointer'/>
      </div>
      <Divider/>
      <p>©️Copyright - <strong>SHOP</strong> - All Right Reseved</p>
    </div>
   </footer>
  )
}

export default Footer
