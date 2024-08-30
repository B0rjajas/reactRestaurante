import React from 'react';
import { Link } from 'react-router-dom'


const Menu = () => {
    return(
        <>
        <h1 className="text-3xl font-light mv-4">Nuevos menus desde el MAC</h1>
        <Link to="/nuevo-platillo"  className="ml-3 bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold ">
            Nuevo plato
        </Link>
        </>
    )

}

export default Menu;