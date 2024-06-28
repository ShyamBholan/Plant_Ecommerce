import React,{useState,useEffect} from 'react'
import Card from '../components/Card';
import { API } from '../config';
import axios from 'axios';
const TopProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API}/productlist`)
            .then(res => {
                // Assuming each product has a 'product_rating' field
                const sortedProducts = res.data.sort((a, b) => b.product_rating - a.product_rating);
                setProducts(sortedProducts.slice(0, 4)); // Get top 4 products by product_rating
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products && products.map((item, i) => (
                        <Card data={item} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopProducts