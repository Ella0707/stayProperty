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
