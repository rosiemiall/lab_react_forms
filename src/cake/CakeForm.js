import { useState} from "react";

const CakeForm = ({onNewCakeSubmission}) => {
    
    // const [newCake, setNewCake] = useState({
    //     cakeName:"",
    //     ingredients:[],
    //     price:null,
    //     rating:null
    // })


    const handleFormSubmit = (event) => {
        event.preventDefault();

        // if (!cakeName || !ingredients || !price || !rating){
        //     alert("Need to Provide all Details");
        //     return;
        // }

        const cakeName = event.target["cakeName"].value
        const ingredients = event.target["ingredients"].value.split(',')
        const price = event.target["price"].value
        const rating = event.target["rating"].value
        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            price: price,
            rating: rating
        }
        // setNewCake({cakeName:"",
        // ingredients:[],
        // price:0,
        // rating:0});

        onNewCakeSubmission(newCake);
        console.log(event.target["cakeName"].value);
    };



    return ( 
        <section>
        <h2>Add New Cake:</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="cakeName">Name:</label>
            <input 
            type="text" 
            name="cakeName" 
            placeholder="cakeName"
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <input type="text"
            id="ingredients" 
            // value={ingredients}
            />
            <label htmlFor="price">Price:</label>
            <input type="number"
            id="price" 
            // value={price}
            />
            <label htmlFor="rating">Rating:</label>
            <input type="number"
            id="rating" 
            // value={rating}
            />
            <input type="submit" value="Add New Cake"/>
        </form>
        </section>
     );
}
 
export default CakeForm;