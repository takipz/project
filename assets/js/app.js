var mmLevel = 0;

var contactFormSubmit = function() {

	document.getElementById("contact-form").submit();

	return true;

}


var backMMenu = function(el) {

	if(mmLevel == 0)return mobileMenuClose();

	mmLevel--;

	var sb = $(el).parents('.mobile-sidebar');

	$(sb).find('.content').scrollTop(0,0);

	if(mmLevel > 0)$(sb).addClass('level'+mmLevel);

	if(mmLevel == 0)$(sb).removeClass('level1 level2 level3');
	else if(mmLevel == 1)$(sb).removeClass('level2 level3');
	else if(mmLevel == 2)$(sb).removeClass('level1 level3');
	else if(mmLevel == 3)$(sb).removeClass('level1 level2');


};

var expandMMenu = function(el) {

	var sb = $(el).parents('.mobile-sidebar');

	$(sb).find('.content').scrollTop(0,0);

	mmLevel++;

	var li = $(el).parent('li');

	$(li).parent('ul').find('li').removeClass('active');

	$(li).addClass('active');

	$(sb).addClass('level'+mmLevel);

	if(mmLevel == 1)$(sb).removeClass('level2 level3');
	else if(mmLevel == 2)$(sb).removeClass('level1 level3');
	else if(mmLevel == 3)$(sb).removeClass('level1 level2');

};

var mobileMenuOpen = function(id) {

	$('#'+id).addClass('open');

	$(document.body).addClass("overlay");

	return false;

};


var mobileMenuClose = function() {

	mmLevel = 0;

	$(document.body).find('.mobile-sidebar').each(function(index, sb) {

		if($(sb).hasClass('open')) {

			$(sb).find('.content').scrollTop(0,0);

			$(sb).find('.active').removeClass('active');

			$(sb).removeClass('level1 level2 level3');

			$(sb).removeClass('open');

		}

	});

	$(document.body).removeClass("overlay");

	return false;
};



var buildMenu = function() {

	$('#body-overlay').on('click touchmove touchstart', function() {

		return mobileMenuClose();

	});


	$(document.body)[($(window).scrollTop() >= 80 ? 'add' : 'remove') + 'Class']('fixed');

	$(window).on('scroll touchmove', function() {

		$(document.body)[($(window).scrollTop() >= 80 ? 'add' : 'remove') + 'Class']('fixed');

	});

};


$(document).ready(function() {

	buildMenu();

});