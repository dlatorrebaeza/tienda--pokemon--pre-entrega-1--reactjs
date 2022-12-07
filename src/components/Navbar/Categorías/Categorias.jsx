import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
                <button className='btn btn-danger'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
            </li>
            <li className="nav-link">
                <button className='btn btn-danger'><Link className="nav-link" to={"/category/pokemon"}>Pokemon</Link></button>
            </li>
            <li className="nav-link">
                <button className='btn btn-danger'><Link className="nav-link" to={"/category/medicinas"}>Medicinas</Link></button>
            </li>
            <li className="nav-link">
                <button className='btn btn-danger'><Link className="nav-link" to={"/category/pokeballs"}>PokeBalls</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
