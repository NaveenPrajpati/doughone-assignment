import logo from './logo.svg';

import { AiOutlineDownload } from 'react-icons/ai'
import { PiWarningCircleBold,PiPencilSimpleBold,PiPauseBold,PiPlayBold,PiDownloadSimpleBold,PiLinkSimpleBreakBold,PiStarFill,PiStarHalfFill,PiStarBold } from 'react-icons/pi'
import { LiaSearchSolid } from 'react-icons/lia'
import { BiSolidUserCircle } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { CiPause1 } from 'react-icons/ci'
import arrImg from './assets/arrow.png'

function App() {
  return (
    <div className="App">
      <div className='w-[1440px] mx-auto'>
        <nav className='flex justify-between text-white items-center  bg-blue-600 w-full p-1 px-4'>
          <div className='flex items-center gap-2'>

            <div className='w-16 h-16 flex justify-center items-center rounded-full bg-white font-bold text-3xl text-blue-500'>DO </div>
            <h1 className='font-semibold text-3xl'>ADHARSH FOOD PRODUCTS</h1>
          </div>
          <div className='flex gap-1 items-center'>
            <BiSolidUserCircle className=' text-5xl text-red-500'/>
            <IoIosArrowDown className='text-xl'/>
          </div>
        </nav>

        
        <div className='flex bg-blue-600'>
        {/* left container */}
          <div className=' w-[70%] bg-neutral-50 p-5'>
            <div className='flex justify-between'>
              <div className='relative h-16 w-[300px]'>
                <img src={arrImg} alt="" className='h-full w-[300px] absolute'/>
                <p className='absolute font-semibold text-white text-center w-full mt-3 text-2xl'>IN/OUT Gate Pass</p>
              </div>
              <div className='flex gap-8 items-center'>
                <div className='flex bg-white gap-1 shadow-md border border-slate-300 items-center p-1 rounded-sm'>
                  <LiaSearchSolid/>
                  <input type="text" name="" id="" placeholder='Search'/>
                </div>
                <button className='text-white font-semibold bg-green-500 p-2 rounded-md text-lg'>New Gate Pass</button>
              </div>
            </div>

            <div className='flex flex-wrap justify-evenly mt-10'>
              <div className='w-[200px] h-[100px] border-2 rounded-lg p-5 border-blue-500'>
                <p className='font-semibold flex gap-1 items-center text-slate-500'>Stock <PiWarningCircleBold className='text-sm'/></p>
                <p className='font-semibold text-xl'>100,000</p>
              </div>
              <div className='w-[200px] h-[100px] border-2 rounded-lg p-5 border-blue-500'>
                <p className='font-semibold flex gap-1 items-center text-slate-500'>Stock <PiWarningCircleBold className='text-sm'/></p>
                <p className='font-semibold text-xl'>100,000</p>
              </div>
              <div className='w-[200px] h-[100px] border-2 rounded-lg p-5 border-blue-500'>
                <p className='font-semibold flex gap-1 items-center text-slate-500'>Stock <PiWarningCircleBold className='text-sm'/></p>
                <p className='font-semibold text-xl'>100,000</p>
              </div>
              <div className='w-[200px] h-[100px] border-2 rounded-lg p-5 border-blue-500'>
                <p className='font-semibold flex gap-1 items-center text-slate-500'>Stock <PiWarningCircleBold className='text-sm'/></p>
                <p className='font-semibold text-xl'>100,000</p>
              </div>
             
           
            </div>

            <div className=' border border-blue-500 rounded-md mt-5'>
              <div className='flex justify-between bg-blue-500 p-1'>
                <div className='flex items-center gap-2'>
                  <div className='w-5 h-5 rounded-full bg-white'></div>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Slip Number #123456</p>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Loading</p>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Loading</p>
                </div>
                <div className='flex items-center  gap-5'>
               
                <div className='flex items-center'>
                  <input type="range"  value={0}  className=' appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[80px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white' />
                  <p className='text-white text-[14px]'>75%</p>
                </div>
                  
                  <div className='flex gap-1'>
                  <PiPencilSimpleBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiPauseBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiPlayBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiDownloadSimpleBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiLinkSimpleBreakBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  </div>
                  <div className='flex'>

                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarHalfFill className='text-yellow-400   text-3xl'/>
                  <PiStarBold className='text-yellow-400 text-3xl'/>
                  </div>
                  
                </div>
              </div>
              <div className='p-2 flex flex-wrap items-center'>
                <div className='w-28 h-8 border-2 border-slate-300 m-4  rounded-md'>
                <p className=' text-[11px] text-slate-500 ml-2 -mt-3 p-1 bg-white w-fit mb-0'>Truck Number</p>
                <p className=' text-center  text-[11px] -mt-1'>HR29 BD 234</p>
                </div>
                {Array.from({length: 10}, (_, index)=>(
                  <div className='w-28 h-8 border-2 border-slate-300 m-4  rounded-md'>
                <p className=' text-[11px] text-slate-500 ml-2 -mt-3 p-1 bg-white w-fit mb-0'>Truck Number</p>
                <p className=' text-center  text-[11px] -mt-1'>HRXX XXXX</p>
                </div>
                ))}
              </div>
              <div className='flex justify-end h-7 bg-blue-400 p-1'>
              <IoIosArrowDown className='text-xl text-white'/>
              </div>
              <div className='h-20 p-1'>

              </div>
            </div>
            <div className=' border border-blue-500 rounded-md mt-5'>
              <div className='flex justify-between bg-blue-500 p-1'>
                <div className='flex items-center gap-2'>
                  <div className='w-5 h-5 rounded-full bg-white'></div>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Slip Number #123456</p>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Loading</p>
                  <p className='bg-white text-blue-400 px-2 rounded-xl text-sm'>Loading</p>
                </div>
                <div className='flex items-center  gap-5'>
               
                <div className='flex items-center'>
                  <input type="range"  value={0}  className=' appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-slate-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[80px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white' />
                  <p className='text-white text-[14px]'>75%</p>
                </div>
                  
                  <div className='flex gap-1'>
                  <PiPencilSimpleBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiPauseBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiPlayBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiDownloadSimpleBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  <PiLinkSimpleBreakBold className='text-blue-500 bg-white rounded-sm text-2xl'/>
                  </div>
                  <div className='flex'>

                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarFill className='text-yellow-400   text-3xl'/>
                  <PiStarHalfFill className='text-yellow-400   text-3xl'/>
                  <PiStarBold className='text-yellow-400 text-3xl'/>
                  </div>
                  
                </div>
              </div>
              <div className='p-2 flex flex-wrap items-center'>
                <div className='w-28 h-8 border-2 border-slate-300 m-4  rounded-md'>
                <p className=' text-[11px] text-slate-500 ml-2 -mt-3 p-1 bg-white w-fit mb-0'>Truck Number</p>
                <p className=' text-center  text-[11px] -mt-1'>HR29 BD 234</p>
                </div>
                {Array.from({length: 10}, (_, index)=>(
                  <div className='w-28 h-8 border-2 border-slate-300 m-4  rounded-md'>
                <p className=' text-[11px] text-slate-500 ml-2 -mt-3 p-1 bg-white w-fit mb-0'>Truck Number</p>
                <p className=' text-center  text-[11px] -mt-1'>HRXX XXXX</p>
                </div>
                ))}
              </div>
              <div className='flex justify-end h-7 bg-blue-400 p-1'>
              <IoIosArrowDown className='text-xl text-white'/>
              </div>
              <div className='h-20 p-1'>

              </div>
            </div>
          </div>
          {/* right container */}
          <div className='w-[30%]'>

       
          <div className='m-1  rounded-lg bg-white h-[500px]'>
          <div className='flex gap-1 items-center '>
          <BiSolidUserCircle className=' text-4xl text-blue-500'/>
            <p className=' text-slate-500'>Hi, Keval Here choose one option.</p>
          </div>
          <div className='flex gap-1 justify-end m-2'>
          <p className='border-2 border-blue-400 px-1 text-blue-400 rounded-md font-semibold'>Menu</p>
          <p className='border-2 border-blue-400 px-1 text-blue-400 rounded-md font-semibold'>Notification</p>
          <p className='border-2 border-blue-400 px-1 text-blue-400 rounded-md font-semibold'>Most Search</p>
          </div>

          </div>
          <div  className='w-full bg-neutral-100 p-5'>
            <div className=' h-32 mt-4 w-full border-2 shadow-lg border-blue-500 rounded-lg bg-white'>
            <div className='border-2 border-slate-400 h-20 w-20 rounded-md mx-auto mt-5 '>
              <div className='h-5 w-full border-b-2 border-slate-400'></div>
              <div className='w-5 h-14 border-r-2 border-slate-400'></div>
            </div>
            </div>
            <div className='h-32 mt-4 w-full border-2 shadow-lg border-blue-500 rounded-lg bg-white'>
            <div className='border-2 border-slate-400 h-20 w-20 rounded-md mx-auto mt-5 '>
              <div className='h-5 w-full border-b-2 border-slate-400'></div>
              <div className='w-5 h-14 border-r-2 border-slate-400'></div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
