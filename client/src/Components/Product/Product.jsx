import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

import "./Product.css";

const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("", {
    locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: "Bananita contenta",
        quantity: 1,
        price: 100,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className='card-product-container'>
      <div className='card-product'>
        <div className='card'>
          <img
            src='https://res.cloudinary.com/pabcode/image/upload/v1699871193/e-commerce/mopgcvdiepr8axkazmcp.png'
            alt='Product Image'
          />
          <h3>Bananita contenta</h3>
          <p className='price'>100 $</p>
          <button onClick={handleBuy}>Comprar</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
