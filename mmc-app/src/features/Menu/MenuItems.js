import CappuccinoImg from '../../assets/img/cappuccino.jpg';
import CutletImg from '../../assets/img/cutletricebear.jpg';
import FrappeImg from '../../assets/img/frappe.jpg';
import CurryImg from '../../assets/img/kawaiicurry.jpg';
import TaiyakiImg from '../../assets/img/kawaiitaiyaki.jpg';
import OmeletImg from '../../assets/img/omeletlove.jpg';
import MacaronImg from '../../assets/img/sakuramacarons.jpg';
import RollCakeImg from '../../assets/img/strawberryrollcake.jpg';
import TeaImg from '../../assets/img/tea.jpg';


export const MenuItems = [
    {
        id: 0,
        type: "meal",
        image: OmeletImg,
        food: "Omelet",
        price: "$10",
        description: "A cute ketchup heart with love written on an omelet"
    },
    {
        id: 1,
        type: "meal",
        image: CutletImg,
        food: "Cutlets",
        price: "$12",
        description: "A cute rice bear with a cutlet blanket"
    },
    {
        id: 2,
        type: "meal",
        image: CurryImg,
        food: "Curry",
        price: "$14",
        description: "Rice ball pandas eating curry"
    },
    {
        id: 3,
        type: "sweet",
        image: MacaronImg,
        food: "Macarons",
        price: "$4",
        description: "Cherry blossom shaped macarons"
    },
    {
        id: 4,
        type: "sweet",
        image: RollCakeImg,
        food: "Roll Cake",
        price: "$6",
        description: "Pink roll cake with strawberry design"
    },
    {
        id: 5,
        type: "sweet",
        image: TaiyakiImg,
        food: "Taiyaki",
        price: "$5",
        description: "Taiyaki sundae cones"
    },
    {
        id: 6,
        type: "drink",
        image: TeaImg,
        food: "Tea",
        price: "$3",
        description: "Elegant floral tea cup with cherry blossoms in it"
    },
    {
        id: 7,
        type: "drink",
        image: FrappeImg,
        food: "Frappes",
        price: "$5",
        description: "Pink frappuccino in a tea cup"
    },
    {
        id: 8,
        type: "drink",
        image: CappuccinoImg,
        food: "Cappuccino",
        price: "$6",
        description: "Delicious cappuccino with foam art of a shiba inu"
    },
]

export default MenuItems;
