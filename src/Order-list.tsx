import React from 'react';

interface OrderListProps {
    name: string;
    order: number;
    delete: React.MouseEventHandler;
}

const OrderList: React.FC<OrderListProps> = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <span>{props.order}</span>
            <button onClick={props.delete}></button>
        </div>
    );
};

export default OrderList;