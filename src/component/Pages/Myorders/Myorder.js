import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderCard from '../../Shared/OrderCard/OrderCard';

const Myorder = () => {
    const [order, setOrder] =useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch('https://stormy-citadel-14201.herokuapp.com/my-order')
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[]);
    const myorderInfo = order.filter(item=>item.email===user.email);
    console.log(myorderInfo)
    return (
        <div className='section-container'>
            <div className="container">
                <h1 className='section-title'>My Orders</h1>
                {!myorderInfo.length && <p className='text-center text-danger'><b >No Data found</b></p>
                   }
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-5">
                    {
                        myorderInfo?.map(item=><OrderCard key={item._id} values={item}></OrderCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Myorder;