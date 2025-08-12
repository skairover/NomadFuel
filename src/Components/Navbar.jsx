import Button from './Button';
import mnt from '../assets/flame mountain.webp';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex justify-between hidden md:flex items-center w-screen h-[10vh] bg-[#181818] px-4 z-50 fixed'>
      <div className='flex gap-2 items-center'>
        <img src={mnt} className=' rounded-full w-12 h-12'/>
        <p className='font-[Nocturne-Bold] font-bold text-2xl '>NF</p>
      </div>


     <nav className=' flex items-center gap-5'>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact" className='text-orange-400'>Contact</Link>
      <Button className='bg-[#FF6A00] font-semibold'>shop now</Button>
     </nav>
      
    </div>
  );
};

export default Navbar;