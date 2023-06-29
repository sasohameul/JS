var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener('click', function () {

    var wid = sidenav.style.width;
    console.log(sidenav.style.width);

    // if(wid === '' || wid === '200px'){

    //     sidenav.style.width = '0px';

    // } else {

    //     sidenav.style.width = '200px';

    // }

    console.log(window.innerWidth); //브라우저 너비

    if (window.innerWidth <= 767) { //모바일


        if(wid === '' || wid ==='0px'){

            sidenav.style.width = '200px';
        } else {

            sidenav.style.width = '0px';
        }


    } else { //일반 브라우저 환경에서는

        if (wid === '' || wid === '200px') {

            sidenav.style.width = '0px';

        } else {

            sidenav.style.width = '200px';

        }

    }


})





