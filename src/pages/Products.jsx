import Card from '../Components/Card'
import orangebar from '../assets/orange nomad.png'
import blackbar from '../assets/energybar.png'
import water from '../assets/water.png'
import nomadbg2 from '../../public/nomadbg2.png'
import endurancegel from '../assets/endurancegel.png'

const Products = () => {
  return (
    <div className='bg-[#121212] w-screen h-screen grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 py-24'>
      <Card imgUrl1={nomadbg2} imgUrl2={orangebar} title='Energy Bar'/>
      <Card imgUrl1={water} imgUrl2={blackbar} title='Hidration Electrolyte'/>
      <Card imgUrl1={endurancegel} title='Endurance Gel'/>

    </div>
  );
};

export default Products;