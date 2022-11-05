import React from 'react';

interface OrderListProps {
    name: string;
    order: number;
    delete: React.MouseEventHandler;
    price: number
}

const OrderList: React.FC<OrderListProps> = (props) => {
    return (
        <div>
            <p>{props.name} x{props.order} {props.price} сом</p>
            <button onClick={props.delete}>X</button>
        </div>
    );
};

export default OrderList;