import React, {useState} from 'react';
import './App.css';
import Foot from "../../components/Foot/Foot";
import humburgerImg from '../../assets/humburger.jpg';
import CheeseburgerImg from '../../assets/cheeseburger.jpg';
import ColaImg from '../../assets/cocacola.jpg';
import HotdogImg from '../../assets/Hot dog.jpg';
import TeaImg from '../../assets/tea.jpg';
import CoffeeImg from '../../assets/coffee.jpg';
import OrderList from "../../components/OrdelList/Order-list";


function App() {
    const [Name, setName] = useState([
        {name: 'Hamburger', count: 0, price: 80, image: humburgerImg, id: 1},
        {name: 'Cheeseburger', count: 0, price: 90, image: CheeseburgerImg, id: 2},
        {name: 'Cola', count: 0, price: 50, image: ColaImg, id: 3},
        {name: 'Hot dog', count: 0, price: 60, image: HotdogImg, id: 4},
        {name: 'Tea', count: 0, price: 40, image: TeaImg, id: 5},
        {name: 'Coffee', count: 0, price: 50, image: CoffeeImg, id: 6},

    ]);

    const btnDelete = (index: number) => {
        const copyCount = [...Name]
        copyCount[index].count = 0
        setName(copyCount)
    }
    const getPrice = (index: number) => Name[index].price

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

    let createFood = Name.map((item, index) => (
        <Foot key={item.id} price={getPrice(index)} name={getName(index)} src={getImg(index)} add={() => counter(index)}/>
    ))

    let sum = 0;

    const printList = () => {
        return Name.map((item, index) => {
            if (item.count > 0){
               return <OrderList key={Math.random()} name={getName(index)} order={getOrder(index)} price={getPrice(index)} delete={() => btnDelete(index)}/>
            }else if (sum === 5){
                return 'no orders'
            } else{
                sum++
                return ''
            }
        })
    }

    return (
        <div className="App">
            <div className='foot-block'>
                {createFood}
            </div>
            <div>
                {printList()}
                <p>{getTotalPrice}</p>
            </div>
        </div>
    );
}

export default App;
