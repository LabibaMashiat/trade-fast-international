
import FabricsShirtDenimPant from './FabricsShirtDenimPant/FabricsShirtDenimPant';
import FabricsPocketingLiningTrims from './FabricsPocketingLiningTrims/FabricsPocketingTrims';
import FabricsPreconstructedWaistband from './FabricsPreconstructedWaistband/FabricsPreconstructedWaistband';
import FabricsElasticWovenTapes from './FabricsElasticWovenTapes/FabricsElasticWovenTapes';
import FabricsLining from './FabricsLining/FabricsLining';
import FabricsMetalAccessories from './FabricsMetalAccessories/FabricsMetalAccessories';
import FabricsBandrollInterlining from './FabricsBandrollInterlining/FabricsBandrollInterlining';
import FabricsSilkScarf from './FabricsSilkScarf/FabricsSilkScarf';

const ProductCategories = () => {
    return (
        <div className='bg-white py-4'>
        <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Our Products</h2>
        <hr className="mb-6"/>
          
           <div>
             <FabricsSilkScarf></FabricsSilkScarf>
            <FabricsShirtDenimPant></FabricsShirtDenimPant>
            <FabricsPocketingLiningTrims></FabricsPocketingLiningTrims>
            <FabricsPreconstructedWaistband></FabricsPreconstructedWaistband>
            <FabricsElasticWovenTapes></FabricsElasticWovenTapes>
            <FabricsLining></FabricsLining>
            <FabricsMetalAccessories></FabricsMetalAccessories>
            <FabricsBandrollInterlining></FabricsBandrollInterlining>
           </div>
        </div>
    );
};

export default ProductCategories;