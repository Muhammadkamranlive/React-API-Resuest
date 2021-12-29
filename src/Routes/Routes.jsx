
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Table from '../Components/Table';
const Routing = () => {
    return ( 
        <>
        <Routes>
                <Route path="/"
                    element={<>
                        <Navbar />
                        <Slider />
                        <Table/>
                    
                    </>} />
                <Route path="/table" element={ <Table/>}/>
         </Routes>
        </>

     );
}
 
export default Routing;