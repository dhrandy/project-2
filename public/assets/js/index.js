$(document).ready(function () {
    $("#find").click(function () {
        $(".address-form").modal('show');
    });
    $(".address-form").modal({
        closable: true,
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}