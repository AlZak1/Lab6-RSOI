$('#first-btn').on('click', function(event){
    $('div:gt(2)').css({color: "green", fontSize: "large"})
})

$('#second-btn').on('click', function(event){
    $('p.p:even').animate({opacity: "hide"}, "slow")
    $('h:odd').animate({opacty: "hide"}, "slow")
})