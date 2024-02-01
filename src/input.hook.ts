import { useState } from 'react'
import { useData } from './context'

export const inputHook = () => {
    const {setInputValue}=useData()
    const [error, setError] = useState<string|undefined>(undefined)

    const handleUpdate=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()

        const value = e.target.value

        if (value === '') {
            return setError(undefined)
        }

        if(!validateInput(value)){
            return setError('Only natural numbers are allowed')
        }

        if (error !== undefined) {
            setError(undefined)
        }


        setInputValue(Number(value))
    }

    const validateInput=(value:string):boolean=>{
        const number = Number(value)
        if (isNaN(number)) {
            return false 
        }
        if (number < 0) {
            return false 
        }
        if (!Number.isInteger(number)) {
            return false 
        }
        return true
    } 

  return {
    error,
    handleUpdate
  }
}
