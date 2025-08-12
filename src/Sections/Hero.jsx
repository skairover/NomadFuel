//import hiker from '../assets/hiker2.png';
//import energybar from '../assets/energybar0.png'
//import oranagebar from '../assets/orange nomad.png'
//import Button from '../Components/Button';



const Hero = () => {
  return (
   
  <div className="w-screen h-screen flex flex-col justify-center items-start bg-[url('/nomadbg0.png')] bg-cover bg-center overflow-hidden p-12">
 
     
   
        <h2 className=' text-[#f4ead5] font-bold uppercase tracking-wider scale-y-[1.4] text-3xl mb-12'>Energy<br/>for People<br/>Going Places</h2>

        <button className="bg-[#FF6A00] text-lg font-semibold hover:bg-[#f4ead5] hover:text-[#121212] z-10 px-[1.2rem] py-[0.75rem] border  transition duration-300 ease-in-out">
          Fuel Your Journey
        </button>
  
      
  {/*<img
    src={hiker}
    alt="hiker climbing a mountain"
    className="absolute right-0 top-0 h-full w-1/2 object-cover z-0"
  />
  <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-transparent to-[#121212] z-10" />
  <img src={energybar} alt="energy bar" className='w-48 h-auto absolute left-128 top-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10  blur-[1px] ' />
  <img src={oranagebar} alt="energy bar" className='w-48 h-auto absolute left-64 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10  blur-[1px] ' />

 
  <div className="relative z-10 flex items-center h-full w-1/2 bg-[#121212">
    <div className="w-1/2 h-full flex flex-col justify-center items-start px-12">
      <h1 className="font-[Nocturne-Bold] mb-1 text-white text-5xl">NOMADFUEL</h1>
      <p className="text-gray-300 mb-12">Energy for People Going Places</p>

    </div>
  </div>*/}
  </div>

  );
};

export default Hero;
