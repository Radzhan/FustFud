import React from 'react';

interface FootProps {
    price: number;
    name:string;
    src:string;
    add: React.MouseEventHandler;
}

const Foot: React.FC<FootProps> = (props) => {
    return (
        <div className='Foot' onClick={props.add}>
            <img alt='FootName' src={props.src}/>
            <div>
                <p>{props.name}</p>
                <span>Price: {props.price} сом</span>
            </div>
        </div>
    );
};

export default Foot;