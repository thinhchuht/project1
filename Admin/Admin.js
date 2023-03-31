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


function saveAdd() {
    alert("hello");
    $(".tableDetails").append(`
    <tr>
    <td>1</td>
    <td>Samsung Galaxy S22 Ultra 5G</td>
    <td>30.990.000₫</td>
    <td>6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh</td>
    <td>ProductDetail1</td>
    <td>5</td>
    <td>image1.jpg</td>
    <td>SAMSUNG</td>
    <td>Điện thoại</td>
    <td>
        <button type="button" class="btnEdit">Edit</button>
    </td>
    <td>
        <button type="button" class="btnDelete">Delete</button>
    </td>

</tr>
        </div>
    `)

}