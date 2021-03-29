import React, { useState, useEffect } from 'react'
import './Inicio.css'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import img from './Img/yo.jpg'






const Inicio = () => {

    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true);
    }, [])

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="img">
            <br />
            <div className="container">
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Bienvenido"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Bienvenidos, este sistema esta desarrollado sobre React.js usando Hooks.
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Cerrar
          </Button>
                    </DialogActions>
                </Dialog>


                <h1>Sobre mi </h1>

                <div class="text-center">


                    <img src={img}  className="t" />

                </div>
<br/>

                <div className="caja">

                    <p>
                        Soy un profesional de TI con la capacidad de trabajar en equipo .Estoy
                        abierto a diversos tipos de experiencia, buscando el crecimiento del grupo,
                        así como el desarrollo personal. Estoy ansioso por implementar nuevos
                        avances tecnológicos. También estoy dedicado a mis obligaciones con la
                        disciplina y responsabilidad. Abordo los problemas con una estrategia
                        centrada en la solución.
             </p>

                </div>









            </div>
        </div>
    )
}

export default Inicio
