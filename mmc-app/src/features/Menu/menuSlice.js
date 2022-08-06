import { MenuItems } from "./MenuItems";


export const selectAllItems = () => {
    return MenuItems;
};

export const MenuById = (id) => {
    return MenuItems.find((item) => item.id === parseInt(id));
};

export const MenuByType = (type) => {
    return MenuItems.filter((item) => item.type === parseInt(type));
};