// Importamos axios
const axios = require('axios');

// definimos la data que queremos subir a firebase
// si quieren cambiar la data o cambiar campos lo puedenhacer facilmente
const products = [
    { 
        id: '1', 
        name: 'Hit', 
        price: 10, 
        description: 'Un delicioso jugo de fruta natural',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KoMp8hC_ZfXwYZqFuMtAUeGxtNAr8q8vzg&s',
    },
    { 
        id: '2', 
        name: 'Coca-Cola', 
        price: 20, 
        description: 'Refresco popular y refrescante',
        image: 'https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_zero_bebidas_liquidas_700x700.jpg?v=1620489359',
    },
    { 
        id: '3', 
        name: 'Tea Hatsu', 
        price: 30, 
        description: 'Té helado refrescante',
        image: 'https://hatsu.co/wp-content/uploads/2023/04/PRODUCTOS-SITIO-WEB_20.png',
    },
    { 
        id: '4', 
        name: 'Cafecito', 
        price: 25, 
        description: 'Café aromático y delicioso',
        image: 'https://carulla.vtexassets.com/arquivos/ids/17473436/Bebida-Cafe-Frappuccino-Coffee-281-ml-91398_a.jpg?v=638613191889800000',
    },
    { 
        id: '5', 
        name: 'Granizado', 
        price: 30, 
        description: 'Bebida fría y refrescante',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYgRmYE2Fd_SZLmguRbF565s3xdfx4sLuNA&s',
    },
];

// este metodo se encarga de subir la data a firebase
const uploadDataToFirebase = async () => {
  try {
    // hacemos un put a la url de firebase con la data que queremos subir
    // la data se sube en formato JSON
    // esa url esta cmpuesta por la url de la base de datos
    // y el nombre del archivo donde se va a guardar la datals
    const response = await axios.put(
      'https://drinkdashbase-default-rtdb.firebaseio.com/products.json',
      products
    );
    console.log('Data subida de manera exitosa:', response.data);
  } catch (error) {
    console.error('Error subiendo la data', error);
  }
};

// Llamamos el metodo para subir la data
uploadDataToFirebase(); 