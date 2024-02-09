import React,{useState,useRef} from 'react'
import "./mainpage.css"
import useCheckvalidation from './checkvalidation'

const Mainpage = () => {
    const[sname,setsname]=useState()
    const[semail,setsemail]=useState()
    const[epass,setepass]=useState()
    const[cepass,setcepass]=useState()
    const unameref=useRef()
    const emailref=useRef()
    const passref=useRef()
    const cpassref=useRef()     

    useCheckvalidation(sname,semail,epass,cepass)

    let printinputdata=()=>{            
    let name =unameref.current.value
    let email =emailref.current.value
    let pass =passref.current.value
    let cpass =cpassref.current.value   
    setsname(name)
    setsemail(email)
    setepass(pass)
    setcepass(cpass)

        // console.log(name)
        // console.log(email)
        // console.log(pass)
        // console.log(cpass)
        
    }
    
  return (
    <div className='parentdiv' >
    <div>
   <input type='email' ref={unameref} placeholder='User Name'/>
   <br/>
   <input type='email' ref={emailref} placeholder='Email id'/>
   <br/>
   <input type='text' ref={passref} placeholder='PassWord'/>
   <br/>
   <input type='text' ref={cpassref} placeholder='Confirm PassWord'/>
   <br/>
   <button onClick={()=>printinputdata()}>Submit</button>
   </div>
    </div>
  )
}

export default Mainpage