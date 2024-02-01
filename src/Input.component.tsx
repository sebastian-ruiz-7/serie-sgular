import { inputHook } from "./input.hook"
import './input.css'

export const InputText = () => {
    const {error,handleUpdate}=inputHook()    
  return (
    <div className="input-component">
        <p>Please, enter the nth natural number you would like to calculate</p>
        <input onChange={handleUpdate} type="text" name="input" />
        {error && <p className="error-input">{error}</p>}
    </div>
  )
}
[]