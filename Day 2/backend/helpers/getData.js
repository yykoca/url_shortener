
const getData = () => {

    fetch('http://localhost:3345/links', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    )
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });
}

getData();