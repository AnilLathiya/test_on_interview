import React from 'react'

function useCheckvalidation (name,email,pass,cpass) {
    if(name=="" && email=="" && pass=="" && cpass==""){
        console.log("please enter value in all fields")
    }else if(pass!==cpass){
        console.log("password and confirm password is not matched")
    }else {        
     console.log("submit succesfully")
}

    return
 
}

export default useCheckvalidation