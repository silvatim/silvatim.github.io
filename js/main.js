$(document).ready(function(){

    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open")} else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

  // grab an element
  var myElement = document.querySelector("#nav-main");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();


  //Page Variables
  var $project = $('.project'),
      $projectImageBefore = CSSRulePlugin.getRule(".project-image:before"),
      $projectImageAfter = CSSRulePlugin.getRule(".project-image:after");

  var projectClasses = $project.attr('class').split(' '),
      projectClass = projectClasses[1],
      $projectImage = $project.find('.project-image'),
      $projectTitle = $project.find('.project-title'),
      $projectParagraph = $project.find('.project-paragraph'),
      $pixels = $project.find('.project-pixels'),
      $pixel = $project.find('.pixel');

  //TimelineMax Tweens
  var fadeFirstToSecond = new TimelineMax()
    // .fromTo('#slide00', 0.5, {autoAlpha:1}, {autoAlpha:0, ease:Power0.easeNone}, 0.5)
    // .fromTo('#slide01', 0.5, {autoAlpha:0},  {autoAlpha:1, y:-$(window).height()}, 0.5 )
    // .fromTo('#slide01', 0.5, {autoAlpha:0},  {autoAlpha:1}, 0.5 )
    .fromTo($projectImage, 0.5, {autoAlpha:0, yPercent:'-200'}, {autoAlpha:1, yPercent:'100', ease:Power2.easeInOut}, 0.5)
    .add('imageIn')
    .staggerFromTo($pixel, 0.3, {autoAlpha: 0, x: '-=10'}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, 0.02, '-=0.2')
    .add('pixelsIn')
    .fromTo($projectTitle, 0.5, {autoAlpha:0, yPercent:'150'}, { autoAlpha:1, yPercent:'330', ease:Power2.easeInOut}, 0.5)
    .fromTo($projectParagraph, 0.5, {autoAlpha:0, yPercent:'50'}, { autoAlpha:1, yPercent:'80', ease:Power2.easeInOut}, 0.5);

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

//  Fade out first scene
  var pinFirstScene = new ScrollMagic.Scene({
    triggerElement:'#slide00',
    triggerHook:0,
    duration:300,
  })
  .setPin("#slide00", {pushFollowers:true})
  // .addIndicators({name:"pin first scene"})
  .addTo(controller);
  //
   // Pin Second Scene
  var pinSecondScene = new ScrollMagic.Scene({
    triggerElement:'#slide01',
    triggerHook:0,
    duration:800,
    // ******
    // duration:'100%',
    // duration:$(window).height(),
  })
  .setPin('#slide01', {pushFollowers:true})
  // .addIndicators({name:"setting pin"})
  .addTo(controller);

  var firstSceneFadeToSecond = new ScrollMagic.Scene({
    triggerElement:"#slide01",
    triggerHook:0.3,
    reverse:true,
    // reverse:false,
    // offset:1,
  })
  .setTween(fadeFirstToSecond)
  // .addIndicators({name:"fade first scene to second"})
  .addTo(controller);

//only change from here

  var pinThirdScene = new ScrollMagic.Scene({
    triggerElement:"#slide02",
    triggerHook:0,
    duration:800,
    // offset:1000,
    // ********
    // duration:$(window).height(),

  })
  .setPin("#slide02", {pushFollowers:true})
  // .addIndicators({name:"pin third scene"})
  .addTo(controller);

  var $vitamins = $('.vitamins.projectContainer')
      $photo = $('.photo.projectContainer'),
      $tours = $('.tours.projectContainer'),
      $portfolioHeading = $('.portfolio'),
      $bigbubble = $('.bigbubble'),
      $mediumbubble = $('.mediumbubble'),
      $smallbubble1 = $('.smallbubble1'),
      $smallbubble2 = $('.smallbubble2'),
      $smallbubble3 = $('.smallbubble3');

  var slideInProjects = new TimelineMax()
      .fromTo($portfolioHeading, 2, {autoAlpha:0}, {autoAlpha:1}, 0.8);


  var $width = $(window).width();
    switch (true) {
      case $width > 1300:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-500px'}, { autoAlpha:1, left:'130px', ease:Power1.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0,  left:'1200px'}, { autoAlpha:1,  left:'850px', ease:Power1.easeInOut}, 0.8);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'450px', ease:Power1.easeInOut}, 0.8);
      break;
      case $width > 768:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-200px'}, { autoAlpha:1, left:'130px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0,left:'1200px'}, { autoAlpha:1, left:'750px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'400px', ease:Power2.easeInOut}, 0.8);
      break;
      case $width > 414:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'28px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0, right:'-800px'}, { autoAlpha:1, right:'28px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'28px', ease:Power2.easeInOut}, 0.8);
      break;
      case $width > 320:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'15px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0, right:'-800px'}, { autoAlpha:1, right:'15px', ease:Power2.easeInOut}, 1.2);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'15px', ease:Power2.easeInOut}, 1.6);
      break;
      default:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-200px'}, { autoAlpha:1, left:'10px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0,  left:'-200px'}, { autoAlpha:1,left:'10px', ease:Power2.easeInOut}, 1.2);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-200px'}, { autoAlpha:1, left:'10px', ease:Power2.easeInOut}, 1.6);
    }


  var projectSlide = new ScrollMagic.Scene({
   triggerElement:"#slide02",
    reverse:true,
   // reverse:false,
   })
  .setTween(slideInProjects)
  // .addIndicators({name:"Slide in projects"})
  .addTo(controller);

  var pinFourthScene = new ScrollMagic.Scene({
    triggerElement:"#slide03",
    triggerHook:0,
    duration:800,
    // **********
    // duration:$(window).height(),
  })
  .setPin("#slide03", {pushFollowers:true})
  // .addIndicators({name:"pin third scene"})
  .addTo(controller);

  var skillsAnimation = new TimelineMax()
      .staggerFrom(".icon", 2, {scale: 0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.1);

 var popInSkills = new ScrollMagic.Scene({
    triggerElement:"#slide03",
    triggerHook:0.3,
    reverse:true,
    // reverse:false,
  })
  .setTween(skillsAnimation)
  // .addIndicators({name:"in skills"})
  .addTo(controller);

  var pinFifthScene = new ScrollMagic.Scene({
    triggerElement:"#slide04",
    triggerHook:0,
    // **********
    // duration:$(window).height(),
  })
  .setPin("#slide04")
  // .addIndicators({name:"pin third scene"})
  .addTo(controller);

 var slideContact = new TimelineMax()
     // .fromTo($('.contactsbox'), 1, {autoAlpha:0, y:'600px', display:"none"}, { autoAlpha:1, y:'0px', display:"block", ease:Elastic.easeOut})
     .fromTo($('.contactsbox'), 5, {autoAlpha:0}, { autoAlpha:1, ease:Elastic.easeOut}, 0.5)
     .to($('.mousescroll'), 0.4, {rotation:180, ease:Power4.easeInOut});

  var slideUpContact = new ScrollMagic.Scene({
    triggerElement:"#slide04",
    triggerHook:0.2,
    reverse:true,
    // reverse:false,
  })
  .setTween(slideContact)
  // .addIndicators({name:"slide Contact"})
  .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

//   //  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

      // if supported by the browser we can even update the URL.
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }
	});


});


