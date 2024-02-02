import { useReducer , createContext, useContext , useEffect } from 'react';
import { SerieN } from './serie-n';

interface GlobalContext{
    inputValue: number | undefined;
    result: number | undefined;
}

const initialState: GlobalContext = {
    inputValue: undefined,
    result: undefined
}

const DataContext = createContext(initialState);

interface DataProviderProps{
    children: JSX.Element|JSX.Element[]
}

interface provider extends GlobalContext{
    setInputValue: (value: GlobalContext['inputValue'])=>void;
    setResult: (value: GlobalContext['result'])=>void;
}

type Action=
| {type: 'SET_INPUT_VALUE', payload: GlobalContext['inputValue']}
| {type: 'SET_RESULT', payload: GlobalContext['result']}

const reducer = (state: GlobalContext, action: Action): GlobalContext => {
    try {
        const ActionDictionary={
            SET_INPUT_VALUE: ()=>({...state, inputValue: action.payload}),
            SET_RESULT: ()=>({...state, result: action.payload})
        }

        return ActionDictionary[action.type]() as GlobalContext;
    } catch (error) {
        return state;
    }
}


export const DataProvider= ({children}: DataProviderProps) => {
    const [state, dispatch]=useReducer(reducer, initialState);

    const setInputValue= (value: GlobalContext['inputValue'])=>{
        dispatch({type: 'SET_INPUT_VALUE', payload: value})
    }

    const setResult= (value: GlobalContext['result'])=>{
        dispatch({type: 'SET_RESULT', payload: value})
    
    }


    useEffect(() => {
        if(state.inputValue!==undefined){
            const serie=new SerieN(state.inputValue);
            setResult(serie.result);
        }
    }, [state.inputValue])
    


    return (
        <DataContext.Provider value={{...state,setInputValue,setResult} as provider}>
            {children}
        </DataContext.Provider>
    )
}

export const useData= ():provider =>useContext(DataContext) as provider;