import React, { Component } from "react";
import Router from "./Router";
// componente que nos va ayudar a evitar que se recargue la pagina
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    // lo que guardemos del formulario
    product: {
      name: "",
      price: 0,
      description: "",
      images: []
    },
    // lo que tengamos como lista de productos
    products: []
  };

  handleChange = e => {
    let { product } = this.state;
    let field = e.target.name;
    // tratamos las imagenes para separarlas
    if (field === "images"){
      let imageStr = e.target.value.split(",");
      product[field] = imageStr;
      return this.setState({product});
    }
    product[field] = e.target.value;
    this.setState({ product });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { product, products } = this.state;
    products.push(product);
    product = { name: "", price: 0, description: "", images: [] };
    this.setState({ products, product });
  };

  render() {
    const { product, products } = this.state;
    return (
      <div className="App">
        <nav>
          {/* usamos componente Link en lugar de los anchor, el prop es to para indicar la ruta */}
          <Link to="/">Home</Link>
          <Link to="/new-product">New Product </Link>
          <p>Productos:{products.length}</p>
        </nav>
        <Router product={product} products={products} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
