import * as React from 'react';
import Card from '@mui/material/Card';
// import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import '../CSS/main.css';

export default function BasicCard() {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [chngdate, setChngdate] = useState(new Date());
  // const [startDate, setStartDate] = useState(new Date());

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
    if(childDec>=0)
      setChild(childDec);
    else
      setChild(child)
  }

  return ( 
    <Card className='checkcard' sx={{ minWidth: 275 }}>
      <CardContent>
 
        <form>
          <div className='checkin'>
          <div className='head'>Check-in</div>
          <input type="date" placeholder="Add date"/>
          {/* <DatePicker />; */}
          {/* <button onChange={setChngdate} value={chngdate}>date</button> */}
              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)}/> */}
          
              {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Calendar/></li>
  </ul>
</div> */}
          </div>

          <div>
          <div className='head'>Check-out</div>
          {/* <DatePicker onChange={setChngdate} value={chngdate} /> */}
          <input type="date" placeholder="Add date"/>
              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)}/> */}
          
          </div>
        </form>
        
        <div className='guest_search'>
        <div className='guests'>
        <div  className='head'>Guests</div>
        <div className="dropdown">
            <button className='dropdownMenu' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="fa-solid fa-user"></i> 
              <div className='typecount'>{(child>0)?`${adult} Adult, ${child} Child`: `${adult} Adult`}</div>
            </button>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{width:"90%"}}>
                      <li className='listitem1'>
                        <div className='guestType'>adult</div>
                        <div className='incDecbtn'>
                          <button className='dropdownbtn' onClick={handleChangeNegAdult}><div>-</div></button>
                          <div className='count'> {adult}</div>
                          <button className='dropdownbtn' onClick={handleChangePosAdult}><div>+</div></button>
                        </div>
                      </li>

                      <li className='listitem2'> 
                        <div className='guestType'>children</div>
                        <div className='incDecbtn'>
                          <button className='dropdownbtn' onClick={handleChangeNegChild}><div>-</div></button>
                            <div className='count'>{child}</div>
                          <button className='dropdownbtn' onClick={handleChangePosChild}><div>+</div></button>
                        </div>
                      </li>
            </div>
        </div>
        </div>
        <button className='search'>Search</button>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
