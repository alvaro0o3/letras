import React from 'react';

const Info = ({ info }) => {

    if (Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strBiographyEN, strCountry } = info;

    let biografia;
    
    if(strBiographyES === '' || strBiographyES === null) {
        biografia = strBiographyEN;
    } else {
        biografia = strBiographyES;
    }

    console.log(info)


    return (
        <div className="card border-light">
            
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo del artista" />
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">{biografia}</p>
                <p className="card-text">Género: <strong>{strGenre}</strong></p>
                <p className="card-text">País de origen: <strong>{strCountry}</strong></p>
                <p className="card-text text-center mt-5">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>

            </div>

        </div>
    );
}

export default Info;