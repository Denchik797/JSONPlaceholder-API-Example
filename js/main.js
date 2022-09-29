let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    // автоматическая отправка формы
    e.preventDefault()
    let name = document.getElementById('name').value
    let body = document.getElementById('body').value
    // fetch post request
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: body,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let results = document.getElementById('results')
        results.innerHTML = `<p> Название — ${data.title} </p>
        <p> Содержимое — ${data.body} </p>`
    })
})