import React, { createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data,setData] = useState();
    const apiKey = "3c42fbf953f14b44bc8923547ed69f70";

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        )
        .then(response => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);

    return(
        <div className="news-container">
            <NewsContext.Provider value = {{ data }}>
                {props.children}
            </NewsContext.Provider>
        </div>
    );
};


