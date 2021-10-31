import { createContext, useState } from "react";


export const DataContext = createContext(null);



const DataContextProvider = ({children}) => {

    const[account, setAccount] = useState('')

    const [timer, setTimer] = useState(1)

    return(

    <DataContext.Provider value ={{account, setAccount, timer, setTimer}}>
        {
            children
        }
    </DataContext.Provider>
    )
}

export default DataContextProvider