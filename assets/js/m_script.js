$(document).ready(function() { 

/* --------------------------------------------------
 Set Up
 -------------------------------------------------- */

 	/* Mobile Detection
	-------------------------------------------------- */
	var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true; 

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

		// Make sure main button is visible
		$('#btn_main').removeClass('hidden');

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

		// If on about section hide the btn_main ("Mamoru Watanabe")
		if (btn_id == 'btn_about') {
			if (!sec_active) {
				$('#btn_main').addClass('hidden');
			} else {
				$('#btn_main').removeClass('hidden');
			}
		}

	});

	// Getting to work by clicking "..." on main
	$('#main_btn_work').click(function(event) {
		// Hide other sections
		$('section').not('#sec_work').addClass('hidden');
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

		if (!isMobile) {
			projectListHover(event);
		};
	
	}, function(){
		
		if (!isMobile) {
			if (proj_active == false) {
				// Reset project list
				$('.proj_list_name_container > *').css('opacity', '1').css('color', '#000');;
				$('.proj_list_img_container > *').addClass('hidden');
			};
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
		$('#sec_work').removeClass('hidden');
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