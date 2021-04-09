// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

function blinking() {
    anime.timeline({ loop: true })
        .add({
            targets: '.line',
            background: 'rgba(10, 212, 54, 0)',
            duration: 500,
        })
        .add({
            targets: '.line',
            background: 'rgba(10, 212, 54, 1)',
            duration: 500,
        });
}

var typing = anime.timeline({ loop: false })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1000,
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 1200,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 34 * (i + 1)
    }, '-=1200');


typing.finished.then(blinking);