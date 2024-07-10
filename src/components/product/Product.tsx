import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../fakeStore/FakeStore";
import style from './product.module.css';

const Product = () => {

    const initialValue: IProduct = {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    };

    const [product, setProduct] = useState<IProduct>(initialValue);

    const { id } = useParams();

    useEffect(() => {
        fetch (`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id]);

    return (

        <div className={style.productContainer}>
            <img src={product.image} alt={product.title} className={style.productImage} />
            <div className={style.productDetails}>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>{product.category}</h3>
                <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
                <span>Price: ${product.price}</span>
                <Link to={`/fake-store`}><button>Back</button></Link>
        </div>
        </div>
    );
};

export default Product;
