document.addEventListener('DOMContentLoaded', function () {


    const inp = document.querySelector("input")
    const btn = document.querySelector("button")

    const errorPara = document.querySelector('#error');

    const body = document.querySelector('body')

    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    let value;



    function click() {

        value = inp.value;

        if (inp.value.match(regEx)) {
            body.innerHTML = "  <div id=success ><img src=assets/images/icon-success.svg>"
                +
                "<h1>Thanks for subscribing!</h1>"
                +
                "<p> A confirmation email has been sent to " + value +
                "." +
                " Please open it and click the button inside to confirm your subscription.</p >"
                +

                "<button>Dismiss message</button>"
                +

                " </div >"
        } else {
            errorPara.style.display = 'block';

            inp.style.border = '1px solid red'
            inp.style.color = 'red'
            inp.style.backgroundColor = '#ffe8e6'
        }


    }



    btn.addEventListener('click', click)

});