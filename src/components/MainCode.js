import React from 'react';
import BasicCard from './Card';
import '../CSS/main.css';

const MainCode = () => {
  return (
    <div className='completecode'>
        <h1>
        Zetgo — amazing hostel for the free spirited traveler
        </h1>
        <div className='para' style={{fontSize:"166%"}}>
        Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
        </div>
        <div className='carddesg'>
        <BasicCard/>
        </div>
    </div>
  )
}
 
export default MainCode