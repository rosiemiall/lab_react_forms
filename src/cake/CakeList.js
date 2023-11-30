import Cake from "./Cake";

const CakeList = ({listOfCakes}) => {
    const differentCakes = listOfCakes.map((cake) => {
        return <Cake cake = {cake} />
    })

    return ( 
        <section>{differentCakes}</section>
     );
}
 
export default CakeList;