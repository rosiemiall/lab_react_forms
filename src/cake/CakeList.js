import Cake from "./Cake";

const CakeList = ({listOfCakes}) => {
    const differentCakes = listOfCakes.map((cake, id) => {
        return <div id="div"><Cake cake = {cake} key={id}/></div>
    })

    return ( 
        <section>{differentCakes}</section>
     );
}
 
export default CakeList;