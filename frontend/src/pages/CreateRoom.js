import axios from 'axios'
import React, { useState } from 'react'

const CreateRooms = () => {
    const [floor, setFloor] = useState()
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [name, setName] = useState("")

    const create = async () => {
            try {
                const formData = { floor, description, price, name}
               const res = await axios.post('/room', formData)
               console.log(res)
               
            } catch (error) {
                console.log(error)
            }
    }

    const handleFloorChange = (event) => {
        setFloor(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

const handleSubmit = (event) => {
    event.preventDefault();
    create()

    // Send the form data to a server here
};
console.log({ floor })

return (
    <>
    
    <form onSubmit={handleSubmit}>
    <h3 style={{color:"white",}}>Create Room</h3>
        <input
            type="text"
            value={floor}
            onChange={handleFloorChange}
            placeholder="Enter Floor"
        />
        <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter Description"
        />
        <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price"
        />
        <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
        />
        <button type="submit" ><span style={{fontSize:"18px"}}>Submit</span></button>
    </form>
    </>
);
}

export default CreateRooms;