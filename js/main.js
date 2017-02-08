var s = skrollr.init({});

skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,
    //The easing function to use.
    easing: 'sqrt',
    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 2,
    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        return 500;
    },
    complexLinks: false,
    change: function(newHash, newTopPosition) {},
    updateUrl: false //defaults to `true`.
});
