import { Table } from "react-bootstrap";
import './Table.css'
import CartContext from "../../Context/CartContext/cart-context";
import ItemsContext from "../../Context/ItemsContext/items-context";
import { useContext } from "react";

function DataTable(props) {
  const cartProvider = useContext(CartContext)
  const itemsContext = useContext(ItemsContext)

  const addToCartHandler = (id) => {
    const item = itemsContext.items.filter(item => item.id === id)
    cartProvider.addItems(item)
  } 

  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Desciprtion</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><button className="btn btn-success" onClick={() => addToCartHandler(item.id)}>Add To Cart</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;