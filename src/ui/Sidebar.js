import React  from "react";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ()=> {
return(
    <>
    <div className="md:w-2/5 xl:w-1/5 bg-gray-600">
        <div className="p-6">
        <p className=" text-white text-2xl tracking-wide text-center font-bold uppercase">Restaurente APP de MAC</p>
        <p className="mt-3 text-gray-600">Administra  tu restaurante</p>
        
        <nav className="mt-10 ">
            <Link to="/">Ordenes</Link>
            <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-500" activeClassname="text-yellow-500" exact="true" to="/menu">Ordenes</NavLink>
            <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-500" activeClassname="text-yellow-500" exact="true" to="/menu">Menú</NavLink>

        </nav>
        
        </div>

    </div>
    
    </>
)
}

export default Sidebar