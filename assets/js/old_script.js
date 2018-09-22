	
	// Section Selection
	// ------------------------------------

	$('#header .inner > *').click(function(event) {

		// Gather button and section id
		btn_id = event.target.id;
		sec_id = btn_id.replace('btn', 'sec');

		secMainCheck();

		// Work and main is active from the beginning.
		// If on main section, work is unhidden. 
		// If on work section, main is hidden.


		// If 'work' clicked & project is open, close project
		if (sec_id == 'sec_work' && proj_active) {
			closeProject();
		} else {

			// Close project if acitve
			if (proj_active) { closeProject();}

			// Toggle section visibility
			$('#' + sec_id).toggleClass('hidden');
			
			if (!$('#' + sec_id).hasClass('hidden')) {

				// Change button colour to #1D2088 (apart from main section)
				$('#' + btn_id).not('#btn_main').css('color','#1D2088');

				// If clicked section is visible, hide other sections
				$('section').not('#' + sec_id).addClass('hidden');
				$('#header .inner > *').not('#' + btn_id).css('color','#000');
			} else {

				// Revert button colour to black
				$('#' + btn_id).css('color','#000');

				// If clicked section is hidden, show main section
				$('#sec_main').removeClass('hidden');
			}
		}

	});



	// Main Section Project Selection
	// ------------------------------------

	// Main Section Project Hover
	$('.main_proj_list_container > *').hover(function(event){

		projectHover(event);
	
	}, function(){

		//  reset opacity of names and visibility of images
		$('.main_proj_list_container > *').css('opacity', '1').css('color', '#000');
		$('.main_proj_img_container > *').addClass('hidden');

	});


	// Main Section Project Click
	$('.main_proj_list_container > *').click(function(event){

		// Retrieve id
		main_proj_name_id = event.target.id;

		// If the label clicked is not '...'
		if (main_proj_name_id != 'main_btn_work') {
			
			// Retrieve other ids 
			proj_name_id = main_proj_name_id.replace('main_', '');
			proj_head_id = proj_name_id.replace('name', 'head');	
			proj_img_id = proj_name_id.replace('name', 'img');
			proj_desc_id = proj_name_id.replace('name', 'desc');
			
			// Open the project
			openProject();
		}

		// Reset project menu list opacity
		$('.proj_list_container > *').css('opacity', '1').css('color', '#000');;

		// Close main section
		$('#sec_main').toggleClass('hidden');
		// Open work section
		$('#sec_work').toggleClass('hidden');
		
	});