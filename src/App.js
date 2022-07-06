import { useEffect, useState } from "react"
import Pages from './pages.json'

function App() {

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
            <td><input onChange={(e)=>{setciudad(e.target.value)}} value={ciudad} name="ciudad" placeholder="Departamento"/></td>
            <td><input onChange={(e)=>{setescuela(e.target.value)}} value={escuela} name="escuela" placeholder="Escuela" /></td>
            <td><input onChange={(e)=>{setcurso(e.target.value)}} value={curso} name="curso" placeholder="Curso" /></td>
            <td><input onChange={(e)=>{setdivision(e.target.value)}} value={division} name="division" placeholder="Division" /></td>
            <td><input onChange={(e)=>{setorden(e.target.value)}} value={orden} name="orden" placeholder="Orden" /></td>
            <td><input onChange={(e)=>{setcodigo(e.target.value)}} value={codigo} name="codigo" placeholder="Codigo"/></td>
            <td><input onChange={(e)=>{setmateria(e.target.value)}} value={materia} name="materia" placeholder="Materia"/></td>
            <td><input onChange={(e)=>{sethoras(e.target.value)}} value={horas} name="horas" placeholder="Horas"/></td>
            <td><input onChange={(e)=>{setturno(e.target.value)}} value={turno} name="turno" placeholder="Turno"/></td>
          </tr>
          {
            data.map((d,i) => <tr key={i} scope='row'>
              <td className=''>{d.Ciudad.replace('0','').replace('5','').replace('3','').replace('7','')}</td>
              <td className=''><b>{d.Escuela}</b></td>
              <td className=''><b>{d.Curso}○</b></td>
              <td className=''><b>{d.Division}○</b></td>
              <td className=''><b>{d.Orden}</b></td>
              <td className=''>{d.Codigo}</td>
              <td className=''>{d.Materia}</td>
              <td className=''><b>{d.Horas.toString().replace('X','10').replace('Z','11')}Hs</b></td>
              <td className=''><b>{d.Turno === 'T' ? 'Tarde' : 'Mañana'}</b></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
