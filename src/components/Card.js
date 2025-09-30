import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useCart, useDispatchCart } from "./ContextReducer";
import { data } from "react-router-dom";
export default function Cart(props) {
    let data = useCart();
     let navigate = useNavigate()
     const priceRef = useRef();
    let dispatch = useDispatchCart();
    let options = props.options;
    const priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
     
    const handleAddToCart = async () => {
        let food = [];
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
         console.log(food)
    console.log(new Date())
        if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, qty: qty, size: size, price: finalPrice, img: props.foodItem.img });
        console.log("Size different so simply ADD one more to the list"); 
         return
      }
      return
    }
     await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, qty: qty, size: size, price: finalPrice, img: props.foodItem.img });
     console.log(data);

      
}
  let finalPrice = qty * parseInt(options[size]); 
    useEffect(() => {
          setSize(priceRef.current.value)
    }, [])
    return (
        <div>

            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                            </select>
                        <select className="m-2 h-100 bg-success rounded" style={{ select: "#FF0000" }} ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>   
                            })}
                        </select>

                        <div className="d-inline fs-5">₹{finalPrice}/-</div>
                        </div>
                        <hr></hr>
                        <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                </div>

            </div>
        </div>
                        )
                    }
                
            