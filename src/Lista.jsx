import { useEffect, useState } from "react"
import Pages from './pages.json'
import ItemList from './ItemList'

function Lista() {

  const [data, setData] = useState(Pages)
  
  const [escuela, setescuela] = useState('');
  const [materia, setmateria] = useState('');
  const [ciudad, setciudad] = useState('');
  const [horas, sethoras] = useState('');
  const [turno, setturno] = useState('');
  const [codigo, setcodigo] = useState('');
  const [orden, setorden] = useState('');
  const [curso, setcurso] = useState('');
  const [division, setdivision] = useState('');

  const filterData = () => {
   
    setData(
      Pages
      .filter(e => e.Escuela.toString().toLocaleLowerCase().includes(escuela.toLocaleLowerCase()) )
      .filter(e => e.Orden.toString().toLocaleLowerCase().includes(orden.toLocaleLowerCase()) )
      .filter(e => e.Curso.toString().toLocaleLowerCase().includes(curso.toLocaleLowerCase()) )
      .filter(e => e.Division.toString().toLocaleLowerCase().includes(division.toLocaleLowerCase()) )
      .filter(e => e.Materia.toString().toLocaleLowerCase().includes(materia.toLocaleLowerCase()) )
      .filter(e => e.Ciudad.toString().toLocaleLowerCase().includes(ciudad.toLocaleLowerCase()) )
      .filter(e => e.Horas.toString().toLocaleLowerCase().includes(horas.toLocaleLowerCase()) )
      .filter(e => e.Turno.toString().toLocaleLowerCase().includes(turno.toLocaleLowerCase()) )
      .filter(e => e.Codigo.toString().toLocaleLowerCase().includes(codigo.toLocaleLowerCase()) )
    )
  }

  useEffect(()=>{
    if(escuela !== '' || materia!== '' || ciudad!== '' || horas !== '' || turno !== '' || codigo !== '' || orden !== '' || curso !== ''  || division !== '' )
      filterData()
    else
      setData(Pages)
  },[escuela, materia, ciudad, horas, turno, codigo,orden,curso,division])



  return (
    <div>
      <div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="w-50" scope='col'>Accion</th>
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
          <tr>
            <td>-</td>
            <td><input onChange={(e)=>{setciudad(e.target.value)}} value={ciudad} name="ciudad" placeholder="Departamento"/></td>
            <td><input className='w-75' onChange={(e)=>{setescuela(e.target.value)}} value={escuela} name="escuela" placeholder="Escuela" /></td>
            <td><input className='w-75' onChange={(e)=>{setcurso(e.target.value)}} value={curso} name="curso" placeholder="" /></td>
            <td><input className='w-75' onChange={(e)=>{setdivision(e.target.value)}} value={division} name="division" placeholder="Division" /></td>
            <td><input onChange={(e)=>{setorden(e.target.value)}} value={orden} name="orden" placeholder="Orden" /></td>
            <td><input onChange={(e)=>{setcodigo(e.target.value)}} value={codigo} name="codigo" placeholder="Codigo"/></td>
            <td><input onChange={(e)=>{setmateria(e.target.value)}} value={materia} name="materia" placeholder="Materia"/></td>
            <td><input onChange={(e)=>{sethoras(e.target.value)}} value={horas} name="horas" placeholder="Horas"/></td>
            <td><input onChange={(e)=>{setturno(e.target.value)}} value={turno} name="turno" placeholder="Turno"/></td>
          </tr>
          {
            data.map((d,i) => <ItemList key={i} {...d}/>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
