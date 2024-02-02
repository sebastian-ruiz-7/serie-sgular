import { useState , useEffect } from 'react'
import { useData } from './context'
import './showResult.css'

export const ShowResult = () => {
    const { result }=useData();
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        if(result===0 || result===1){
            setShowAlert(true);
        }else{
            if (showAlert) {
                setShowAlert(false);
            }
        }

    }, [result])
    

  return (
    <div className='show-result'>
        <p>The result is: {result}</p>
        {showAlert && <p className='alert-text'>This is a special case</p>}
    </div>
  )
}
