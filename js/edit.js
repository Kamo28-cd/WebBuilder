//******************* Edit Text Start *******************

function editText(textVar) {
	textVal = $('#'+textVar+'').val();
	textDir = $(this).attr('data-dir');
	action = $(this).attr('data-action');
	$.ajax({
						
			type:"POST",
			cache:false,
			url:"api/"+textDir+"",
			processData:false,
			contentType:"application/json",
			data:  '{"text_val":"'+textVal+'"}',
			success: function(r) {
			
			console.log(r)
			load_preview()
			
			},
			error: function(r) {
			console.log(r)
			}
		   });

}

//******************* Edit Text End *******************


//******************* Logo Start *******************
$(document).on('click','.cms_editlogo', function() {
	if ($(this).attr('data-edit') =='text') {
		logoType = 'text';
		imagelogo = '';
		logoId = $(this).attr('data-myid');
		console.log(logoId)
		editLogo(logoId, logoType, imagelogo)
	} else if ($(this).attr('data-edit') =='image') {
		logoType = 'image';
		textlogo = '';
		logoId = $(this).attr('data-myid');
		editLogo(logoId, logoType, textlogo)
	} else if ($(this).attr('data-edit') =='both') {
		logotype = 'both';
	}
})

	function editLogo(logoid, logotype, variable) {
		variable = variable || 0;

		if (logotype == 'text') {
			imageVar = variable;
			//textVar = $('#'+logoid+'').val();
			textVar = $('#cms-textlogo-mobile').val();
		} else if (logotype == 'image' ) {
			textVar = variable;
			//imageVar = $('#'+logoid+'').val();
		} else if (logotype == 'both') {
			imageVar = $('#cms-imagelogo').val();
			if ($('#cms-textlogo').val() != '') {
				textVar = $('#cms-textlogo').val();
			} else if ($('#cms-textlogo-mobile').val() != '') {
				textVar = $('#cms-textlogo-mobile').val();
			}
		}
		   $.ajax({
						
			type:"POST",
			cache:false,
			url:"api/logo",
			processData:false,
			contentType:"application/json",
			data:  '{"text_logo":"'+textVar+'","image_logo":"'+imageVar+'","logo_type":"'+logotype+'"}',
			success: function(r) {
			
			console.log(r)
			load_preview()
			
			},
			error: function(r) {
			console.log(r)
			}
		   });
	}

//******************* Logo End *******************

//******************* Background Start *******************
$(document).on('click','.cms_editbg', function() {
	
	if ($(this).attr('data-edit') =='image') {
		logoType = 'image';
		textlogo = '';
		logoId = $(this).attr('data-myid');
		editBg()
	}

	function editBg() {
		 $.ajax({
						
			type:"POST",
			cache:false,
			url:"api/banner",
			processData:false,
			contentType:"application/json",
			data:  '{"image_bg":"'+imageVar+'"}',
			success: function(r) {
			
			console.log(r)
			load_preview()
			
			},
			error: function(r) {
			console.log(r)
			}
		   });

	}
})
//******************* Background End *******************

//******************* Testimonial Start *******************
$(document).on('click','.testiThumb', function() {
	testiId = $(this).attr('data-testiid');
	document.getElementById("editprofilecv").style.width = "0";
	$('#small-dialog-delete').fadeIn('slow')
	//$('#mymodal-bg').fadeIn('slow')
		
	document.querySelector('#small-dialog-delete').innerHTML = `
			
			<div class="query" style="top:18%;position:relative; display:block; margin:auto; padding:5px"><h4 style="text-align:center">What would you like to do?</h4></div>	
			

			

			<div class="croppie-Btns action-Btns">
				<div class="upload-Btn-invert editTestimonial" data-action="edit" data-testiid=${testiId} style=""><div    ><i class=" icon-sli-note icon1-5x text-lightened-blue" style=""></i> Edit</div></div>
				<div class="upload-Btn editTestimonial" data-action="delete" data-testiid=${testiId} style=""><div    ><i class=" icon-sli-trash icon1-5x text-lightened-blue" style=""></i> Delete</div></div>
	
				
			</div>`;

		
})
$(document).on('click','.editTestimonial', function() {
	testiId = $(this).attr('data-testiid');
	document.getElementById("editprofilecv").style.width = "0";


	//remember to pass data-testiid into the html of the .editwork DOM in index.js

	if ($(this).attr('data-action') =='edit') {
		
		
		//cms_Class = 'cms_editTestimonial';
		cms_Class = 'Testimonial';
		$('#small-dialog-delete').fadeOut('slow')
		openSmallDialogText(cms_Class)
		
	} else if ($(this).attr('data-action') =='insert') {
		
		//testiAction = $(this).attr('data-action')
		cms_Class = 'Testimonial';
		$('#small-dialog-delete').fadeOut('slow')
		openSmallDialogText(cms_Class)

	} else if ($(this).attr('data-action') =='delete') {
		//workId = 0;
		$('#small-dialog-delete').fadeIn('slow')
		$('#mymodal-bg').fadeIn('slow')
		
		document.querySelector('#small-dialog-delete').innerHTML = `
			
			<div class="query" style="top:18%;position:relative; display:block; margin:auto; padding:5px"><h4 style="text-align:center">Are you sure you want to delete this item? It cannot be recovered once deleted</h4></div>	
			

			

			<div class="croppie-Btns action-Btns">
				<div class="upload-Btn-invert cms_editTestimonial" data-action="cancel" data-workid="0" style=""><div><i class=" icon-sli-action-undo icon1-5x text-lightened-blue" style=""></i> Cancel</div></div>
				<div class="upload-Btn cms_editTestimonial" data-action="delete" data-workid="0" style=""><div><i class=" icon-sli-trash icon1-5x text-lightened-blue" style=""></i> Delete</div></div>
				
	
				
			</div>`;

		setTimeout(function() {
			$('#delete-btn').attr('data-workid='+workId+'')
		},500)
	}
})

