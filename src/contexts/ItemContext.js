import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {

    const [mainArray, setMainArray] = useState([]);

    useEffect(() => {
        axios("mockData.json").then((res) => setMainArray(res.data.data));
      }, []);

    return (
        <ItemContextProvider value={{mainArray}}>
            {props.children}
        </ItemContextProvider>
    )
}