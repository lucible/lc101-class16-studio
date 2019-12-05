/* -----------------------------------
FIRST DRAFT : SEE TYPESCRIPT FOR FINAL
----------------------------------- */

function buildAstroCard(astro) {
    let html = `<div class="astronaut"><div class="bio"><h3>${astro.firstName, astro.lastName}</h3><ul><li>Hours in space: ${astro.hoursInSpace}</li><li>Active: ${astro.active}</li><li>Skills: ${astro.skills.join(', ')}</li></ul></div><img class="avatar" src="${astro.picture}"></div>`
    return html
}

function start () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            const destination = document.getElementById('container')

            json.forEach((item) => {
                let astro = buildAstroCard(item)
                destination.insertAdjacentHTML('afterend', astro)
            })
        })
    })
}

window.onload = start;