$(document).on('click','.cms_editTestimonial', function() {
	testiAction = $(this).attr('data-action');
	editTestimonial(testiAction)


});

function editTestimonial(testiAction) {
	//testimonial
	textVal = $('#testiVar').val();
	
	//testimonial author name

	textName = $('#testiName').val();;

	//testiAction = $(this).attr('data-action');
	$.ajax({
						
			type:"POST",
			cache:false,
			url:"api/testimonials",
			processData:false,
			contentType:"application/json",
			data:  '{"text_val":"'+textVal+'"}',
			success: function(r) {
			
			console.log(r)
			load_preview()
			
			},
			error: function(r) {
			console.log(r)
			}
		   });

}
//******************* Testimonial End *******************

//******************* Work Start *******************
$(document).on('click','.workThumb', function() {
	workId = $(this).attr('data-workid');
	document.getElementById("editprofilecv").style.width = "0";
	$('#small-dialog-delete').fadeIn('slow')
	//$('#mymodal-bg').fadeIn('slow')
		
	document.querySelector('#small-dialog-delete').innerHTML = `
			
			<div class="query" style="top:18%;position:relative; display:block; margin:auto; padding:5px"><h4 style="text-align:center">What would you like to do?</h4></div>	
			

			

			<div class="croppie-Btns action-Btns">
				<div class="upload-Btn-invert editwork" data-action="edit" data-u="work" data-workid=${workId} style=""><div    ><i class=" icon-sli-note icon1-5x text-lightened-blue" style=""></i> Edit</div></div>
				<div class="upload-Btn editwork" data-action="delete" data-workid=${workId} style=""><div    ><i class=" icon-sli-trash icon1-5x text-lightened-blue" style=""></i> Delete</div></div>
	
				
			</div>`;

		setTimeout(function() {
			//$('#delete-btn').attr('data-workid='+workId+'')
		},500)
})
$(document).on('click','.editwork', function() {
	workId = $(this).attr('data-workid');
	document.getElementById("editprofilecv").style.width = "0";


	//remember to pass data-workid into the html of the .editwork DOM in index.js

	if ($(this).attr('data-action') =='edit') {
		//workId = $(this).attr('data-workid');
		
		workAction = $(this).attr('data-action')
		//console.log(workAction)
		$('#small-dialog-delete').fadeOut('slow')
		openSmallDialog()
		img_Type = $(this).attr('data-u');
		console.log(img_Type)
		cropImage(''+img_Type+'');
	} else if ($(this).attr('data-action') =='insert') {
		//workId = 0;
		workAction = $(this).attr('data-action')
		openSmallDialog()
		img_Type = $(this).attr('data-u');
		cropImage(''+img_Type+'');
	} else if ($(this).attr('data-action') =='delete') {
		//workId = 0;
		$('#small-dialog-delete').fadeIn('slow')
		$('#mymodal-bg').fadeIn('slow')
		
		document.querySelector('#small-dialog-delete').innerHTML = `
			
			<div class="query" style="top:18%;position:relative; display:block; margin:auto; padding:5px"><h4 style="text-align:center">Are you sure you want to delete this item? It cannot be recovered once deleted</h4></div>	
			

			

			<div class="croppie-Btns action-Btns">
				<div class="upload-Btn-invert cms_editwork" data-action="cancel" data-workid="0" style=""><div><i class=" icon-sli-action-undo icon1-5x text-lightened-blue" style=""></i> Cancel</div></div>
				<div class="upload-Btn cms_editwork" data-action="delete" data-workid="0" style=""><div><i class=" icon-sli-trash icon1-5x text-lightened-blue" style=""></i> Delete</div></div>
				
	
				
			</div>`;

		setTimeout(function() {
			$('#delete-btn').attr('data-workid='+workId+'')
		},500)
	}
})

