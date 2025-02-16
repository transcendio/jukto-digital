import Products from "pages/products";

const PRODUCTS_ROUTE = [
  {
    path: "/products",
    component: Products,
    is_authenticated: false,
  },
];

export default PRODUCTS_ROUTE;
