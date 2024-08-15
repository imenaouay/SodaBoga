var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0%  top 90%",
    end: "70% top 50%",
    scrub:true,
      /*markers:true,*/
}});

tl.to("#berry",{
    top:"118%",
    left:"5%",
},'manyberry');

tl.to("#cercleBerry",{
    top:"160%",
    left:"23%"
},'manyberry');

tl.to("#manyberry",{
    width:"18%",
    top:"165%",
    right:"9%"
},'manyberry');

tl.to("#leaf",{
    width:"15%",
    top:"115%",
    rotate:"140deg",
    left:"90%"
},'manyberry');

tl.to("#leaf2",{
    width:"15%",
    top:"113%",
    rotate:"140deg",
    left:"0%"
},'manyberry');


/***** scroll part 3  */
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}});

tl2.to("#cercleBerry",{
    width:"18%",
    left: "42%",
    top: "206%"
});

tl2.to("#berry",{
    width:"23%",
    top: "215%",
    left: "39%",
});

