export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch (err) {
        if (err instanceof Error)
            console.log("fetchData: " + err.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map