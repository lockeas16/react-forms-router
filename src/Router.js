import React from "react";
import { Switch, Route } from "react-router-dom";
import NewProduct from "./components/NewProduct";
import ListProducts from "./components/ListProducts";

const Router = ({ handleChange, handleSubmit, product, products }) => (
  <Switch>
    {/* Le indicamos si queremos que el path sea exacto o no, el path y el componente a hacer render*/}
    {/* exact es para que cumpla de manera exacta con el path */}
    <Route
      exact
      path="/"
      render={props => <ListProducts {...props} products={products} />}
    />
    {/* componente anonimo (arrow function), para poder mandar las props del Router */}
    <Route
      path="/new-product"
      render={props => (
        <NewProduct
          {...props}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          {...product}
        />
      )}
    />
  </Switch>
);

export default Router;
