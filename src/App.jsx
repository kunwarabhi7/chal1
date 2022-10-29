import React from 'react'
import Logo from './assets/images/logo.svg'
import Icon from './assets/images/icon-menu.svg'
import IconClose from './assets/images/icon-menu-close.svg'
import Web3 from './assets/images/image-web-3-mobile.jpg' 
import Retro from './assets/images/image-retro-pcs.jpg'
import Laptop from './assets/images/image-top-laptops.jpg'
import Gaming from './assets/images/image-gaming-growth.jpg'


const App = () => {
  return (
    <div>
      <nav className='flex justify-between m-16 '>
        <div>
          <img src={Logo} className='max-w-xl' />
          </div>
        <div>
        <ul className="hidden md:flex" >

<li className="pr-12 text-gray-500 text-2xl hover:text-orange-400 cursor-pointer">Home</li>
<li className="pr-12 hover:text-orange-400 text-gray-500 text-2xl cursor-pointer">New</li>
<li className="pr-12 hover:text-orange-400 text-gray-500 text-2xl  cursor-pointer">Popular</li>
<li className="pr-12 hover:text-orange-400 text-gray-500 text-2xl  cursor-pointer">Trending</li>
<li className="pr-12 hover:text-orange-400  text-gray-500 text-2xl cursor-pointer">Category</li>
</ul>
        </div>
        {/* mobile  */}
        <div>
          <img src={Icon} alt="/" className='flex md:hidden cursor-pointer' />
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
    <div>

      <div><img src={Web3} className="ml-16 w-full pr-5 md:w-[1010px] h-[320px]" alt="" /></div>
      <div className="flex flex-col md:flex-row justify-around">

        <div>
          <h1 className="text-5xl md:text-7xl pt-4 pl-16  font-bold">The Bright <br /> Future of <br/> Web 3.0?</h1></div>
        <div><p className="text-gray-500 text-2xl pl-16 my-6">We dive into the next evolution of the web that <br /> claims to put the power of the platforms back <br /> into the hands of the people. But is it really <br /> fullfilling its promse?</p>
        <button className="bg-red-400 text-white px-10 py-5 font-bold ml-16  mt-4 mb-8">Read More</button>
        </div>
        </div>
      
    </div>
    <div className="bg-black w-80  md:w-96 h-[540px] ml-14"><h1 className="text-5xl p-8 text-yellow-500">New</h1>
      <h2 className="text-white ml-6 text-2xl">Hydrogen VS Electric Cars</h2>
      <p className="text-gray-300 my-6 ml-6">Will hydrogen-fueled cars ever catch up <br />to EVs?</p>
      <hr className="mx-6 my-4" />
      <h2 className="text-white ml-6 text-2xl">The Downsodes of AI Artistry</h2>
      <p className="text-gray-300 my-6 ml-6">What are the possible adverse effects of <br /> on-demand AI image generation?</p>
      <hr className="mx-6 my-4" />
      <h2 className="text-white ml-6 text-2xl">Is VC Fundong Drying up?</h2>
      <p className="text-gray-300 my-6 ml-6">Private funding by VC firms is down 50% <br /> YOY. We take a look at what that means.</p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-evenly ml-8">
    <div className="flex my-24">
      <div><img src={Retro} className="w-36 h-40 "  alt="retro" /></div>
    <div><h1 className="ml-8 text-4xl text-gray-400 font-bold">01</h1>
    <h2 className="font-bold ml-8 text-3xl my-4 ">Reviving Retro PCs</h2>
    <p className="ml-8 text-gray-400 text-xl" >What happens When old PCs <br /> are given modern upgrades?</p>
    </div>
  </div>
  <div className="flex my-24">
    <div><img src={Laptop} className="w-36 h-40 "  alt="retro" /></div>
  <div><h1 className="ml-8 text-4xl text-gray-400 font-bold">02</h1>
  <h2 className="font-bold ml-8 text-3xl my-4 ">Top 10 Laptops of 2022</h2>
  <p className="ml-8 text-gray-400 text-xl" >Our best picks for various <br /> needs and budgets.</p>
  </div>
</div>
<div className="flex my-24">
  <div><img src={Gaming} className="w-36 h-40 "  alt="retro" /></div>
<div><h1 className="ml-8 text-4xl text-gray-400 font-bold">03</h1>
<h2 className="font-bold ml-8 text-3xl my-4 ">The Growth of Gaming</h2>
<p className="ml-8 text-gray-400 text-xl" >How the pandemic has sparked <br /> fresh opportunities.</p>
</div>
</div>

  </div>

     </div>
  )
}

export default App
