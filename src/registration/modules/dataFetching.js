const api = {
    fetch: async (endpoint,registraionData) => {
        try {
            
            const rawData = await fetch(`http://localhost:3000/api/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registraionData),
            });
            const fetchData = await rawData.json();
            return fetchData;
        } catch (error) {
            console.log(error);
        }
    }
}

export default api;
