import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState } from 'react';
import '../CSS/main.css';

export default function BasicCard() {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const handleChangeNegAdult=()=>{
    const adultDec= adult-1;
    if(adultDec>=1)
      setAdult(adultDec);
    else
      setAdult(adult)
  }

  const handleChangePosAdult=()=>{
    const adultInc= adult+1;
    setAdult(adultInc);
  }


  const handleChangePosChild=()=>{
    const childInc= child+1;
    setChild(childInc);
  }

  const handleChangeNegChild=()=>{
    const childDec= child-1;
    if(childDec>0)
      setChild(childDec);
    else
      setChild(childDec)
  }



  return ( 
    <Card className='checkcard' sx={{ minWidth: 275 }}>
      <CardContent>
        <form>
        <div>
        <h4>Check-in</h4>
        <input type="date" placeholder="Enter date"/> 
        </div>
        <div>
        <h4>Check-out</h4>
        <input type="date" placeholder="Enter date"/> 
        </div>
        </form>
        <div className='guest_search'>
        <div className='guests'>
        <h4>Guests</h4>
        {/* <input type="text" placeholder='1 adult'/>  */}
        <div className="dropdown">
            <button className="btn_bootstrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i> <div>{(child>0)?`${adult} Adult, ${child} Child`: `${adult} Adult`}</div>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className='listitem1'>
                  <div>adult</div>
                  <div >
                  <button className='dropdownbtn' onClick={handleChangeNegAdult}>-</button>
                    {adult}
                  <button className='dropdownbtn' onClick={handleChangePosAdult}>+</button>
                  </div>
                </li>

                <li className='listitem2'> 
                  <div>children</div>
                  <div>
                    <button className='dropdownbtn' onClick={handleChangeNegChild}>-</button>
                      {child}
                    <button className='dropdownbtn' onClick={handleChangePosChild}>+</button>
                  </div>
                </li>
            </ul>
        </div>
        </div>
        <button className='search'>Search</button>
        </div>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
