const Cake = ({cake}) => {

  return (
    <>
        <section id="box">
          <h2 className="title">{cake.cakeName}</h2>
          <ul><b>Ingredients:</b>{cake.ingredients.map(ingredient => {
            return <li>{ingredient}</li>})}</ul>
          <p className="para"> £{cake.price}</p>
          <p className="para"> {cake.rating}⭐</p>
        </section>
    </>
  )
}

export default Cake;