import { useContext, useState, useEffect } from "react";
import { ListaContext } from "./ListaContext";

const ItemList = (d) => {

    const {manipuleItem, guardado} = useContext(ListaContext);

    const [esta, setEsta] = useState(false)

    const manipularGuardado = () => {
        manipuleItem(d)
    }

    const buscar = () => {
        const existe = guardado.find(g => g.Orden == d.Orden)
        setEsta(existe ? true : false)
    }

    useEffect(() => {
        buscar()
    }, [guardado, esta]);
    

    return <tr scope='row'>
                <td><button className={`btn ${esta ? 'btn-danger' : 'btn-success'}`} onClick={manipularGuardado}>{esta ? "Quitar" : "Agregar"}</button></td>
                <td className=''>{d.Ciudad.replace('0','').replace('5','').replace('3','').replace('7','')}</td>
                <td className=''><b>{d.Escuela}</b></td>
                <td className=''><b>{d.Curso}°</b></td>
                <td className=''><b>{d.Division}°</b></td>
                <td className=''><b>{d.Orden}</b></td>
                <td className=''>{d.Codigo}</td>
                <td className=''>{d.Materia}</td>
                <td className=''><b>{d.Horas.toString().replace('X','10').replace('Z','11')}Hs</b></td>
                <td className=''><b>{d.Turno === 'T' ? 'Tarde' : 'Mañana'}</b></td>
    </tr>
}

export default ItemList