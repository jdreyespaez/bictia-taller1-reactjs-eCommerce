import React, {Component} from 'react'
import {lista} from './lista.json'
import Listado from './components/lista'
import Formulario from './components/formulario'

class App extends Component{
  constructor(){
    super();
    this.state = {
      lista
    }

    
    this.handleAgregarProducto = this.handleAgregarProducto.bind(this)

  }

  handleAgregarProducto(listaNueva){
    this.setState({
      lista: [...this.state.lista, listaNueva]
    })
  }

render(){
  const lista = this.state.lista.map((producto, i) => {
    return(
      <Listado productos = {producto} key = {i} />
    );
  })

  return(
    <div className="container">
      <div>
        <span className="contador">
          {this.state.lista.length}
        </span>
      </div>

      <div>
        <Formulario onAgregarProducto = {this.handleAgregarProducto} />
      </div>

      <div>
        {lista}
      </div>

    </div>
  );
}
}

export default App;