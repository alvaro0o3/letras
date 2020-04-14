import React, { useState } from 'react';

const Formulario = ({setSearch}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, setError] = useState(false);

    const { artista, cancion } = busqueda;

    const guardarBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Pasar la busqueda al componente principal
        setSearch(busqueda);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">

                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange={guardarBusqueda}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la canción"
                                            onChange={guardarBusqueda}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary "
                                >Buscar</button>
                            </div>

                        </fieldset>
                        {
                            error
                                ? <p className="alert alert-danger text-white text-center mt-5">Por favor rellena todos los campos</p>
                                : null
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;