<?php 

Route::set('signout', function() {
	
	SignOut::CreateView('SignOut');
});
Route::set('signin', function() {
		SignIn::CreateView('SignIn');
});
$variable = '';
Route::set($variable, function() {
	if (Login::isLoggedIn()) {
		echo 'logged in';
		Dashboard::CreateView('Dashboard');
	
		
	} else {
		SignIn::CreateView('SignIn');
		//echo 'not logged in';
	}
});

Route::set('dashboard', function() {
	
	if (Login::isLoggedIn()) {
		//$userid = Login::isLoggedIn();
		//echo 'logged in';
		//echo $userid;
		Dashboard::CreateView('Dashboard');
	
		
	} else {
		SignIn::CreateView('SignIn');
		//echo 'not logged in';
		//$userid = Login::isLoggedIn();
		
		//echo $userid;
	}
		
});

Route::set('home', function() {
	
	Index::CreateView('Index');
	
		
});

Route::set('forgot-password', function() {
		ForgotPassword::CreateView('ForgotPassword');
});

Route::set('change-password', function() {
		
		ChangePassword::CreateView('ChangePassword');
});

Route::set('posts', function() {
		
		Posts::CreateView('Posts');
});

Route::set('site-preview', function() {
		
		SitePreview::CreateView('SitePreview');
});

?>