import { MaidStyle } from "./MaidStyles";



export const selectAllStyles = () => {
    return MaidStyle;
};

export const StyleById = (id) => {
    return MaidStyle.find((item) => item.id === parseInt(id));
};