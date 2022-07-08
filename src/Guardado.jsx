import { useContext } from "react";
import { ListaContext } from "./ListaContext";
import ItemList from "./ItemList";

const Guardado = () => {

    const {guardado} = useContext(ListaContext);
  
    return (
      <div>
        <div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>Departamento</th>
              <th scope='col'>Escuela</th>
              <th scope='col'>Curso</th>
              <th scope='col'>Division</th>
              <th scope='col'>Orden</th>
              <th scope='col'>Codigo</th>
              <th scope='col'>Materia</th>
              <th scope='col'>Horas</th>
              <th scope='col'>Turno</th>
            </tr>
          </thead>
          <tbody>
            {
              guardado.map((d,i) => <ItemList key={i} {...d}/>)
            }
          </tbody>
        </table>
      </div>
    );
  }
  
export default Guardado