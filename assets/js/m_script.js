$(document).ready(function() { 

/* --------------------------------------------------
 Set Up
 -------------------------------------------------- */

	// Variables
	// ------------------------------------

	var 
	btn_id,
	section_id,

	main_proj_name_id,
	main_proj_img_id,

	proj_name_id,
	proj_head_id,
	proj_img_id,
	proj_desc_id,

	proj_active = false,
	sec_active = false;


/* --------------------------------------------------
 Actions
 -------------------------------------------------- */

	// Section Selection
	// ------------------------------------

	$('#header .inner > *').click(function(event) {

		// Gather button and section id
		btn_id = event.target.id;
		sec_id = btn_id.replace('btn', 'sec');
		// Check if section is currently active
		var sec_active = (!$('#' + sec_id).hasClass('hidden')) ? true : false;	

		// Close project if open
		if (proj_active == true) {closeProject();}

		// Check if section is currently active
		if (!sec_active) {
			// Hide other sections
			$('section').not('#' + sec_id).addClass('hidden');
			// Make it active
			$('#' + sec_id).removeClass('hidden');

			// Check if main or work
			if (btn_id == 'btn_main') {
				activateMainSection();
			} else if (btn_id == 'btn_work') {
				activateWorkSection();
			}

			// Change button colours
			changeButtonColor(true);
		} else {
			// Make it hidden
			$('#' + sec_id).addClass('hidden');
			// Make main section active
			activateMainSection();

			// Revert button colours
			changeButtonColor(false);
		}

	});

	$('#main_btn_work').click(function(event) {
		// Make work section active
		activateWorkSection();
		// Change button colours
		btn_id = 'btn_work';
		changeButtonColor(true);
	});


	// Project Selection
	// ------------------------------------

	// Project Hover
	$('.proj_list_name_container > *').hover(function(event){

		projectListHover(event);
	
	}, function(){
		
		if (proj_active == false) {
			// Reset project list
			$('.proj_list_name_container > *').css('opacity', '1').css('color', '#000');;
			$('.proj_list_img_container > *').addClass('hidden');
		};

	});

	// Project Click
	$('.proj_list_name_container > *').not('#main_btn_work').click(function(event){
		// Retrieve ids 
		proj_list_name_id = event.target.id;
		proj_name_id = proj_list_name_id.replace('_list', '');
		proj_head_id = proj_name_id.replace('name', 'head');	
		proj_img_id = proj_name_id.replace('name', 'img');
		proj_desc_id = proj_name_id.replace('name', 'desc');

		// Open the project
		openProject();

		// Reset project list
		$('.proj_list_name_container > *').css('opacity', '1').css('color', '#000');
		$('.proj_list_img_container > *').addClass('hidden');
	});

	// Project Page
	// ------------------------------------

	$('#btn_proj_close').click(function() {
		closeProject();
	});


/* --------------------------------------------------
 Functions
 -------------------------------------------------- */

 	// Section Selection
	// ------------------------------------

 	function activateMainSection() {
		// Hide other sections
		// $('section').not('#' + sec_id).addClass('hidden');

		// Show main section
		$('#sec_main').removeClass('hidden');
		// Show main project list
		$('#sec_proj_list').removeClass('hidden');
		$('.proj_list_name_container > *:nth-child(n+7)').addClass('hidden');
		$('#main_btn_work').removeClass('hidden');
	}
	activateMainSection();

	function activateWorkSection() {
		// Make main & work section unhidden
		$('#sec_main').removeClass('hidden');
		// Show work project list
		$('#sec_proj_list').removeClass('hidden');
		$('.proj_list_name_container > *:nth-child(n+7)').removeClass('hidden');
		$('#main_btn_work').addClass('hidden');
	}

 	function changeButtonColor(active) {

		if (active) {
			// Change button colours
			$('#' + btn_id).not('#btn_main').css('color','#1D2088');
			$('#header .inner > *').not('#' + btn_id).css('color','#000');
		} else {
			// Revert button colours
			$('#' + btn_id).css('color','#000');
		}
	}


	// Project Selection
	// ------------------------------------

	function projectListHover(event) {
		// Retrieve ids
		proj_list_name_id = event.target.id;
		proj_list_img_id = proj_list_name_id.replace('name', 'img');

		// Focus on hovered proj_list_name 
		$('#' + proj_list_name_id).css('opacity', '1').css('color', '#1D2088');
		$('.proj_list_name_container > *').not('#' + proj_list_name_id).css('opacity', '0.2').css('color', '#000');
		// Unhide proj_list_img 
		$('#' + proj_list_img_id).removeClass('hidden');
	}

	function openProject() {
		// Unhide project section
		$('#sec_proj').removeClass('hidden');

		// Reveal project page
		$('#' + proj_head_id).removeClass('hidden');
		$('#' + proj_img_id).removeClass('hidden');
		$('#' + proj_desc_id).removeClass('hidden');
		$('#btn_proj_close').removeClass('hidden');

		// Hide main section & work section
		$('#sec_main').addClass('hidden');
		$('#sec_work').addClass('hidden');
		// Hide project menu
		$('.proj_list_name_container').addClass('hidden');

		proj_active = true;
	}

	function closeProject() {
		// Hide project section
		$('#sec_proj').addClass('hidden');

		// Hide project page children
		$('#' + proj_head_id).addClass('hidden');
		$('#' + proj_img_id).addClass('hidden');
		$('#' + proj_desc_id).addClass('hidden');
		$('#btn_proj_close').addClass('hidden');

		// Unhide work section
		$('#sec_work').removeClass('hidden');
		// Unhide project menu
		$('.proj_list_name_container').removeClass('hidden');
		// Show all project names
		$('.proj_list_name_container > *').removeClass('hidden');
		$('#main_btn_work').addClass('hidden');

		proj_active = false;
	}


});