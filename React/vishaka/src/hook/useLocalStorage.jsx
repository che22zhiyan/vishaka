import {React, useState, useEffect} from 'react'
const useLocalStorage = (key, initalvalue) => {
    console.log(key);
    const [name, setName] = useState( localStorage.getItem(key)?
localStorage.getItem(key)
:initalvalue);
useEffect(()=>{
    localStorage.setItem(key,name)
},[name,key])
  return (
    [name, setName]
  )
}

export default useLocalStorage
