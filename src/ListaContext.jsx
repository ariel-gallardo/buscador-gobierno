import { useEffect, useState } from "react";
import { createContext } from "react";

export const ListaContext = createContext()

export const ListaProvider = ({children}) => {

    const {Provider} = ListaContext

    const [init, setInit] = useState(true)
    const [guardado, setGuardado] = useState([])

    const loadInitData = () => {
        if(init){
            const g = localStorage.getItem('guardado')
            if(g){
                setGuardado(JSON.parse(g))
                setInit(false)
            }
        }
    }

    const manipuleItem = (data) => {
        const item = guardado.find(g => g.Orden === data.Orden)
        if(!item){
            const allData = [...guardado,data]
            setGuardado(allData)
            localStorage.setItem('guardado',JSON.stringify(allData))
        }else{
            const allData = guardado.filter(g => g.Orden !== data.Orden)
            setGuardado(allData)
            localStorage.setItem('guardado',allData)
        }
    }

    useEffect(()=>{
        loadInitData()
    },[guardado])

    return <Provider value={{
        manipuleItem,
        guardado
    }}>{children}</Provider>
}