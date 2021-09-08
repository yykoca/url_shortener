async function fetchDataFromLocalServer() {

    const url = 'http://localhost:3345/links'
    // const options = {
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // }
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("hier ist fetch data")
            return data
        });
}

const restapi = { fetchDataFromLocalServer };
export default restapi