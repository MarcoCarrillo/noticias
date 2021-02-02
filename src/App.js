import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir categoria y noticias
  const [categoria, guardarCategoria]= useState('');
  const [noticias, guardarNoticias]= useState([]);

  useEffect(() => {
    
    const consultarAPI = async() => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=214d6a21a64344c288030e5a29b2d141`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
