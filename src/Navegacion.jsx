import {Link} from 'react-router-dom'

const Navegacion = () => {
    return <nav>
        <Link className='me-2' to="/">Lista</Link>
        <Link to="/guardado">Guardado</Link>
    </nav>
}

export default Navegacion