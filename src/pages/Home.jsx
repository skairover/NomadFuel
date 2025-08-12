import Hero from '../Sections/Hero';
import Features from '../Sections/Features';
import Testimonials from '../Sections/Testimonitals';



const Home = () => {
  return (
    <main className='w-screen h-full flex flex-col justify-center items-center overflow-x-hidden '>
        <Hero/>
        <Features/>
        <Testimonials/>
    </main>
  );
};

export default Home;