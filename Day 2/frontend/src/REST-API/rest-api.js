async function fetchDataFromLocalServer() {

    const url = 'http://localhost:3345/links'

    let links = [];

    links = await fetch(url)
        .then(response => response.json())
        .then(data => data);

    return links
}

const restapi = { fetchDataFromLocalServer };
export default restapi