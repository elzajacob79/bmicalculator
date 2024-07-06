import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [age,setAge]=useState(0)
  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [bmi,setBmi]=useState(0)
  const [message,setBmiMessage]=useState(0)
  const [isAge,setIsAge]=useState(true)
  const [isHeight,setIsHeight]=useState(true)
  const [isWeight,setIsWeight]=useState(true)

  const validate=(e)=>{
    const name=e.target.name
    const value=e.target.value
    if(!!value.match(/^[0-9]*$/)){
      if(name=='age'){
        setAge(value)
        setIsAge(true)
      }
      else if(name=='height'){
        setHeight(value)
        setIsHeight(true)
      }
      else{
        setWeight(value)
        setIsWeight(true)
      }
    }
    else{
      if(name=='age'){
        setAge(value)
        setIsAge(false)
      }
      else if(name=='height'){
        setHeight(value)
        setIsHeight(false)
      }
      else{
        setWeight(value)
        setIsWeight(false)
      }
    }
  }

  const handleReset=()=>{
    setAge(0)
    setHeight(0)
    setWeight(0)
    setIsAge(true)
    setIsHeight(true)
    setIsWeight(true)
    setBmi(0)
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(age=="" || height=="" || weight==""){
      alert('Please fill the form completely')
    }
    else{
      setBmi((weight/(height/100)**2).toFixed(1))
    }
    let message = ''
            if (bmi < 18.5) { 
                message = 'You are Underweight'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'You are Healthy'; 
            } else if (bmi >= 25 && bmi < 30) { 
                message = 'You are Overweight';
            } else { 
                message = 'You are Obese'; 
            } 
            setBmiMessage(message);   
  }


  return (
    <>
    <div style={{backgroundImage:"url('https://longevity.technology/lifestyle/wp-content/uploads/2022/11/Healthy-weight-diet-and-physical-activity-to-stay-fit-Image-cr-KarepaStock-Shutterstock.jpg')",height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="d-flex justify-content-center align-items-center">
      <div style={{backgroundImage:"url('https://img.freepik.com/free-photo/blue-bokeh-textured-plain-product-background_53876-102475.jpg')",width:'500px'}} className="p-4 rounded">
        <h1 style={{textAlign:'center'}}>BMI Calculator</h1>
        <p style={{textAlign:'center'}}>Calculate your Body mass index</p>
        <div style={{height:'150px',backgroundColor:'aqua'}} className="p-3 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column">
          <h1 className='fw-bold'>Your BMI : {bmi}</h1>
          <p>Result : {message}</p>
        </div>

        <form className='mt-4' onSubmit={handleCalculate}>
          <div className="mb-3">
          <TextField id="outlined-basic" label="Enter your age" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='age' value={age || ""}/>
          {!isAge &&
          <p className='text-danger'>Invalid Input</p>}
          </div>

          <div className="mb-3">
          <TextField id="outlined-basic" label="Enter your height(cm)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='height' value={height || ""}/>
          {!isHeight &&
          <p className='text-danger'>Invalid Input</p>}
          </div>

          <div className="mb-3">
          <TextField id="outlined-basic" label="Enter your weight(kg)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='weight' value={weight || ""}/>
          {!isWeight &&
          <p className='text-danger'>Invalid Input</p>}
          </div>

          <div className="mb-3">
          <Button variant="contained" color='primary' style={{width:'190px',padding:'15px'}} type='submit'>MALE</Button>
          <Button variant="contained" color='primary' style={{width:'190px',padding:'15px'}} className='ms-5'>FEMALE</Button>
          </div>

          <div className="mb-3 d-flex justify-content-between">
          <Button variant="contained" color='success' style={{width:'190px',padding:'15px'}} type='submit' disabled={isAge && isHeight && isWeight?false:true}>CALCULATE BMI</Button>
          <Button variant="outlined" color='primary' style={{width:'190px',padding:'15px'}} onClick={handleReset}>RESET</Button>
          </div>
        </form>

      </div>
    </div>
      
    </>
  )
}

export default App