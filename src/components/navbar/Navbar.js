import React from 'react'
import {NavLink, Link} from "react-router-dom"

function Navbar() {
    return (
        <div>
{/*             <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"/>
 */}            <div class="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
                <div class="ml-8 text-lg text-gray-700 hidden md:flex">Free-to-Play Games</div>
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
<div class="relative inline-flex">
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option>Choose category</option>
    {/*<NavLink to="/mmorpg">Test</NavLink>*/}
    <option>mmorpg</option>
    <option>shooter</option>
    <option>strategy</option>
  </select>
</div>
               
                </div>
            </div>
        </div>
    )
}

export default Navbar
