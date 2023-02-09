fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) =>
    res.json()
).then((data) => {
    // console.log(data);
    let moreImgs = "";
    let moreImgsNav = "";
    let moreImgsAuto = "";
    data.forEach((key, value) => {
        // console.log(key['url']);
        moreImgsAuto += `<div style="display:flex;align-items:center;height:100%;"><img style=" width:100%;" src="${key['url']}"></div>`
        moreImgs += `<div><img style="height: 580px;" src="${key['url']}"></div>`
        moreImgsNav += `<div><img style="height: 80px;" src="${key['url']}"></div>`
    });
    // console.log(moreImgs);
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


// $(".content-in").hide();
$(".content").on("mouseenter", function () {
    $(".content").animate({ right: "-100" }, 1000);
    $(".content-in").animate({ right: "0", opacity: "1" }, 1000);
})
$(".content-in").on("mouseleave", function () {
    $(".content").animate({ right: "0" }, 1000);
    $(".content-in").animate({ right: "-100", opacity: "1" }, 1000);
})

const catCanvas = document.querySelector(".catCanvas");
const catCtx = catCanvas.getContext('2d', { willReadFrequently: true });

const DATA_COUNT = 7;
const labels = ['USA', 'China', 'Russia', 'Brazil', 'France', 'Italy', 'UK'];
const dataAll = [76.5, 53, 12.75, 12.5, 9.5, 9.5, 7.75];
const data = {
    axis: '',
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: dataAll,
            backgroundColor: [
                'rgb(255, 99, 132, 0.5)',
                'rgb(255, 159, 64, 0.5)',
                'rgb(255, 205, 86, 0.5)',
                'rgb(75, 192, 192, 0.5)',
                'rgb(54, 162, 235, 0.5)',
                'rgb(153, 102, 255, 0.5)',
                'rgb(201, 203, 207, 0.5)'
            ]
        }
    ]
};

new Chart(catCtx, {
    type: 'polarArea',
    data: data,
    options: {
        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 32
                    },
                    color: '#fff',
                    border: { color: '#fff' }
                },


            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                // text: 'Countries With The Most Pet Cats Globally',
                font: { weight: '700', size: 32 },
                position: 'top',
                padding: {
                    bottom: 50
                },
                color: '#fff'

            }
        }
    },
});

const catCanvasBar = document.querySelector(".catCanvasBar");
const catBarCtx = catCanvasBar.getContext('2d', { willReadFrequently: true });
const datas = {
    labels: labels,
    datasets: [{
        axis: '',
        // label: , // Title
        data: dataAll,
        fill: true,
        backgroundColor: [
            'rgb(255, 99, 132, 0.5)',
            'rgb(255, 159, 64, 0.5)',
            'rgb(255, 205, 86, 0.5)',
            'rgb(75, 192, 192, 0.5)',
            'rgb(54, 162, 235, 0.5)',
            'rgb(153, 102, 255, 0.5)',
            'rgb(201, 203, 207, 0.5)'
        ],
        borderColor: [
            'rgb(255, 99, 132, 0.5)',
            'rgb(255, 159, 64, 0.5)',
            'rgb(255, 205, 86, 0.5)',
            'rgb(75, 192, 192, 0.5)',
            'rgb(54, 162, 235, 0.5)',
            'rgb(153, 102, 255, 0.5)',
            'rgb(201, 203, 207, 0.5)'
        ],
        borderWidth: 0
    }]
};

new Chart(catBarCtx, {
    type: 'bar',
    data: datas,
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                grid: { display: false },
                border: { color: '#fff' },
                ticks: {
                    color: '#fff',
                    font: { weight: 'bold', size: 16 }
                }
            },
            y: {
                grid: { display: false },
                border: { color: '#fff' },
                ticks: {
                    color: '#fff',
                    font: { weight: 'bold', size: 16 }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// C5
const c5 = document.querySelector(".c5");
let i = 0;
// let i = Math.floor(Math.random() * 10);
console.log(i);
setInterval(() => {
    // i = Math.floor(Math.random() * 10);
    i++;
    c5.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)), url('./image/my${i}.jpg')`;
    console.log(c5.style);
    if (i == 10) {
        i = 0;
    }
}, 2000);