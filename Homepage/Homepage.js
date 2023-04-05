
// // product

$(function () {
    loadComponent();
    setTimeout(() => {
        featchListProduct();
    }, 200);
});


function loadComponent(params) {
    $(".header").load("./header.html");
    $(".slidesContent").load("./Slide.html");
    $(".banner").load("./banner.html");
    $(".footer").load("./Footer.html");

}


function featchListProduct(params) {
    for (let a = 0; a < 10; a++) {
        $(".products").append(`
        <div>
        <img src="/Project/asset/img/ImgMobile1.png">
        <h3> Reno6 Z 5G</h3>
        <p>Hãng sản xuất : OPPO </p>
        <ul>
            <li><i class="fa-solid fa-star" style="color: orange;"></i></li>
            <li><i class="fa-solid fa-star" style="color: orange;"></i></li>
            <li><i class="fa-solid fa-star" style="color: orange;"></i></li>
            <li><i class="fa-solid fa-star" style="color: orange;"></i></li>
            <li><i class="fa-solid fa-star" style="color: black;"></i></li>
        </ul>
        <p>9.490.000 <sup>đ</sup> &nbsp; <i class="fa-sharp fa-solid fa-cart-shopping"
                style="color: #fa0000;"></i>
        </p>
    </div>
`);
    }
}
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log('b');
}


function showSlides(n) {


    let slides = $(".mySlides");

    if (n > slides.length) {
        slideIndex = 1
        console.log('c')
    }
    if (n < 1) {
        slideIndex = slides.length;
        console.log(slideIndex);
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);
