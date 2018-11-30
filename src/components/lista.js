import React, {Component} from 'react'

class Listado extends Component{
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {this.props.productos.producto}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {this.props.productos.precio}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listado