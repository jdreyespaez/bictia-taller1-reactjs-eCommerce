import React, {Component} from 'react';

class Formulario extends Component{
    constructor(){
        super()
        this.state = {
            producto: '',
            precio: ''
        }

        this.handleCampo = this.handleCampo.bind(this)
        this.handleEnvio = this.handleEnvio.bind(this)
    
    }

    handleCampo(e) {
        const { value, name } = e.target
        this.setState({
            [name] : value
        })
    }

    handleEnvio(e){
        e.preventDefault()
        this.props.onAgregarProducto(this.state)
    }

    render(){
        return(
            <div>
                <form method="POST" onSubmit={this.handleEnvio}>
                    <div>
                        <input
                            className="textInput"
                            type="text"
                            name="producto"
                            placeholder="Producto"
                            onChange={this.handleCampo}
                        />
                    </div>

                    <div>
                        <input
                            className="textInput"
                            type="text"
                            name="precio"
                            placeholder="Precio"
                            onChange={this.handleCampo}
                        />
                    </div>
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario