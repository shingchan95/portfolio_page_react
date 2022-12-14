import React, { useState }from 'react';
import pdf from '../images/CV2.pdf'
import { Link } from "react-router-dom";



function Navbar(){
    let Links =[
        {name:"ABOUT ME", link:"/aboutme"},
        {name:"PROJECTS", link:"/projects"},
        {name:"CONTACT", link:"/contact"},
    ]

    let [open,setOpen]=useState(false);


    return (
        <div className='shadow-md w-screen sticky top-0 left-0 z-10'>
          <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
            <div className='text-2xl cursor-pointer flex items-center font-mono font-bold text-white py-1'>
              <span className='text-sm hover:text-stone-500'>
              <Link to="/portfolio_page_react">HOME</Link>                
              </span>
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon style={{color:"white"}} name={open ? 'close':'menu'}></ion-icon>
          </div>


          <ul className={`md:w-auto z-50 bg-black md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:pl-0 pl-9 transition-all duration-500 ease-in font-mono font-bold ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='z-50 bg-black md:ml-8 text-sm md:my-0 my-7'>
                  <Link to={link.link} className='hover:bg-neutral-200 hover:text-black p-5 text-white bg-black duration-500'>{link.name} </Link>
                </li>
              ))
            }
              
               <li className={`z-50 bg-black md:ml-8 text-sm md:my-0 my-7 `}>
                  <a href = {pdf} className='bg-blue-900 hover:text-black p-5 text-white bg-black duration-500' target="_blank" rel="noreferrer">DOWNLOAD MY CV </a>
                </li>
          </ul>
          </div>
        </div>
      )
    }


export default Navbar