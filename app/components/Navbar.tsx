import React, { useEffect, useState } from 'react';

const Navbar: React.FC =() => {
const [isOpen, setIsOpen ] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
}
useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
           <nav className={`bg-white shadow h-[100px] pb-4 transition-all duration-0.5s ease-in-out ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : 'relative w-full'} xl:py-3`}>
            <div className="max-w-7xl mx-auto px-4  lg:px-8">
                <div className=" py-1">
                    <div className="">
                        <img 
                            src="/Logo.jpg" 
                            alt="Logo" 
                            className="mt-1 w-[80px]" 
                        />
                       
                        <img 
                            src="/Vector.svg" 
                            alt="Menu Icon" 
                            className="menu -mt-10 cursor-pointer xl:hidden  " 
                            onClick={toggleMenu} 
                        />
                        
                    </div>
                </div>
            </div>

            {/* Sliding Navigation Links */}
            <div className={`fixed z-10 top-0 left-0 transform bg-white/30 backdrop-blur-[50px]  shadow-lg w-full h-[400px] transition-transform duration-300 ease-in-out  ${isOpen ? 'translate-x-0' : '-translate-x-full  ' } xl:hidden   `}>
                <div className="flex flex-col p-4 space-y-2">
                <button 
              className="text-black  text-right  mb-4" 
              onClick={toggleMenu} // Cancel button to close the menu
            ><img src="/cancel.png" alt="" className='w-[35px] float-right' /></button>
            <div className='grid gap-6 xl:visibility'>
                    <a href="#home" className='bg-white p-3 rounded-[10px] '>
                    <a href="#home" className="text-black-700 text-[20px] font-medium hover:text-blue-600 xl:text-lg font-medium">Home</a>
                    </a>
                    <a href="#products" className='bg-white p-3 rounded-[10px]'>
                    <a href="#products" className="text-black text-[20px] font-medium hover:text-blue-600 ">Products</a>
                    </a>
                    <a href="#About" className='bg-white p-3 rounded-[10px]'>
                    <a href="#About" className="text-black text-[20px] font-medium hover:text-blue-600 rounded-[10px]">AboutUs</a>
                    </a>
                    <a href="#contacts" className='bg-white p-3 rounded-[10px]'>
                    <a href="#contacts" className="text-black text-[20px] font-medium hover:text-blue-600">ContactUs</a>
                    </a>
                </div>
                </div>
            </div>
            <div>
              <div className='xs:hidden sm:hidden md:hidden lg:hidden xl:block xl:flex -mt-14 float-right gap-8 px-8 text-black text-[20px] font-bold '>
            <div className='  '>
                    <a href="#home" className="text-black-700 hover:text-blue-600 xl:px-5 py-3 border-b-2 border-[#0149e9] justify-center items-center gap-2.5 inline-flex -mt-4">Home</a>
                    </div>
                    <div className=''>
                    <a href="#products" className="text-black-700 hover:text-blue-600 ">Products</a>
                    </div>
                    <div className=''>
                    <a href="#About" className="text-black-700 hover:text-blue-600 rounded-[10px]">AboutUs</a>
                    </div>
                    <div className=''>
                    <a href="#contacts" className="text-black-700 hover:text-blue-600">ContactUs</a>
                    </div>
            </div>
            </div>
        </nav>

     
    </div>
  )
}

export default Navbar
