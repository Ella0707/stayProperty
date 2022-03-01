$(".room-cost").ionRangeSlider({
    // type: "double",
    min: 1000,
    max: 50000000,
    skin: "round",
    // from: 1000,
    // to: 1000000,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
});


$(".payment").ionRangeSlider({
    // type: "double",
    min: 1000,
    max: 40000,
    skin: "round",
    // from: 1000,
    // to: 1000000,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
});


$(".term").ionRangeSlider({
    // type: "double",
    min: 1,
    max: 30,
    skin: "round",
    // from: 1000,
    // to: 1000000,
    grid: false,
    postfix: " лет",
    hide_min_max: true,
    force_edges: true,
});


// $(".price").ionRangeSlider({
//     type: "double",
//     min: 10000,
//     max: 300000000,
//     skin: "round",
//     // from: 1000,
//     // to: 1000000,
//     grid: false,
//     postfix: " €",
//     hide_min_max: true,
//     force_edges: true,
//     values_separator: "  ",
// });

var $range = $(".price"),
    $inputFrom = $(".price-from"),
    $inputTo = $(".price-to"),
    instance,
    min = 0,
    max = 10000000,
    from = 0,
    to = 0;
   

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    // from: 200,
    // to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
});
instance = $range.data(".price");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});


