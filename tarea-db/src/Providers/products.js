/* eslint-disable prettier/prettier */
const BASE_URL = 'https://fakestoreapi.com';

const getLstProductos = async ({ signal }) => {
  try {
    const res = await fetch(`${BASE_URL}/products`, { signal });

    if (!res.ok) throw new Error('Ocurrio un error.');

    const products = await res.json();

    return [products, null];
  } catch (error) {
    return [null, error.message];
  }
};

const getProducto = async ({ id }) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);

    if (!res.ok) throw new Error('Ocurrio un error.');

    const product = await res.json();

    return [product, null];
  } catch (error) {
    return [null, error.message];
  }
};

export { getLstProductos, getProducto };
