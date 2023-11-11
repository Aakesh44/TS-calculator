import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { editContent,setPreviousCalc } from '../features/showSlice'
import {RootState} from '../store/store'


type prop = {
  val : string
  show : string | JSX.Element
}

const Button = ({val,show} : prop) => {

  const content = useSelector((state: RootState)=> state.showSliceReducer.content)
  const dispatch = useDispatch()

  const numbers = ["1","2","3","4","5","6","7","8","9","0","."]
  const operations = [ "+","−","×","÷","%"]

  const [negative,setNegative] = useState(true)

  function handleButtonClick(val : string){
    

    if( val === "delete" ){
      dispatch( editContent(""))
      return
    }
    else if( val === "equal" ){
      handleCalculation()
      return
    }    
    else if(val === 'negative'){

      if(negative){
        dispatch( editContent( "-" + content))
      }
      else{
        dispatch( editContent(content.slice(1)))
      }
      setNegative(!negative)
    }

    else if(content.length >= 13){
      return 
    }
    else if( numbers.includes(val) ){      
      dispatch( editContent(content + val))
      return
    }    
    else if(content.split("").find(n=> operations.includes(n))){
      handleCalculation(val)
      return
    }
    else if( operations.includes(val) && content.length > 0){
      dispatch( editContent(content + val))
      return
    }


  }  

  function handleCalculation( earlyOperation?: string) {
    
    const operation = content.split("").find(n=> operations.includes(n))
    console.log(operation);

    if(!operation) return 

    const cont = content.split(operation)
    const first = parseFloat(cont[0])
    const sec   = parseFloat(cont[1])

    if( isNaN(first) || isNaN(sec) ) return 

    console.log(first,sec);

    let calc  
    let prevoiosCalc 

    if(operation === "+"){
      const temp = (first + sec).toFixed(2)
      calc = temp.endsWith('.00') ? parseInt(temp) : parseFloat(temp);
      prevoiosCalc = first + "+" + sec
    }
    else if(operation === "−"){
      const temp = (first - sec).toFixed(2)
      calc = temp.endsWith('.00') ? parseInt(temp) : parseFloat(temp);
      prevoiosCalc = first + "−" + sec
    }
    else if(operation === "×"){
      const temp = (first * sec).toFixed(2)
      calc = temp.endsWith('.00') ? parseInt(temp) : parseFloat(temp);
      prevoiosCalc = first + "×" + sec
    }
    else if(operation === "÷"){
      const temp = (first / sec).toFixed(2)
      calc = temp.endsWith('.00') ? parseInt(temp) : parseFloat(temp);
      prevoiosCalc = first + "÷" + sec
    }
    else if(operation === "%"){
      const temp = (first % sec).toFixed(2)
      calc = temp.endsWith('.00') ? temp.slice(0,temp.indexOf(".")) : parseFloat(temp);
      prevoiosCalc = first + "%" + sec
    }    
    
    if(!calc || !prevoiosCalc) return 
    
    if(earlyOperation){
      calc = calc + earlyOperation 
    }    
    dispatch( setPreviousCalc( prevoiosCalc))
    dispatch( editContent( calc.toString()))

  }

  return (
    <div onClick={()=>handleButtonClick(val)}>
      {show}
    </div>
  )
}

export default Button