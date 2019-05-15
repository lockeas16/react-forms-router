import React from "react";

const NewProduct = ({ handleChange,handleSubmit, name, images, price, description }) => (
  <div className="productForm">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <label htmlFor="">Nombre del producto</label>
          <input onChange={handleChange} value={name} name="name" type="text" />
        </div>
        <div>
          <label htmlFor="">Precio del producto</label>
          <input
            onChange={handleChange}
            value={price}
            name="price"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="">Descripción del producto</label>
          <textarea
            onChange={handleChange}
            name="description"
            id=""
            cols="30"
            rows="10"
            value={description}
          />
        </div>
        <div>
          <label htmlFor="">Imagenes del producto</label>
          <small>(Separa las imagenes mediante comas)</small>
          <textarea
            onChange={handleChange}
            name="images"
            id=""
            cols="30"
            rows="10"
            value={images}
          />
        </div>
      </fieldset>
      <button>Dar de alta</button>
    </form>
  </div>
);
export default NewProduct;
