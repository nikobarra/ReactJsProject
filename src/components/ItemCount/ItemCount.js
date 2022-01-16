import {useState} from 'react';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const addItem = () =>{
        if (count < stock)
            setCount (count + 1);
    }

    const quitItem = () =>{
        if (count > initial)
            setCount (count - 1);
    }

    const onAdd = () => {

    }
    return (
        <>
            <div>
                <button onClick={quitItem}> - </button>
                <h3>{count}</h3>
                <button onClick={addItem}> + </button>
            </div>
            <button>Agregar al Carrito</button>
        </>
    );
};
export default ItemCount;