import { useEffect, useState } from "react";
import style from './fakeStore.module.css'

import Button from "../button/Button";
import { Link } from "react-router-dom";

export interface  IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const FakeStore = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    async function getData() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        console.log(data);
       
    }
    useEffect(()=>{
        getData()
    },[products]);
 
    return (
        <>
          <div>Products</div>
          <div className={style.container}>
            {products.map((product) => (
              <div id={String(product.id)} className={style.card}>
                <h2>{product.title}</h2>
                <span>{product.price}$</span>
                
                <img src={product.image} alt={product.title} />
                <Link to ={String(product.id)}><Button name="zum Produkt"/></Link>
              </div>
            ))};
          </div>
        </>
      );
    };
    export default FakeStore;