import React from 'react'

function Navbar() {
    
    return (
        <div>
{/*             <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"/>
 */}            <div class="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
                <a href="/" class="ml-8 text-lg text-gray-700 hidden md:flex">Free-to-Play Games</a>
                <span class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                    <input type="search" name="serch" placeholder="Search"
                    class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
                    <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
                </span>
                <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
                    <i class="fas fa-bars"></i>
                </div>   
                <div class="flex flex-row-reverse mr-8 hidden md:flex">
                    {/* <div class="text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">Categories</div> */}
  <div class=" relative inline-block text-left dropdown">
    <span class="rounded-md shadow-sm"
      ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>Categories</span>
        <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button></span>
    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
       
        <div class="py-1">
          <a href="/mmorpg" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Mmorpg</a>
          <a href="/shooter" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Shooter</a>
          <a href="/strategy" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Strategy</a></div>    
  </div>
</div>              
</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
