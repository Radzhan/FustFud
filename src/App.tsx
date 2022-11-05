import React, {useState} from 'react';
import './App.css';
import Foot from "./Foot";
import humburgerImg from './assets/humburger.jpg';
import CheeseburgerImg from './assets/cheeseburger.jpg';
import ColaImg from './assets/cocacola.jpg';
import HotdogImg from './assets/Hot dog.jpg';
import TeaImg from './assets/tea.jpg';
import CoffeeImg from './assets/coffee.jpg';
import OrderList from "./Order-list";


function App() {
    const [Name, setName] = useState([
        {name: 'Hamburger', count: 0, price: 80, image: humburgerImg},
        {name: 'Cheeseburger', count: 0, price: 90, image: CheeseburgerImg},
        {name: 'Cola', count: 0, price: 50, image: ColaImg},
        {name: 'Hot dog', count: 0, price: 60, image: HotdogImg},
        {name: 'Tea', count: 0, price: 40, image: TeaImg},
        {name: 'Coffee', count: 0, price: 50, image: CoffeeImg},

    ]);

    const btnDelete = (index: number) => {
        const copyCount = [...Name]
        copyCount[index].count = 0
        setName(copyCount)
    }
    const getPtice = (index: number) => Name[index].price

    const getName = (index: number) => Name[index].name

    const getImg = (index: number) => Name[index].image

    const getOrder = (index: number) => Name[index].count


    const getTotalPrice = Name.reduce((acc, count) => {
        const NameI = count.count
        for (let i = 0; i < Name.length; i++) {
            if (NameI > 0) {
                return acc + (NameI * count.price)
            }
        }
        return acc
    }, 0)


    const counter = (index: number) => {
        const copyName = [...Name]
        copyName[index].count++
        setName(copyName)
    }

    let createFoot = Name.map((item, index) => (
        <Foot price={getPtice(index)} name={getName(index)} src={getImg(index)} add={() => counter(index)}/>
    ))


    let createList = Name.map((item, index) => (
        <OrderList name={getName(index)} order={getOrder(index)} price={getPtice(index)} delete={() => btnDelete(index)}/>
    ))

    for (let i = 0; i < Name.length; i++){
        if (Name[i].count !== 0) {

        }
    }
    return (
        <div className="App">
            <div className='foot-block'>
                {createFoot}
            </div>
            <div>
                {createList}
                <p>{getTotalPrice}</p>
            </div>
        </div>
    );
}

export default App;
