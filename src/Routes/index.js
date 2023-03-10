import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Hollywood from '../Pages/Hollywood'
import HollywoodDetails from '../Pages/Hollywood/HollywoodDetails'
import BollywoodDetails from '../Pages/Bollywood/BollywoodDetails'
import TechnologyDetails from '../Pages/Technology/TechnologyDetails'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'                                                                                                                                                            
import Fitness from '../Pages/Fitness'
import Science from '../Pages/Science'
import PageNotFound from '../Pages/PageNotFound'
import FitnessDetails from '../Pages/Fitness/FitnessDetails';
import ScienceDetails from '../Pages/Science/ScienceDetails';


const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={ <Home/>} />
      <Route path='/bollywood' element={ <Bollywood/>} />
      <Route path='/bollywood/:id' element={ <BollywoodDetails/>} />
      <Route path='/technology' element={ <Technology/>} />
      <Route path='/technology/:id' element={ <TechnologyDetails/>} />
      <Route path='/hollywood' element={ <Hollywood/>} />
      <Route path='/hollywood/:id' element={ <HollywoodDetails/>} />
      <Route path='/fitness' element={ <Fitness/>} />
      <Route path='/fitness/:id' element={ <FitnessDetails/>} />
      <Route path='/science' element={ <Science/>} />
      <Route path='/science/:id' element={ <ScienceDetails/>} />
      <Route path='*' element={ <PageNotFound/>} />
      </Routes>
  );
};

export default RouterComponent;



