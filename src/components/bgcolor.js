import { useState } from 'react';

function Bgcolor() {
  const [color, setColor] = useState("")
  return (
      <div className='w-full h-screen'
      style={{backgroundColor: color}}>
        <div className='flex flex-wrap justify-center text-white pt-8 text-3xl'>BackGroundColor change</div>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div  className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded'>
        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className='outline-none text-white rounded px-4 py-2'>Red</button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "Green"}} className='outline-none text-white rounded px-4 py-2'>Red</button>
        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className='outline-none text-white rounded px-4 py-2'>Red</button>
        </div>
        </div>
      </div>
  );
}

export default Bgcolor;
