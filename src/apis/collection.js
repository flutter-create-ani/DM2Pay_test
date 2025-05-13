export const categoryCollection = async () => {
    try {
        // setIsLoading(true);
        const res = await fetch("https://api.dm2buy.com/v3/collection/store/7dH0rzP3NJQeB8nC7zMsq6?limit=5", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await res.json();
        if (!res.ok) {
            throw new Error(response.message || "Failed to fetch data");
        }
        return response;
    } catch(e) {
        throw new Error(e.message || "Failed to fetch data");   
    } finally {
        // setIsLoading(false);
    }

}

export const collectionById = async (id) => {
    try {
        // setIsLoading(true);
        const res = await fetch(`https://api.dm2buy.com/v3/product/store/7dH0rzP3NJQeB8nC7zMsq6/collectionv2?page=1&limit=10&source=web&collectionId=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await res.json();
        if (!res.ok) {
            throw new Error(response.message || "Failed to fetch data");
        }
        return response;
    } catch(e) {
        throw new Error(e.message || "Failed to fetch data");   
    } finally {
        // setIsLoading(false);
    }
} 