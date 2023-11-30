import Cake from "./Cake";

const CakeList = ({listOfCakes}) => {
    const differentCakes = listOfCakes.map((cake, id) => {
        return <Cake cake = {cake} key={id}/>
    })

    return ( 
        <section>{differentCakes}</section>
     );
}
 
export default CakeList;