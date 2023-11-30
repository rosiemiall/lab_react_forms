const Cake = ({cake}) => {

  return (
    <>
        <box id="box">
        <h2>{cake.cakeName}</h2>
        <p>ingredients:{cake.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })}</p>
        <p>price: {cake.price}</p>
        <p>rating: {cake.rating}</p>
        </box>
    </>
  )
}

export default Cake;