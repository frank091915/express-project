require.config({
	baseUrl: "/",
	paths: {
		jquery: "/lib/jquery/jquery-1.12.4.min",
		bootstrap: "/lib/bootstrap/js/bootstrap.min",
		swiper: "/lib/swiper/js/swiper.min",
		nav:"/js/component/nav",
		signOutModal:"/js/component/signOutModal",
		signInModal:"/js/component/signInModal"
	},
	shim: {
		bootstrap: {
			deps: ["jquery"]
		}
	}
});