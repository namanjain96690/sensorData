import React , {useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Sdata from './SData';
function App(){
  let MINUTE_MS = 10000;
  let [data,setData]=useState([]);
  let [c,setC]=useState(0);
  const fetchApi= async ()=>{
    if(c<Sdata.length){
    console.log(Sdata[c]);
       data.push(Sdata[c]);
       setData(data);
       setC(c++);
    }
   }
    useEffect(()=> {
      const interval =setInterval(fetchApi,MINUTE_MS);
      return () => clearInterval(interval);
    },[]);
  return (<>    <h1 className='my-3 text-center'>Table</h1>
     <div className='container my-5 shadow-lg text-center pb-1 pt-3 px-3' style={{backgroundColor:'#25d366'}}>
       <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">S No</th>
      <th scope="col">Temperature °C</th>
      <th scope="col">Battery Level%</th>
      <th scope="col">Weight</th>
      <th scope="col">Door Lock/Unlock</th>
      <th scope="col">Error Code</th>
      <th scope="col">Date And Time</th>
    </tr>
  </thead>
  <tbody>
    {
      data && data.map((val,index)=>{
        return(
        <tr key={index}>
        <td scope="row">{index+1}</td>
        <td>{val.Temp}°C</td>
        <td>{val.Battery}%</td>
        <td>{val.Weight}kg</td>
        <td>{val.Door}</td>
        <td>{val.Error}</td>
        <td>{val.Date}</td>
      </tr> )
      })
    }    

  </tbody>
</table>
       </div>
       </>
);
}

export default App;
