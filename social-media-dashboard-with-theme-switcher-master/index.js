const toggleBtn = document.querySelector('#check');

const body = document.body

const allBoxes = document.querySelectorAll(".bigBox, .box")

const heading = document.querySelector('#two')

toggleBtn.addEventListener('change', function () {
    if (toggleBtn.checked) {
        console.log("fdjh")
        body.classList.toggle('bodyDM');

        allBoxes.forEach(element => {
            element.classList.toggle('allBoxesDM');
        });

        heading.style.color = 'white'
    } else {
        heading.style.color = 'hsl(228, 12%, 44%)'

        body.classList.toggle('bodyDM');

        allBoxes.forEach(element => {
            element.classList.toggle('allBoxesDM');
        });
    }

})