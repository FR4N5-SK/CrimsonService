let foro = localStorage.getItem('foro')
let cards = document.getElementById('cards')
let form = document.getElementById('submit')
let nombre = document.getElementById('name')
let lastname = document.getElementById('lastname')
let age = document.getElementById('age')
let genre = document.getElementById('genre')
let post = document.getElementById('post')

if (foro === null) {
    foro = []
}

function cargar(array) {
    let card = ``
    for (let i = 0; i < array.length; i++) {
        card = card + `<span class="content">
                        <div class="head">
                            <h5>${array[i].name} ${array[i].lastname}</h5>
                            <h6>${array[i].age} Años</h6>
                        </div>
                        <p>${array[i].post}</p>
                    </span>`
        cards.innerHTML = card
    }
    nombre.value = ''
    age.value = ''
    lastname.value = ''
    genre.value = 'Masculino'
    post.value = ''
}

cargar(foro);

form.addEventListener("click", function (e) {
    e.preventDefault();
    if (nombre.value.trim() == '' || lastname.value.trim() == '' || age.value.trim() == '' || genre.value.trim() == '' || post.value.trim() == '') {
        return alert('No puedes enviar espacios vacios')
    }
    let new_post = {
        name: nombre.value,
        lastname: lastname.value,
        age: age.value,
        post: post.value,
        genre: genre.value
    }
    foro.push(new_post)
    console.log(foro)
    cargar(foro);
    localStorage.setItem('foro', foro)
})