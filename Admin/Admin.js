$(function () {
    loadAdmin();
});

function loadAdmin() {
    $(".header").load("./header.html");
    $(".leftBar").load("./leftbar.html");

}


// $("#product").click(function () {
//     $(".rightContent").load("./Product.html");
// })
function showProduct() {
    $(".rightContent").load("./Product.html");
}

// $("#account").click(function () {
//     $(".rightContent").load("./Account.html");
// })
function showManufacturer() {
    $(".rightContent").load("./Manufacturer.html");
}


function showCategory() {
    $(".rightContent").load("./Category.html");
}

function showAccount() {
    $(".rightContent").load("./Account.html");
}

// $(".btnAdd").click(function () {
//     $(".addNew").removeClass("hidden");
// })

// $(".x").click(function () {
//     $(".addNew").addClass("hidden");
// })

function addProd() {
    $(".addNew").removeClass("hidden");
    $(".backdrop").fadeTo(200, 1);
}
function hidePop() {
    $(".addNew").addClass("hidden");
    $(".backdrop").fadeOut(200);
}