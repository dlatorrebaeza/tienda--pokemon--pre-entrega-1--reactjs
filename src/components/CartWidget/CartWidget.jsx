const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <button className="btn btn-danger"><i class="bi bi-cart"></i> Carrito</button>
            </li>
            <p>0</p>
        </ul>
    );
}

export default CartWidget;
