import React, { useEffect, useState } from 'react'
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const Nosotros = () => {

    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        getDatos()
    }, [])


    const getDatos = async () => {
        const req = await axios.get("https://swapi.dev/api/people/");
        const reqs = req.data.results;
        console.log(reqs);
        setPersonaje(reqs)
    }

    return (
        <div>
            <div className="container">

                <div className="container">
                    <h1>
                        personajes
            </h1>
                    <br />
                    {
                        personaje.map((item, id) => (
                             <div key={id}> 
                             
                             <Link to={`/nosotros/${id}`} className="btn btn-outline-warning">{item.name}</Link>
                             
                              </div>

                        ))
                    }

                </div>



            </div>

        </div>
    )
}

export default Nosotros
