import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';


function App() {

  const [search, setSearch] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  const { artista, cancion } = search;

  useEffect(() => {

    // Para que no se ejecute al refrescar la página
    if (artista === undefined) return;

    const consultarLetra = async () => {
      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const urlInfo = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      // Para llamar a 2 apis al mismo tiempo y no halla problemas
      const [letra, info] = await Promise.all([
        axios(urlLetra),
        axios(urlInfo)
      ])

      setLetra(letra.data.lyrics)
      setInfo(info.data.artists[0])
    }

    consultarLetra();
  }, [artista, cancion])

  return (
    <Fragment>
      <Formulario
        setSearch={setSearch}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
