//business logic stuff for a particular module
var ExampleModule = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

ExampleModule.prototype.examplePrototype = function() {
  return `this is an example prototype method`;
};

exports.exampleModule = ExampleModule;


$(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.menu').fadeToggle(800);
	})
})();
