import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProduct = () => {
    const {product} = useProducts();
    return (
        <div>
            <div className="section-container">
                <div className="container">
                    <h1 className="section-title">Manage Products</h1>
                    <div className="row row-cols-md-4 row-cols-1 row-cols-sm-1">
                {
                product.map(item=><ManageSingleProduct key={item._id} values={item}></ManageSingleProduct>)
                }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;