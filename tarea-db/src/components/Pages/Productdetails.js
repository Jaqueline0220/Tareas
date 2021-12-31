import { getProducto } from '../../Providers/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Productdetails.css';
import { useNavigate } from 'react-router-dom';

const Productdetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await getProducto({ id });
      if (err === null) {
        console.log(data);
        setProduct(data);
      }
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <div className="cajaD">
        <div className="imagen">
          <img src={product.image} alt={product.title} />
        </div>

        <h2>Detalle:</h2>
        <ul>
          <li>ID: {product.id}</li>
          <li>Titulo: {product.title}</li>
          <li>Precio: {product.price}</li>
          <li>Descripcion: {product.description}</li>
          <li>Categoria: {product.category}</li>
          {/* <li>Rating:{product.rating.rate} - {product.rating.count}</li> */}
        </ul>

        <button type="button" className="regresar" onClick={() => navigate(`/`)}>
          Regresar
        </button>
      </div>
    </>
  );
};

export default Productdetails;
