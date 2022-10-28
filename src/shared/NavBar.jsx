import {React, useState} from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-green-gray shadow border border-green-dark">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    
                        <h2 className="text-2xl font-bold">LOGO</h2>
                    
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-green-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="">Home</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/pacientes">Pacientes</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/tareas">Tareas</Link>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <Link to="/pagos">Pagos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;