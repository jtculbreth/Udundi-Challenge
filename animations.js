
function twirl(){
    var tl = anime.timeline({
        duration: 300
      });
    
    tl
    .add({
        targets: '.plus',
        scale: 0.6,
        rotate: '.75turn',
        easing: 'easeInElastic',
        duration:100
        
    })
    .add({
        targets: '.plus',
        rotate: '1.25turn',
        scale: 1.2,
        easing: 'easeOutElastic'
    })
    .add({
        targets: '.plus',
        rotate:'1.75turn',
        scale: 1,
        easing: 'easeInOutElastic'
        
    })
    .add({
        targets: '.plus',
        rotate:'0deg',
        easing:'easeOutBounce',
    })
   
    
}

function growBlurb(){
    console.log("growBlurb called");
    var tl = anime.timeline({
        duration:400,
    })
    tl
    .add({
        targets: '.blurb-wrapper',
        zIndex: 1,
    })
    .add({
        targets:'.blurb-frame',
        paddingTop:'20vh',
        height:'25vh',
        width:'250px',
        borderRadius:'10px'
    })
    .add({
        targets:'.blurb-frame',
        display:'block',
        height:'75vh',
        width:'500px',
        borderRadius:'0px',
        opacity:'100%',
        paddingTop:'0px',
        easing:'easeOutBounce',
        duration:600
    })
    .add({
        targets:'.blurb',
        opacity:'100%'
    })
}

function wipeText(){
    let tl = anime.timeline({
        duration:300,
        easing: 'easeOutExpo'
    })
    tl
    .add({
        targets: '.letter',
        opacity:[1,0],
        translateZ:[1,0],
        translateX:[0,50],
        delay: (el, i) => 70 * (i+1)
    })
    
}

function handleClick(){
    wipeText();
    twirl();
    growBlurb();
}

function closeBlurb(){
    let tl = anime.timeline({
        duration:150, 
        easing:'easeOutExpo'
    })
    tl
    .add({
        targets:'.bi-x',
        scale:.7
    })
    .add({
        targets:'.bi-x',
        scale:1.2
    })
    .add({
        targets:'.bi-x',
        scale:1,
        easing:'easeOutBounce'
    })
    .add({
        targets:'blurb',
        opacity:0,
        duration:0
    })
    .add({
        targets:'blurb-frame',
        borderRadius:'50px',
        height:['500px','200px'],
        width:'200px',
        easing:'easeInSine',
        duration:0
    })
    .add({
        targets:'blurb-frame',
        borderRadius:'50px',
        height:'0px',
        width:'0px',
        duration:0
    })
    .add({
        targets:'.blurb-wrapper',
        zIndex:-3
        
    })
    .add({
        targets:'.letter',
        opacity:[0,1],
        duration:600
    })
}

