console.log('start');



var btn = document.getElementById('play');


btn.onclick = function () {
    var tl = new TimelineMax({
        repeat: -1
    });
    tl.to('.box_01', 2, {
        width: '100px',
        rotationY: 360,
        transformOrigin: "left 50% -700",
        transformPerspective: 600,
        // ease: Bounce.easeOut,
        // onComplete : animation
    }).from('.box_02', 2, {
        x: 200,
        y: 400,
        rotation: 360,
        width: 0,
        opacity: 0
        // repeat: -1,
        // delay: 1,
    }).to('.box_03', 1, {
        x: 400
    });
}


//雜物

function mjij32() {
    var menu01 = document.getElementById("action_01");
    var menu02 = document.getElementById("action_02");
    var menu03 = document.getElementById("action_03");

    menu01.onclick = function () {
        TweenMax.to('#scence_01', .5, {
            x: 100 + '%'
        })
    }
    menu02.onclick = function () {
        TweenMax.to('#scence_02', .5, {
            y: 100 + '%'
        })
    }
    menu03.onclick = function () {
        TweenMax.to('#scence_03', .5, {
            x: 100 + '%',
            y: 100 + '%'
        })
    }
};

//===============
//  旋轉
//===============

TweenMax.fromTo('.box_00', 2, {
    x: 50,
    y: 100

}, {
    x: 50,
    y: 100,
    rotation: 360,
    transformOrigin: "bottom right",
    // repeat: ,
    // yoyo: true
});


//===============
//  貝茲曲線
//===============


TweenMax.to(".section_01 .box_04", 3, {
    bezier: {
        type: "cubic",
        curviness: 1.25,
        values: [{
            x: 0,
            y: 0
        }, {
            x: 500,
            y: -300
        }, {
            x: 300,
            y: 200
        }, {
            x: 800,
            y: 300,

        }],
        // autoRotate: true,
        // autoRotate: 90
    }
});







//scrollmagic
//初始化場景
var controller = new ScrollMagic.Controller();


//動畫
var animation = TweenMax.to('.scroll_box', 1, {
    y: 300
});



var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger_01',
    // reverse :false,
    // duration :'100%',
    // offset :' 100px',
    triggerHook: 0,
}).setTween(animation).addIndicators().addTo(controller)



var animation2 = TweenMax.to('.scroll_box_02', 1, {
    x: 300
});



var scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger_02',
    // reverse :false,
    duration: '100%',
    // offset :' 100px',
    // triggerHook: 0,
}).setTween(animation2).addIndicators().addTo(controller)



// 滾動式差的寫法






//影片的寫法
var scene_movie = new ScrollMagic.Scene({
        triggerElement: "#trigger_movie",
        offset: 200,
        duration: '60%',
        reverse: true
    })
    .on("enter", function () {
        document.getElementById('bgvid').play();
    })
    .on("leave", function () {
        document.getElementById('bgvid').pause();
    })
    .addIndicators({
        name: 'video'
    })
    .addTo(controller)



const animation5 = TweenMax.fromTo('.box_05', 1, {
    alpha: 1,
    rotationX: 0,
    y: 0,
    scale: 1.5,
    transformOrigin: "top center",
    transformPerspective: 600
}, {
    alpha: 0,
    y: 10,
    scale: 1,
    rotationX: 20,
});



var scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger_03',
    // reverse :false,
    duration: '30%',
    // offset :' 100px',
    // triggerHook: 0,
}).setTween(animation5).addIndicators().addTo(controller)



//stick object
var tlts = new TimelineMax();

tlts.add(TweenMax.to('.scrollbox_01', 1, {
    x: 200,
}));
tlts.add(TweenMax.to('.scrollbox_02', 1, {
    x: 300,
}));
tlts.add(TweenMax.to('.scrollbox_03', 1, {
    x: 400,
}));


var scene_s = new ScrollMagic.Scene({
        triggerElement: "#trigger_04",
        duration: '300%',
        //畫面最上緣
        triggerHook: 0,
        //只出現一次
        // reverse: false,
    })
    .setPin('.section_06')
    .setTween(tlts)
    .addIndicators({
        name: 'stickview'
    })
    .addTo(controller);



var wipeAnimation = new TimelineMax()


wipeAnimation.fromTo(".section_07 .panel01", 1, {
        x: "-100%"
    }, {
        x: "0%",
        ease: Linear.easeNone
    }) // in from left
    .fromTo(".section_07 .panel02", 1, {
        x: "100%"
    }, {
        x: "0%",
        ease: Linear.easeNone
    }) // in from right
    .fromTo(".section_07 .panel03", 1, {
        y: "-100%"
    }, {
        y: "0%",
        ease: Linear.easeNone
    }); // in from top




var scene_w = new ScrollMagic.Scene({
        triggerElement: "#trigger_05",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin(".section_07")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


//===============
//  滾動視差
//===============


// var tlpin = new TimelineMax();


var pae01 =  TweenMax.to('.pinbox_1', 1, {
    y: 500
});
var pae02 = TweenMax.to('.pinbox_2', 1, {
    y: -50
});

var pae03 = TweenMax.to('.pinbox_3', 1, {
    y: 300
});



new ScrollMagic.Scene({
    triggerElement: '#trigger_06',
    duration: '300%',
    triggerHook: 0,
    // reverse: true
})
.setTween([ pae01 ,pae02 ,pae03])
.addIndicators({
    name: 'scence pin08'
})
.addTo(controller);




function name(aa) {
    return  aa * 10
}