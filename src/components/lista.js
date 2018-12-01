import React, {Component} from 'react'

class Listado extends Component{
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="producto"> 
                                {this.props.productos.producto}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="precio">
                                {this.props.productos.precio}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="btn" onClick={this.props.deleteMethod}>
                                    Eliminar
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listado