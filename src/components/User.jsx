import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     NavLink
// } from "react-router-dom";




const User = () => {

    const [url, setUrl] = useState(`https://swapi.dev/api/people/`)
    const [per, setPer] = useState([])
    const [films, setFilms] = useState()
    const [species, setSpecies] = useState()
    const [starships, setStarships] = useState()
    const [vehicles, setVehicles] = useState()
    const [perCero, setPercero] = useState()



    const { id } = useParams();
    // console.log(id);
    // console.log(id+"esto viene por parametro");



    useEffect(() => {
        getDatos()
        if (per.length === 0 || per ==="") {
            // alert("per cero")
            setPercero(true)
        }
    }, [])


    const getDatos = async () => {


        const req = await axios.get(`${url}${id}`);
        const reqs = req.data;
        setPer(reqs);
        

        // console.log("no hay id");

    }
    const getSecondsDate = async()=>{

           
    
                const f = await per.films.map((item) => (
                    `${item}`
                ))
    
                const fi = await (f.join('  -  '));
                setFilms(fi)
    
                const s = await per.species.map((item) => (
                    `${item}`
                ))
                const Si = await (s.join('  -  '));
                setSpecies(Si)
    
                const n = await per.starships.map((item) => (
                    `${item}`
                ))
                const Ni = await (n.join('  -  '));
                setStarships(Ni)
                const v = await per.vehicles.map((item) => (
                    `${item}`
                ))
                const Vi = await (v.join('  -  '));
                setVehicles(Vi)
            

    }    
   






        // console.log(per);
    

    return (
        <div className="container">


            {


                    <div key={id}>
                        <br /><br />

                        <h1>
                            {per.name}

                        </h1>

                        <div className="starwars">
                            <div className="container">


                         Cumpleaños:{per.birth_year}<br /><hr/>
                         Creado:{per.created}<br /><hr/>
                         Editado:{per.edited}<br /><hr/>
                         Color de ojos: {per.eye_color}<br /><hr/>
                         Color de pelo: {per.hair_color}<br/><hr/>
                         Color de piel: {per.skin_color} <br/><hr/>
                         Genero: {per.gender} <br /><hr/>
                      
                         Peliculas:<br />{per.films} <br /> <hr/>
                         Nave Estelar:<br /> {per.starships} <br /> <hr/>
                         Vehiculo:<br /> {per.vehicles} <br/><hr/>
                          Especie:<br /> {per.species}     <br /> <hr/>





                            </div>
                        </div>



                    </div>




            }
        </div>
    )
}

export default User