$(document).on('click','.cms_editwork', function() {
	if ($(this).attr('data-action') =='edit') {
		workAction = $(this).attr('data-action')
		//workId = $(this).attr('data-workid');
		editWork(workAction,workId)
	} else if ($(this).attr('data-action') =='insert') {
		//workAction = $(this).attr('data-action')
		//workId = 0;
		editWork(workAction,workId)
	} else if ($(this).attr('data-action') =='delete') {
		workAction = $(this).attr('data-action')
		//workId = 0;
		imageVar = '';
		editWork(workAction,workId)
	} else if ($(this).attr('data-action') =='cancel') { 
		$('#mymodal-bg').fadeOut('slow')
		$('#small-dialog-delete').fadeOut('slow')
	}
	
	

	function editWork(workAction,workId) {
		 $.ajax({
						
			type:"POST",
			cache:false,
			url:"api/work",
			processData:false,
			contentType:"application/json",
			data:  '{"image":"'+imageVar+'","action":"'+workAction+'","workid":"'+workId+'","link":"'+$('[data-worklink]').val()+'"}',
			success: function(r) {
			
			console.log(r)
			load_preview()
			
			},
			error: function(r) {
			console.log(r)
			}
		   });

	}

})
//******************* Work Get Request Start *******************
	$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/work",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r)
				for (i=0; i<r.length; i++) {
					$('.cms_WorkBoxes').html(
					$('.cms_WorkBoxes').html() +'<div class="cms-addWork workThumb" data-workid="'+r[i].id+'" data-u="work" style="background:url(./'+r[i].img+')" ><div class="overlay"></div><i class="icon icon-sli-picture" style="color:white;z-index:10"></i></div>')
					
				}
				
			},
			error: function(r) {
			console.log(r)
			}
		   });

//******************* Work Get Request End *******************
//******************* Work End *******************
function cropImage(imgType) {
<!--crop image code start
//********************logo
				if (imgType == 'logo') {
				$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:200,
						height:200,
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:250,
						height:250,
						},
				
				});
				$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#close-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" icon-sli-camera icon1-5x text-lightened-blue" style=""></i></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				//height was 600
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editlogo" data-edit="image" data-myid="cms-imagelogo" style=""> <span> Save</span></div>')

					$('#close-croppie').fadeOut('slow')
						
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:250,height:250},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    	cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
									

									//change sendnewpost 
									$('#sendnewpost').click(function(event){
										if(IMAGEDATA!=""){
									$.ajax({
							 
							 type: "POST",
							 cache:false,
							 url: "api/createpost",
							 processData: false,
							 contentType:"application/json",
							 data: '{"body": "'+ $("#newpostbody").val()+'", "poster": "'+USERID+'","imgpost":"'+IMAGEDATA+'"}',
							 success: function(r) {
								//console.log(r) 
								newimagepostadded = "Success: you have posted a new image";
								<!--location.reload()
								alertFunction("success",newimagepostadded);
								$('#mymodal-bg').delay(1000).fadeOut('slow');
								$('#small-dialog-post').delay(1000).fadeOut('slow');
								document.getElementById('newpostbody').value = "";
							 }
									});
										}
									})
									
									}
								
								});
							})
					});

