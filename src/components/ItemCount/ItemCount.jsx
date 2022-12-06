import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
                {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <p></p>
            <button className='btn btn-info'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;