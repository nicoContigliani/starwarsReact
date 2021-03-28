import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";




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
    }, [])


    const getDatos = async () => {


        const req = await axios.get(`${url}${id}`);
        const reqs = req.data;
        setPer(reqs);

        // console.log("no hay id");




        setTimeout(async () => {
            if (per.length === 0) {
                // alert("per cero")
                setPercero(true)
            } else {


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






        }, 2000);

        console.log(per);
    }

    return (
        <div className="container">


            {
                perCero == true ?


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

                         {per.starships.length === 0 ? "" :  `Nave Estelar: ${per.starships} `}<hr/> 
                         {per.vehicles.length === 0 ? "" : `Vehiculo: ${per.vehicles} `} <hr/>
                         {per.films.length === 0 ? "" :  `Peliculas: ${per.films} `} <hr/>
                         {per.films.species === 0 ||per.films.species === ""  ? "" :  `Especie: ${per.species} `} 







                            </div>
                        </div>



                    </div>




                    :


                    <div key={id}>



                        <div className="starwars">                     

                            <div className="container">
                                Nombre:<br />
                                {per.name}<br />
                                 Cumpleaños:<br /> {per.birth_year}<br />
                                 Creado:<br /> {per.created}<br />
                                 Editado:<br /> {per.edited}<br />
                                 Color de ojos:<br /> {per.eye_color}<br />
                                 Color de pelo:<br /> {per.hair_color}
                                 Color de piel:<br /> {per.skin_color}
                                <br />
                                 Peliculas:<br />{per.films} <br />
                                 Nave Estelar:<br /> {per.starships} <br />
                                 Vehiculo:<br /> {per.vehicles}
                                 Especie:<br /> {per.species}     <br />
                                 Genero: {per.gender} <br />

                            </div>
                        </div>


                    </div>
            }
        </div>
    )
}

export default User