//********************work
				} else if (imgType == 'work') {
					document.getElementById('image_demo').style.width = '375px';
					document.getElementById('image_demo').style.height = '250px';
					$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:300,
						height:200,
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:375,
						height:250,
						},
				
					});

					$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#close-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" icon-sli-camera icon1-5x text-lightened-blue" style=""></i></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				//height was 600
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editwork" data-action="'+workAction+'" data-edit="image" data-myid="cms-imagelogo" style=""> <span> Save</span></div>')

					$('#close-croppie').fadeOut('slow')
					$('.var_input').fadeIn('slow')	
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:375,height:250},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    	cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
									

									//change sendnewpost 
									$('#sendnewpost').click(function(event){
										if(IMAGEDATA!=""){
									$.ajax({
							 
							 type: "POST",
							 cache:false,
							 url: "api/createpost",
							 processData: false,
							 contentType:"application/json",
							 data: '{"body": "'+ $("#newpostbody").val()+'", "poster": "'+USERID+'","imgpost":"'+IMAGEDATA+'"}',
							 success: function(r) {
								//console.log(r) 
								newimagepostadded = "Success: you have posted a new image";
								<!--location.reload()
								alertFunction("success",newimagepostadded);
								$('#mymodal-bg').delay(1000).fadeOut('slow');
								$('#small-dialog-post').delay(1000).fadeOut('slow');
								document.getElementById('newpostbody').value = "";
							 }
									});
										}
									})
									
									}
								
								});
							})
					});
//********************background
				} else if (imgType == 'background') {
					document.getElementById('image_demo').style.width = '445px';
					document.getElementById('image_demo').style.height = '250px';
					$image_crop = $('#image_demo').croppie({
					enableExif:true,
					viewport: {  //this defines part of cropped image that will be visible after being cropped
						width:356,
						height:200,
						type: 'square' //or can use circle height was 200
						},
					boundary: {  //this defines outer edges that will be cropped out
						width:445,
						height:250,
						},
				
					});

					$('#upload_image').on('change', function(){
					
					var reader = new FileReader();
					reader.onload = function(event) {
						$image_crop.croppie('bind', {
							url:event.target.result
							
						}).then(function(){
							//console.log("jQuery bind complete");
						});	
					}
					reader.readAsDataURL(this.files[0]);
					$('#image_demo').fadeIn('slow');
					if (document.querySelector('.cr-image').style.display == 'none') {
						$('.cr-image').show()
					}
					$('#crop_btn').fadeIn('slow');
					$('.toggleSave').html('<div class="crop_image crop_save badge2invert fa fa-crop" id="crop_btn" style=""> <span> Crop</span></div>')
					});
				$('#close-croppie').click(function() {
					
					$('#upload_image').val("")
					$('.cr-image').hide()
					
					//$image_crop.croppie('destroy')
					$('.toggleSave').html('<label for="upload_image"><i class=" icon-sli-camera icon1-5x text-lightened-blue" style=""></i></label>')
					//console.log('hello')
				})
				var formname = document.getElementById('upload_image').name;
				//height was 600
				
				$(document).on('click', '.crop_image', function(){
				//crop_imageBtn = document.querySelector('.crop_image')
				//crop_imageBtn.addEventListener('click', function() {
					//document.querySelector('.crop_image').stopPropagation();
					$('.toggleSave').html('<div class="crop_save badge2invert fa fa-save cms_editbg" data-edit="image" data-myid="cms-imagelogo" style=""> <span> Save</span></div>')

					$('#close-croppie').fadeOut('slow')
						
					$image_crop.croppie('result', {
							type: "canvas",
							size:{width:445,height:250},//canvas, boundary and #image_demo should be the same size
							quality:1,
						}).then(function(response){
							
							$.ajax({
							    	cache:false,
								url:"api/upload?formname="+formname,
								type:"POST",
								data: {"image":response},
								success: function(data) {
									$('#uploaded_image').html('<img src="'+data+'"class="upload_img-dialog center"style="" id="upload_img-dialog"/>');
									$('#image_demo').hide();
									$('#crop_btn').hide();
									IMAGEDATA = data;
									newimagepostadded = "not yet";
									imageVar = IMAGEDATA;
									

									//change sendnewpost 
									$('#sendnewpost').click(function(event){
										if(IMAGEDATA!=""){
									$.ajax({
							 
							 type: "POST",
							 cache:false,
							 url: "api/createpost",
							 processData: false,
							 contentType:"application/json",
							 data: '{"body": "'+ $("#newpostbody").val()+'", "poster": "'+USERID+'","imgpost":"'+IMAGEDATA+'"}',
							 success: function(r) {
								//console.log(r) 
								newimagepostadded = "Success: you have posted a new image";
								<!--location.reload()
								alertFunction("success",newimagepostadded);
								$('#mymodal-bg').delay(1000).fadeOut('slow');
								$('#small-dialog-post').delay(1000).fadeOut('slow');
								document.getElementById('newpostbody').value = "";
							 }
									});
										}
									})
									
									}
								
								});
							})
					});
				}
				
<!--crop image code end
}