import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {

        const {products} = useContext(ProductsContext);

    return (
        <div>
            {products.map((product) => (
            
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        );
    };
    <Outlet />

export default Shop;