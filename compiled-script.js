"use strict";
function buildCard(astro) {
    var htmlActive;
    if (astro.active) {
        htmlActive = "<li class=\"active\">Active: " + astro.active + "</li>";
    }
    else {
        htmlActive = "<li>Active: " + astro.active + "</li>";
    }
    var html = "<div class=\"astronaut\"><div class=\"bio\"><h3>" + (astro.firstName, astro.lastName) + "</h3><ul><li>Hours in space: " + astro.hoursInSpace + "</li>" + htmlActive + "<li>Skills: " + astro.skills.join(', ') + "</li></ul></div><img class=\"avatar\" src=\"" + astro.picture + "\"></div>";
    return html;
}
function begin() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function (response) {
        response.json().then(function (json) {
            var header = document.getElementsByTagName('h1')[0];
            if (header) {
                header.insertAdjacentHTML('beforeend', " (" + json.length + " Total)");
            }
            var destination = document.getElementById('container');
            if (destination) {
                json.sort(function (a, b) { return a.hoursInSpace - b.hoursInSpace; });
                json.forEach(function (item) {
                    var astro = buildCard(item);
                    destination.insertAdjacentHTML('afterend', astro);
                });
            }
        });
    });
}
window.onload = begin;
