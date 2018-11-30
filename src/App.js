import React, {Component} from 'react'
import {lista} from './lista.json'
import Listado from './components/lista'
import Formulario from './components/formulario'
import './App.css'

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

  deleteProducto(index) {
    var productoBorrado = this.lista.producto;
    productoBorrado.splice(index, 1);
    this.setState({ lista: productoBorrado })
  }

render(){
  const lista = this.state.lista.map((producto, i) => {
    return(
      <Listado productos = {producto} key = {i} 
        deleteMethod={ () => this.deleteProducto(i) }
      />
    );
  })

  return(
    <div className="container">
      <div className="header">BLUD | Tienda para recuperarte del cáncer</div>
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