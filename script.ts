type Astronaut = {
    id: number,
    active: boolean,
    firstName: string,
    lastName: string,
    skills: string[],
    hoursInSpace: number,
    picture: string
}

function buildCard(astro : Astronaut) {
    let htmlActive : string

    if (astro.active) {
        htmlActive = `<li class="active">Active: ${astro.active}</li>`
    } else {
        htmlActive = `<li>Active: ${astro.active}</li>`
    }

    let html = `<div class="astronaut"><div class="bio"><h3>${astro.firstName, astro.lastName}</h3><ul><li>Hours in space: ${astro.hoursInSpace}</li>${htmlActive}<li>Skills: ${astro.skills.join(', ')}</li></ul></div><img class="avatar" src="${astro.picture}"></div>`

    return html
}

function begin () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json : Astronaut[]) => {
            const header = document.getElementsByTagName('h1')[0]

            if (header) {
                header.insertAdjacentHTML('beforeend', ` (${json.length} Total)`)
            }

            const destination = document.getElementById('container')

            if (destination) {
                json.sort((a, b) => { return a.hoursInSpace - b.hoursInSpace})

                json.forEach((item) => {
                    let astro = buildCard(item)
                    destination.insertAdjacentHTML('afterend', astro)
                })
            }
        })
    })
}

window.onload = begin;