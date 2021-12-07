import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias:[]};
    this._novaCategorias = this._novaCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novaCategorias);
  }

  _novaCategorias(categorias) {
    this.setState({...this.state, categorias})
  }
  
  _handleEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.categorias.map((categorias, index) => {
            return (
              <li Key={index} className="lista-categorias_item">
                {categorias}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;
