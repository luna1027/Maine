fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) =>
    res.json()
).then((data) => {
    console.log(data);
    let moreImgs = "";
    let moreImgsNav = "";
    let moreImgsAuto = "";
    data.forEach((key, value) => {
        console.log(key['url']);
        moreImgsAuto += `<div style="display:flex;align-items:center;height:100%;"><img style=" width:100%;" src="${key['url']}"></div>`
        moreImgs += `<div><img style="height: 580px;" src="${key['url']}"></div>`
        moreImgsNav += `<div><img style="height: 80px;" src="${key['url']}"></div>`
    });
    console.log(moreImgs);
    // $(".more-img").html(moreImgs);
    $(".slider-for").html(moreImgs);
    $(".slider-nav").html(moreImgsNav);
    $(".center").html(moreImgsAuto);

    // $('.more-img').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}).catch((error) => {
    console.log(error);
})

