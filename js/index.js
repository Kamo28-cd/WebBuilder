	
	$(document).ready(function(){


//******************* Logo Start *******************
		   $.ajax({
						
			type:"GET",
			cache:false,
			url:"api/logo",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r)
			if (r.logo_type == "text") {
				$('.cmsLogo').html('<a class="navbar-brand" href="index.html" style="font-family:'+r.font+'">'+r.logo+'</a>')
				//$('.cmsImgLogo').hide()
			} else if (r.logo_type == "image") {
				$('.cmsLogo').html('<img class="imgLogo"  src="'+r.image+'">')
				//$('.cmsLogo').hide()
			} else if (r.logo_type == "both") {
				$('.cmsLogo').html('<a class="navbar-brand" href="index.html" style="font-family:'+r.font+'">'+r.logo+'</a><img class="imgLogo"  src="'+r.image+'">')
			}
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Logo End *******************



//******************* Banner Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/banner",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r.img_path)
				$('.cmsBanner').html('<div class="bg-overlay"><div class="container"><div class="row"><div class="col-md-12"><div class="banner-text"><h2 class="cmsBannerH2">'+r.banner_h2+'</h2><p class="cmsBannerP">'+r.banner_p+'</p><a href="#work" class="banner-button">Learn More</a> </div></div></div></div></div>')
				banner = document.getElementById('banner');
				//banner = document.querySelector('.cmsBanner')
				banner.style.backgroundImage = 'url(./'+r.img_path+')';
				
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Banner End *******************


//******************* Services Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/services",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r)
				$('.cmsServicesH4_1').html(''+r.service1_h4+'')
				$('.cmsServicesH4_2').html(''+r.service2_h4+'')
				$('.cmsServicesH4_3').html(''+r.service3_h4+'')

				$('.cmsServicesP_1').html(''+r.service1_p+'')
				$('.cmsServicesP_2').html(''+r.service2_p+'')
				$('.cmsServicesP_3').html(''+r.service3_p+'')
				
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Services End *******************


//******************* Work Start *******************
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
					$('.cmsWork').html(
					$('.cmsWork').html() +'<div class="col-md-6 col-sm-6" data-workid="'+r[i].id+'"><div class="portfolio-item "><a href="'+r[i].link+'"><img class="img-portfolio img-responsive" src="'+r[i].img+'"></a></div></div>')
					
				}
				
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Work End *******************

		
//******************* Testimonials Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/testimonials",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r)
				for (i=0; i<r.length; i++) {
					$('.cmsTestimonials').html(
					$('.cmsTestimonials').html() +'<div class="item"><p class="cmsTestimonialP"><sup><i class="fa fa-quote-left"></i></sup>'+r[i].testimonial+'<sup><i class="fa fa-quote-right"></i></sup></p><div class="test-img"><img class="cmsTestimonialImg" src="'+r[i].image+'"/><p><strong class="cmsTestimonialName">'+r[i].writer+'</strong></p></div></div>')
					 
				}
			$("#owl-demo").owlCarousel({
     
          			navigation : false, // Show next and prev buttons
          			slideSpeed : 500,
		  		autoPlay : 3000,
          			paginationSpeed : 400,
          			singleItem:true
				
          			// "singleItem:true" is a shortcut for:
          			// items : 1, 
          			// itemsDesktop : false,
          			// itemsDesktopSmall : false,
          			// itemsTablet: false,
          			// itemsMobile : false
     
      			});
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Testimonials End *******************


//******************* About Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/about",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r.clients)
				
				$('.cmsAbout').html(
				$('.cmsAbout').html() +'<div class="about-text "><p>'+r.about_p1+'</p><p>'+r.about_p2+'</p></div>')
					
				$('.cmsAboutClients').html('<h5>Our Clients</h5><div class="timer" data-from="0" data-to="'+r.clients+'" data-speed="3000" data-refresh-interval="50"></div>')
				$('.cmsAboutProjects').html('<h5>Projects completed</h5><div class="timer" data-from="0" data-to="'+r.projects+'" data-speed="3000" data-refresh-interval="50"></div>')
				

				$('#testimonials').waypoint(function() {
    					$('.timer').each(count);
				});

				 function count(options) {
        				var $this = $(this);
        				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        				$this.countTo(options);
      				}
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* About End *******************


//******************* Contact Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/contact",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r.clients)
				
				
				$('.cmsContact').html('<h4>Address</h4><p>'+r.address+'<br><div class="email"><i class="fa fa-at"></i>'+r.email+'<br><i class="fa fa-mobile"></i>'+r.phone+'</div></p>')
					
				
				

				
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Contact End *******************	


//******************* Social Start *******************
		$.ajax({
						
			type:"GET",
			cache:false,
			url:"api/social",
			processData:false,
			contentType:"application/json",
			data:  '',
			success: function(r) {
								    
			r = JSON.parse(r)
			//console.log(r.clients)
			for (i=0; i<r.length; i++) {
				if (r[i].type == "facebook") {	
					$('.cmsSocial').html(
					$('.cmsSocial').html() +'<li><a href="'+r[i].social_link+'"><i class="fa fa-facebook"></i></a></li>')
				} else if (r[i].type == "twitter") {
					$('.cmsSocial').html(
					$('.cmsSocial').html() +'<li><a href="'+r[i].social_link+'"><i class="fa fa-twitter"></i></a></li>')
				} else if (r[i].type == "instagram") {
					$('.cmsSocial').html(
					$('.cmsSocial').html() +'<li><a href="'+r[i].social_link+'"><i class="fa fa-instagram"></i></a></li>')
				} else if (r[i].type == "linkedin") {
					$('.cmsSocial').html(
					$('.cmsSocial').html() +'<li><a href="'+r[i].social_link+'"><i class="fa fa-linkedin"></i></a></li>')		
				} else if (r[i].type == "buble") {
					$('.cmsSocial').html(
					$('.cmsSocial').html() +'<li><a href="'+r[i].social_link+'"><img src="images/buble-white.png" class="buble"></a></li>')
				}
					
			}	
				

				
			},
			error: function(r) {
			console.log(r)
			}
		   });
//******************* Social End *******************		   
	});

