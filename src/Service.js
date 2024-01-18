const queryStrings = {
    app_id:process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}

export const fetchData = async (defaultQuery) => {
    const {app_id,app_key}=queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=7b7ce482&app_key=c797c722b1514df1da6fb0095fb8761e`);
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e;
    }
}


export const fetchTabData = async (defaultId) => {
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultId}?type=public&app_id=7b7ce482&app_key=c797c722b1514df1da6fb0095fb8761e`);
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e;
    }
}

