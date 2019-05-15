import React from "react";

const ListProducts = ({ products }) => (
  <div>
    {products.length ? (
      products.map((product, index) => (
        <div key={index}>
          <img className="imagen" src={product.images[0]} alt="" />
          <p> Nombre: {product.name} </p>
          <p> Precio: ${product.price}.00 </p>
          <p> Desc: {product.description} </p>
        </div>
      ))
    ) : (
      <p>No hay productos</p>
    )}
  </div>
);

export default ListProducts;
