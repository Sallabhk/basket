import { Card, Col, Row } from 'antd';
import React from 'react';
import './homepage.css'
 
export const  Homepage = () =>  {
  const [fruits, setFruits] = React.useState([
    { id: '1', name: 'Apple', isFavorite: 'red', quantity: 10 },
    { id: '2', name: 'Orange', isFavorite: 'orange', quantity: 10 },
    { id: '3', name: 'Grapes', isFavorite: 'blue', quantity: 10 },
  ]);

  const  [color,setColor] = React.useState([]);
  const colourArray = []
  const [cart,setCart] = React.useState();
 
  function onAdd(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
         colourArray.push(fruit.isFavorite);
         setColor(oldColor => [...oldColor,colourArray])
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: fruit.isFavorite,
          quantity: fruit.quantity > 0 ? fruit.quantity - 1 : fruit.quantity
        };
        
      } else {
        return fruit;
      }
    });
    
    setFruits(newFruits);
  }
  function onRemove(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: fruit.isFavorite,
          quantity: fruit.quantity< 10 ? fruit.quantity + 1 : fruit.quantity
        };
      } else {
        return fruit;
      }
    });
    colourArray.filter(color)
    setColor((prev) => [...prev,colourArray])
    setFruits(newFruits);
  }
  React.useEffect(()=> {
      setCart(() => color)
  })
  return (
    <div>
    <Row>
    <Col span={18}>
      <Basket items={fruits} onAdd={onAdd}  onRemove={onRemove}/>
      {console.log("rr",color)}
     </Col>
      <Col span={6}>
      {cart && cart.map
           (color => 
            <div style={{ paddingRight: "20px",paddingBottom: "10px"}}>
            <Row style={{background: `${color}`,color: `${color}`}}>-</Row>
            </div>
           )
    }
      </Col>
    </Row>
    </div>
  );
}
 
function Basket({ items, onAdd,onRemove }) {
  return (
    <ul>
      {items.map((item) => (
          <Card
          style={{ width: 300, display: 'inline-block',padding: "5%",marginRight: "5px" , background: `${item.isFavorite}` }}
          actions={[
          <button type="button" onClick={() => onAdd(item)}>
              +
           </button>,
            <button type="button" onClick={() => onRemove(item)}>
            -
         </button>
           ]}
            key={item.id}
        >
        <Card.Meta
            title={item.name}
            description={item.quantity}
        />
        </Card>
     
      ))}
    </ul>
  );
}
 