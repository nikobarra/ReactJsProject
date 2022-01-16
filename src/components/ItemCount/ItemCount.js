import {useState} from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

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
        const message = `Usted agrego ${count} producto`;
        if (count>0)
            count === 1 ? alert (message): alert (`${message}s`)
                
    }
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                                <Button onClick={quitItem} variant="outline-danger"> - </Button>
                <h3> { count } </h3>
                <Button onClick={addItem} variant="outline-success" > + </Button>
                
            </Stack>

            <Button onClick={onAdd} variant="success">Agregar al Carrito</Button>
        </>
    );
};
export default ItemCount;