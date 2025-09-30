import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className="m-5 w-100 text-center fs-3" style={{ color: "white" }}>The Cart is Empty!</div>
            </div>
        )
    }
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString() 
            })
        });
        console.log("Order Response:", response);
        if (response.status === 200) {
            dispatch({ type: "DROP" })
    }
}

    let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
        <div> <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
            <table className="table table-hover ">
                <thead className="text-success fs-4">
                    <tr>
                        <th scope="col">Order No.</th>
                        <th scope="col">Food Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Options</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food, index) => (
                        <tr key={index} style={{ color: "white" }}>
                            <th scope="row">{index + 1}</th>  
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.price}</td>
                            <td>{food.size}</td>
                            <td><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} style={{ color: "white" }} /></button></td>
                        </tr>
                    ))} 
                </tbody>
                </table>
            <div><h1 className="fs-2" style={{ color: "white" }}>Total Price: ₹{totalPrice}/-</h1></div>
            <div>
                <button className="btn bg-success mt-5" onClick={handleCheckOut}>Check Out</button>
            </div>
            </div>

        </div>
            )
}
