
type MenuItem = {
    name: string;
    description: string;
    price: number;
}
const menu: Array<MenuItem> = [
    {name: "Chicken Tikka Masala", description: "Tandoori chicken in tomato gravy", price: 15.5}, 
    {name: "Aloo Gobi", description: "spiced cauliflower potatoes", price: 12.5}
];

export function App() {
    return <> {/* commenty comment */}
            <div> 
              <h1 style={{color:"blue"}}> Entree </h1>
              <p> Welcome! </p>
                <ul>
                {menu.map(item => <li> {item.name} </li>)}
                </ul>
            </div>
           </>;
}