import './App.css';
import {useState} from 'react';
import {validateNumber} from './api'

function App() {
  const [isValid,setIsValid] = useState("neutral");
  const [number,setNumber] = useState("");
  const [location,setLocation] = useState("");
  const [carrier,setCarrier] = useState("");

  async function search(){
    let res = await validateNumber(number);
    if(res.data.valid === true){
      setIsValid("true");
      setLocation(res.data.location);
      setCarrier(res.data.carrier);
    }
    else{
      setIsValid("false");
      setLocation("");
      setCarrier("");
      alert("Enter Valid Number")
    }
  }
  
  return (
    <div className="body">
      <div className="container bg-white p-4 p-sm-5">
        <div className="row">
          <input value={number} onChange={(event)=>{setNumber(event.target.value)}} 
            className="input col-12 col-lg-10" 
            style={{ boxShadow : isValid==="neutral" ? "5px 6px #888888" : isValid==="true" ? "5px 6px rgb(92, 184, 92)":"5px 6px rgb(217, 83, 79)"}} 
            placeholder="Enter the phone number"/>
          <button className="btn btn-success col-auto px-4 mt-lg-0 mt-4" onClick={search}>Search</button>
        </div>
        <p style={{marginTop:"15px"}}><b>* Include country code</b></p>
      </div>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5><b>Location : </b></h5>{ location }
          </div>
          <div className="col-md-6 mt-4">
            <h5><b>Carrier : </b></h5>{ carrier }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
