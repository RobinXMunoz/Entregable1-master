
const axios = require("axios")


// Arreglo de productos con imagen local correctamente referenciada
const products = [
    { 
        id: '1', 
        name: 'Jugo Hit de Mora', 
        price: 10, 
        description: 'Un delicioso jugo de mora completamente natural',
        image: 'https://brosty.co/wp-content/uploads/2022/04/jugo-hit-mora-500-ml-scaled.jpg',
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
    
    { 
        id: '6', 
        name: 'Agua', 
        price: 30, 
        description: 'Agua embotellada',
        image: 'https://macadamiapastel.com/wp-content/uploads/2021/02/Botella-de-Agua-600x600.jpg',
    },
    
    { 
        id: '7', 
        name: 'Leche', 
        price: 30, 
        description: 'Deliciosa leche para que la acompañes con deliciosos postres.',
        image: 'https://img.freepik.com/fotos-premium/leche-fresca-botella-vidrio_53876-164805.jpg',
    },
    
    { 
        id: '8', 
        name: 'Café Espresso', 
        price: 30, 
        description: 'bebida de café negro intenso y concentrado, que se prepara con agua caliente que pasa a presión por granos de café molidos.',
        image: 'https://www.shutterstock.com/image-photo/opened-takeout-coffee-cardboard-cup-600nw-119054032.jpg',
    },
    
    { 
        id: '9', 
        name: 'Jugo Hit de Mango', 
        price: 30, 
        description: 'Un delicioso jugo de mora completamente natural',
        image: 'https://mercaldas.vtexassets.com/arquivos/ids/1297271/Jugo-HIT-mango-x500-ml_61769.jpg?v=638022357063000000',
    },
    
    { 
        id: '10', 
        name: 'Pepsi', 
        price: 30, 
        description: 'Bebida gaseosa y azucarada de cola, con un sabor dulce y refrescante. ',
        image: 'https://pizzeriacolombianita.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NTU4MTM0LCJwdXIiOiJibG9iX2lkIn19--5ce0093c2195c60ec5f7f5d200f21943ef633d45/pepsi.jpg?locale=es',
    },
    
    { 
        id: '11', 
        name: 'Colombiana', 
        price: 30, 
        description: 'bebida refrescante, medianamente ácida y dulce, con sabor a kola.',
        image: 'https://licoresmedellin.com/cdn/shop/files/GASEOSA_COLOMBIANA_PERSONAL_400ML.jpg?v=1719430407&width=1024',
    },
    
    { 
        id: '12', 
        name: 'Alpin de Chocolate', 
        price: 30, 
        description: 'Deliciosa leche Alpinde chocolate.',
        image: 'https://mercavil.com/39813-thickbox_default/leche-alpin-chocolate-botella-300ml.jpg',
    },
    
    { 
        id: '13', 
        name: 'Kumis', 
        price: 30, 
        description: 'es un producto lácteo fermentado que se caracteriza por su sabor y textura, y que se elabora a partir de leche de vaca o de yegua.',
        image: 'https://carulla.vtexassets.com/arquivos/ids/17971395/Kumis-Entero-Con-Dulce-Navidad-ALPINA-240-ml-3470899_a.jpg?v=638635671340870000',
    },
    
    { 
        id: '14', 
        name: 'Manzana Postobón', 
        price: 30, 
        description: 'Bebida gaseosa de color rosa, con sabor a manzana, dulce y refrescante.',
        image: 'https://licoresmedellin.com/cdn/shop/files/GASEOSA_MANZANA_POSTOBON_PERSONAL_400ML.jpg?v=1719435301&width=1024',
    },
    
    { 
        id: '15', 
        name: 'Cappuccino', 
        price: 30, 
        description: 'Bebida de café caliente que se prepara con espresso, leche vaporizada y espuma de leche.',
        image: 'https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-hyperrealistic-photography-to-go-latte-to-go-cup-profile-view-isolated-png-image_12730715.png',
    },
    
    { 
        id: '16', 
        name: 'Jugo Hit de Frutos Rojos', 
        price: 30, 
        description: 'Un delicioso jugo de frutos rojos completamente natural.',
        image: 'https://mercaldas.vtexassets.com/arquivos/ids/1297316/Jugo-HIT-frutas-tropicales-x500-ml_61767.jpg?v=638022405352370000',
    },
    
    { 
        id: '17', 
        name: 'Vive 100', 
        price: 30, 
        description: 'Bebida energizante que contiene los ingredientes naturales: extracto de guaraná y extracto de té',
        image: 'https://copservir.vtexassets.com/arquivos/ids/1260073-800-auto?v=638457550704800000&width=800&height=auto&aspect=true',
    },
    
    { 
        id: '18', 
        name: 'Speed Max', 
        price: 30, 
        description: 'bebida energizante que contiene pulpa de chontaduro y borojó, vitaminas y cafeína.',
        image: 'https://drinkx.com.co/wp-content/uploads/2021/07/1622777076R8zlScdP.jpg',
    },
    
    { 
        id: '19', 
        name: 'Speed Max', 
        price: 30, 
        description: 'bebida energizante que contiene pulpa de chontaduro y borojó, vitaminas y cafeína.',
        image: 'https://drinkx.com.co/wp-content/uploads/2021/07/1622777076R8zlScdP.jpg',
    },
    
    { 
        id: '20', 
        name: 'SunTea', 
        price: 30, 
        description: 'Bebida refrescante a base de té natural, con menos azúcar que una gaseosa.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BKetrbLpGHuK_Is14xddF1oZLQ50djP0Lvl_Xu0e22MFNapJ0PWnKA0IbQemVg_DjWc&usqp=CAU',
    },
    
    { 
        id: '21', 
        name: 'Café Americano', 
        price: 30, 
        description: 'Bebida de café caliente que se prepara diluyendo un espresso con agua caliente.',
        image: 'https://st4.depositphotos.com/2803585/26887/i/380/depositphotos_268873072-stock-photo-coffee-hot-morning-drink-cup.jpg',
    },
    
    { 
        id: '22', 
        name: 'Limonada', 
        price: 30, 
        description: 'Bebida refrescante que se prepara con agua, zumo de limón y azúcar.',
        image: 'https://www.shutterstock.com/image-photo/lemonade-lemon-mint-on-white-260nw-2336126703.jpg',
    },
    
    { 
        id: '23', 
        name: 'Zumo de Naranja', 
        price: 30, 
        description: 'Delicioso zumo de frutas en forma de líquido obtenido de exprimir el interior de las naranjas.',
        image: 'https://img.freepik.com/fotos-premium/botella-jugo-naranja-citricos-junto-naranjas-cortadas_1247367-1238.jpg',
    },
    
    { 
        id: '24', 
        name: 'Jugo Natural de Maracuyá', 
        price: 30, 
        description: 'Bebida refrescante y deliciosa que se obtiene de la fruta tropical Passiflora edulis, también conocida como maracuyá.',
        image: 'https://img.freepik.com/fotos-premium/todock-voo-cheese-icepunk-juice-cup-mock-up-imitacion-taza-jugo-icepunk_899449-175012.jpg',
    },
    
    { 
        id: '25', 
        name: 'Monster Energy', 
        price: 30, 
        description: 'Bebida energética que se caracteriza por su mezcla de ingredientes que aportan energía y resistencia.',
        image: 'https://popsamerica.com/2012-large_default/botella-monster-energy-japon.jpg',
    },
];
const uploadDataToFirebase = async () => {
    try {
        for (const product of products) {
            const response = await axios.post(
                'https://prueba-bebida-default-rtdb.firebaseio.com/products.json',
                product
            );
            console.log('Producto subido:', response.data);
        }
    } catch (error) {
        console.error('Error subiendo el producto', error);
    }
};

uploadDataToFirebase()
