import React from 'react';

interface FootProps {
    price: number;
    name:string;
}

const Foot: React.FC<FootProps> = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <span>Price: {props.price} сом</span>
        </div>
    );
};

export default Foot;