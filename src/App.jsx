import { useState } from 'react'
import {Stack, TextField } from '@mui/material'

function App() {
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")

  const [isInvalidInterest, setInvalidInterest] = useState(false)
  const [isInvalidRate, setInvalidRate] = useState(false)
  const [isInvalidYear, setInvalidYear] = useState(false)

  const [InterestRes, setInterestRes] = useState(0)

  const validRegex = /^[0-9]*.?[0-9]+$/

  const validInput = (e) => {
    const {name, value} = e.target;

    if (name === 'amount') {
      setAmount(value);
    }
    else if(name === 'rate') {
      setRate(value);
    }
    else if (name === 'year') {
      setYear(value);
    }

    if (validRegex.test(value) || value === "") {
      if (name === 'amount') {
        setInvalidInterest(false);
      }
      else if (name === 'rate') {
        setInvalidRate(false);
      }
      else if (name === 'year') {
        setInvalidYear(false);    console.log('button clicked');

      } 
    } else {
      if (name === 'amount') {
        setInvalidInterest(true);
      }
      else if (name === 'rate') {
        setInvalidRate(true);
      }
      else if (name === 'year') {
        setInvalidYear(true);
      } 
    }
  }

  const calculateInterest = (e) => {
    e.preventDefault();

    if (amount && rate && year) {
      setInterestRes((amount * rate * year) / 100);
      
    } else {
      alert("Enter all field completely...")
    }
  }
  
  const resetInterest = () => {
    setInterestRes(0)
    setAmount("")
    setRate("")
    setYear("")
    setInvalidInterest(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  return (
    <>
     <section className="flex justify-center items-center w-screen h-screen bg-gray-900">
       <div className="max-w-[800px] w-11/12 h-[90%] bg-white p-8 flex flex-col gap-3 justify-between">
          <h1 className='text-4xl'>Simple Interest Calculator</h1>
          <p className='text-xl opacity-50'>Calculator your simple Interest easily</p>

          <div className="w-full h-48 bg-yellow-500 flex flex-col gap-3 justify-evenly items-center rounded-2xl text-white mt-3">
                <h2 className='text-5xl font-bold'>&#8377; {InterestRes}</h2>
                <h4 className='text-2xl uppercase'>Total Simple Interest</h4>
          </div>

          <div className="mt-3">
            <Stack spacing={2}>
             <div className='flex flex-col'>
                <TextField id="principleAmnt" label="Amount" variant="outlined" sx = {{'& .MuiInputBase-input': {fontSize: '20px'}}} name='amount' onChange={validInput} value = {amount || ""}/>
                { isInvalidInterest && 
                  <span className='text-red-700 text-sm mt-1'>Enter Valid Amount</span>
                }
             </div>

             <div className='flex flex-col'>
                <TextField id="interestRate" label="Interest" variant="outlined" sx = {{'& .MuiInputBase-input': {fontSize: '20px'}}} name='rate' onChange={validInput} value = {rate || ""}/>
                { isInvalidRate &&
                  <span className='text-red-700 text-sm mt-1'>Enter Valid Rate</span>        
                }
              </div>

              <div className='flex flex-col'>
                <TextField id="periodYear" label="Year" variant="outlined" sx = {{'& .MuiInputBase-input': {fontSize: '20px'}}} name='year' onChange={validInput} value = {year || ""}/>
                { isInvalidYear &&
                  <span className='text-red-700 text-sm mt-1'>Enter Valid Year</span>
                }
                
              </div>
            </Stack>
          </div>

          <div className="mt-3 flex justify-center w-full gap-6">
              <button type="submit" className='w-1/2 bg-yellow-500 py-3 text-xl uppercase text-white font-semibold hover:bg-white hover:text-yellow-500 hover:border hover:border-yellow-500 rounded-xl transition-colors duration-200' disabled = {isInvalidInterest || isInvalidRate || isInvalidYear} onClick={calculateInterest}>Calculate</button>
              
              <button type="submit" className='w-1/2 text-yellow-500 border border-yellow-500 uppercase text-xl font-semibold py-3 hover:bg-yellow-500 hover:text-white rounded-xl transition-colors duration-200' onClick={resetInterest}>Reset</button>

          </div>          
       </div>
     </section>
    </>
  )
}

export default App
