window.onload = function() {

	// Create array containing all the image sources
	var imgSrc = new Array ();
	imgSrc[0] = "images/opsy.jpg";
	imgSrc[1] = "images/opsy2.jpg";
	imgSrc[2] = "images/opsy3.jpg";
	imgSrc[3] = "images/rosemarry1.jpg";

	// Get random number between 0 and the size of the array
	var size = imgSrc.length;
	var x = Math.floor(size*Math.random());

	// Make source corresponding to the random number the image source
	$("#rand_img").attr('src',imgSrc[x]);
	
};