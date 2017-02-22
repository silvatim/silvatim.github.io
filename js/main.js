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
    .fromTo('#slide00', 0.5, {autoAlpha:1}, {autoAlpha:0, ease:Power0.easeNone}, 0.5)
    .fromTo('#slide01', 0.5, {autoAlpha:0},  {autoAlpha:1, y:-$(window).height()}, 0.5 )
    .fromTo($projectImage, 1, {autoAlpha:0, yPercent:'-200'}, {autoAlpha:1, yPercent:'10', ease:Power2.easeInOut}, 0.5)
    .add('imageIn')
     .staggerFromTo($pixel, 0.3, {autoAlpha: 0, x: '-=10'}, {autoAlpha: 1, x: '0', ease:Power4.easeInOut}, 0.02, '-=0.2')
     .add('pixelsIn')
     .fromTo($projectTitle, 0.5, {autoAlpha:0, yPercent:'150'}, { autoAlpha:1, yPercent:'20', ease:Power2.easeInOut}, 0.8)
     .fromTo($projectParagraph, 0.5, {autoAlpha:0, yPercent:'150'}, { autoAlpha:1, yPercent:'0', ease:Power2.easeInOut}, 0.8);


  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

 // Fade out first scene
  var pinFirstScene = new ScrollMagic.Scene({
    triggerHook:0,
  })
  .setPin("#slide00")
  // .addIndicators({name:"pin first scene"})
  .addTo(controller);

  //  Pin Second Scene
  var pinSecondScene = new ScrollMagic.Scene({
    triggerHook:0,
    duration:'100%',
    // duration:$(window).height(),
  })
  .setPin('#slide01', {pushFollowers:false})
  // .addIndicators({name:"setting pin"})
  .addTo(controller);

  var firstSceneFadeToSecond = new ScrollMagic.Scene({
    triggerHook:0,
    offset:1,
  })
  .setTween(fadeFirstToSecond)
  // .addIndicators({name:"fade first scene to second"})
  .addTo(controller);

 firstSceneFadeToSecond.on("end", function(event){
  console.log("ended Scene");
 });

//only change from here

firstSceneFadeToSecond.on("after", function(event){
  console.log("leaving");
});


  var pinThirdScene = new ScrollMagic.Scene({
    triggerElement:"#slide02",
    triggerHook:0,
    // offset:1000,
    duration:$(window).height(),

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
      slideInProjects.fromTo($vitamins, 1, {autoAlpha:0, left:'-500px'}, { autoAlpha:1, left:'130px', ease:Power1.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 1, {autoAlpha:0,  left:'1200px'}, { autoAlpha:1,  left:'850px', ease:Power1.easeInOut}, 1.2);
      slideInProjects.fromTo($tours, 1, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'450px', ease:Power1.easeInOut}, 1.6);
      break;
      case $width > 768:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-200px'}, { autoAlpha:1, left:'130px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0,left:'1200px'}, { autoAlpha:1, left:'750px', ease:Power2.easeInOut}, 1.2);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'400px', ease:Power2.easeInOut}, 1.6);
      break;
      case $width > 414:
      slideInProjects.fromTo($vitamins, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'28px', ease:Power2.easeInOut}, 0.8);
      slideInProjects.fromTo($photo, 0.5, {autoAlpha:0, right:'-800px'}, { autoAlpha:1, right:'28px', ease:Power2.easeInOut}, 1.2);
      slideInProjects.fromTo($tours, 0.5, {autoAlpha:0, left:'-300px'}, { autoAlpha:1, left:'28px', ease:Power2.easeInOut}, 1.6);
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
   })
  .setTween(slideInProjects)
  // .addIndicators({name:"Slide in projects"})
  .addTo(controller);

  var pinFourthScene = new ScrollMagic.Scene({
    triggerElement:"#slide03",
    triggerHook:0,
    duration:$(window).height(),
  })
  .setPin("#slide03", {pushFollowers:true})
  // .addIndicators({name:"pin third scene"})
  .addTo(controller);


  var skillsAnimation = new TimelineMax()
      .staggerFrom(".icon", 3, {scale: 0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.1);

 var popInSkills = new ScrollMagic.Scene({
    triggerElement:"#slide03",
    triggerHook:0,
  })
  .setTween(skillsAnimation)
  // .addIndicators({name:"in skills"})
  .addTo(controller);

 var slideContact = new TimelineMax()
     .fromTo($('.contactsbox'), 1, {autoAlpha:0, y:'600px', display:"none"}, { autoAlpha:1, y:'0px', display:"block", ease:Elastic.easeOut})
     .to($('.mousescroll'), 0.4, {rotation:180, ease:Power4.easeInOut});

  var slideUpContact = new ScrollMagic.Scene({
    triggerElement:"#slide04",
    triggerHook:0.1,
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


