import React from 'react'
import Logo from './assets/images/logo.svg'
const App = () => {
  return (
    <div>
      <nav className='flex justify-between m-16 '>
        <div>
          <img src={Logo} />
          </div>
        <div>
        <ul class="hidden md:flex" >

<li class="pr-12 text-gray-500 text-2xl hover:text-orange-400 cursor-pointer">Home</li>
<li class="pr-12 hover:text-orange-400 text-gray-500 text-2xl cursor-pointer">New</li>
<li class="pr-12 hover:text-orange-400 text-gray-500 text-2xl  cursor-pointer">Popular</li>
<li class="pr-12 hover:text-orange-400 text-gray-500 text-2xl  cursor-pointer">Trending</li>
<li class="pr-12 hover:text-orange-400  text-gray-500 text-2xl cursor-pointer">Category</li>
</ul>
        </div>
      </nav>
     </div>
  )
}

export default App
