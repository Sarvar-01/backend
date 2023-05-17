

let h1 = document.querySelector("h1")


fetch("https://jsonplaceholder.typicode.com/albums")

    .then(res => res.json())
    .then(data => {
        data.forEach(e => {
            document.write(h1.innerHTML = `
    <p>title</p>
    <h1>${e.title}</h1>
            `)
        });
    })









