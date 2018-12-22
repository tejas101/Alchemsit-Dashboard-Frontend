<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" ng-app="alchemistAdmin">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="Description" content="Ping Network Admin Panel" />
	<meta name="author" content="">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  	<meta name="msapplication-tap-highlight" content="no">
	<meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
	<meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
	<title>Ping Network | Dashboard</title>

	<!-- Vendor -->
	<!-- AngularJS -->
	<script src="admin/resources/scripts/lib/angular/angular.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-sanitize.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-route.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-ui.min.js"></script>
	<script src="admin/resources/scripts/lib/d3/d3.min.js"></script>
	<link rel="stylesheet" href="admin/resources/scripts/lib/d3/nv.d3.min.css">
	<script src="admin/resources/scripts/lib/d3/nv.d3.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-nvd3.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-local-storage.min.js"></script>
	<link rel="stylesheet" type="text/css" href="admin/resources/scripts/lib/angular/ng-tags-input.min.css">
	<script src="admin/resources/scripts/lib/bootstrap/js/ui-bootstrap-tpls-0.14.3.min.js"></script>
	<script src="admin/resources/scripts/lib/angular/angular-bootstrap-confirm.min.js"></script>

	<!-- JQuery -->
	<script src="admin/resources/scripts/lib/jquery/jquery-1.11.3.min.js"></script>
	
	<!-- Angular UI Grid -->
	<script src="admin/resources/scripts/lib/angular-ui-grid/ui-grid.min.js"></script>
	<link rel="stylesheet" href="admin/resources/scripts/lib/angular-ui-grid/ui-grid.min.css">
	<!-- <link rel="stylesheet" href="admin/resources/scripts/lib/angular-ui-grid/autumn.css"> -->
	<link rel="stylesheet" href="admin/resources/scripts/lib/angular-ui-grid/customizedGrid.css">
    <script src="admin/resources/scripts/lib/angular/angular-touch.js"></script>
    <script src="admin/resources/scripts/lib/angular/angular-animate.js"></script>
    <script src="admin/resources/scripts/lib/angular-ui-grid/csv.js"></script>
    <script src="admin/resources/scripts/lib/angular-ui-grid/pdfmake.js"></script>
    <script src="admin/resources/scripts/lib/angular-ui-grid/vfs_fonts.js"></script>
	
	<!--NProgress  -->
	<link rel="stylesheet" href="admin/resources/scripts/lib/nProgress/nprogress.css">
	<script src="admin/resources/scripts/lib/nProgress/nprogress.js"></script>
	
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="admin/resources/scripts/lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="admin/resources/scripts/lib/bootstrap/css/font-awesome.min.css">
	
	<!-- Latest compiled and minified JavaScript -->
	<script src="admin/resources/scripts/lib/bootstrap/js/bootstrap.min.js"></script>
	
	<!-- Material Design fonts -->
  	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
  	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  	<!-- Bootstrap Material Design -->
  	<link href="admin/resources/scripts/lib/material/css/bootstrap-material-design.css" rel="stylesheet">
  	<link href="admin/resources/scripts/lib/material/css/ripples.min.css" rel="stylesheet">
		
	<!-- App -->
	<script src="admin/resources/scripts/app/app.js"></script>
	
	<!-- Load the Constants -->
	<script src="admin/resources/scripts/app/utils/constants.js"></script>

	<!-- Load the controllers -->
	<script src="admin/resources/scripts/app/controllers/DashboardController.js"></script> 
	<script src="admin/resources/scripts/app/controllers/ChannelController.js"></script>
	<script src="admin/resources/scripts/app/controllers/ChannelStatsController.js"></script>
	<script src="admin/resources/scripts/app/controllers/DetailsController.js"></script>
	<script src="admin/resources/scripts/app/controllers/TestGridController.js"></script>
	<script src="admin/resources/scripts/app/controllers/LoginController.js"></script>
	
	<!-- Load the Services -->
	<script src="admin/resources/scripts/app/services/DashboardService.js"></script>
	<script src="admin/resources/scripts/app/services/ChannelService.js"></script>
	<script src="admin/resources/scripts/app/services/ChannelStatusService.js"></script>
	<script src="admin/resources/scripts/app/services/ChannelCategoryService.js"></script>
	<script src="admin/resources/scripts/app/services/NetworkService.js"></script>
	<script src="admin/resources/scripts/app/services/TestGridService.js"></script>
	<script src="admin/resources/scripts/app/services/LoginService.js"></script>
	
	<!-- Load the Interceptors -->
    
	<!-- Load the Utils -->
	<script src="admin/resources/scripts/app/utils/HttpCommunicationUtil.js"></script>
	
	<!-- New Materialized Theme -->
	<!-- CORE CSS-->
	<link href="admin/resources/scripts/lib/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
	<link href="admin/resources/scripts/lib/css/style.css" type="text/css" rel="stylesheet" media="screen,projection">
	
	
	<!-- Custome CSS-->    
	<link href="admin/resources/scripts/lib/css/custom/custom.css" type="text/css" rel="stylesheet" media="screen,projection">
	
	<!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
	<link href="admin/resources/scripts/lib/js/plugins/prism/prism.css" type="text/css" rel="stylesheet" media="screen,projection">
	<link href="admin/resources/scripts/lib/js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
	<link href="admin/resources/scripts/lib/js/plugins/jvectormap/jquery-jvectormap.css" type="text/css" rel="stylesheet" media="screen,projection">
	<link href="admin/resources/scripts/lib/js/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">

	<!--jsgrid css-->
	<link href="admin/resources/scripts/lib/js/plugins/jsgrid/css/jsgrid.min.css" type="text/css" rel="stylesheet" media="screen,projection">
	<link href="admin/resources/scripts/lib/js/plugins/jsgrid/css/jsgrid-theme.min.css" type="text/css" rel="stylesheet" media="screen,projection">
</head>
<body>
	<!-- Start Page Loading -->
	<div id="loader-wrapper">
	    <div id="loader"></div>        
	    <div class="loader-section section-left"></div>
	    <div class="loader-section section-right"></div>
	</div>
	<!-- End Page Loading -->
	<!-- //////////////////////////////////////////////////////////////////////////// -->
	<!-- START HEADER -->
	<header id="header" class="page-topbar">
	     <!-- start header nav-->
	     <div class="navbar-fixed" ng-controller="RootController">
	         <nav class="navbar-color">
	             <div class="nav-wrapper">             
	                 <ul class="left">                      
	                 	<li>
	                   		<h1 class="logo-wrapper">
	                   			<a class="brand-logo darken-1">
	                   				<img src="admin/resources/images/ping-network-logo.png" alt="Logo" style="float:left;width:100px;margin-top:-4px;height:45px;" ng-show="isNavActive('/')">
	                   				<img src="{{logoURL}}" alt="Logo" style="float:left;width:100px;margin-top:-5px;height:45px;" ng-hide="isNavActive('/')">
	                   			</a>
	                   			<span class="logo-text">Ping-Network</span>
	                   		</h1>
	                   	</li>
	                 </ul>
	                 <div class="header-search-wrapper hide-on-med-and-down" ng-controller="RootController"></div>
	                 <ul class="right hide-on-med-and-down">
	                     <!-- <li><a href="javascript:void(0);" class="waves-effect waves-block waves-light toggle-fullscreen"><i class="mdi-action-settings-overscan"></i></a>
	                     </li> -->
	                     <p ng-hide="isNavActive('/')"><b>{{networkName}}&nbsp;&nbsp;&nbsp;&nbsp;</b></p>
	                 </ul>
	                 
	             </div>
	         </nav>
	     </div>
		<!-- end header nav-->
	</header>
	<!-- END HEADER -->
	<!-- //////////////////////////////////////////////////////////////////////////// -->
	<!-- START MAIN -->
	<div id="main">
	  	<!-- START WRAPPER -->
		<div class="wrapper" ng-controller="RootController" >
		  	<!-- START LEFT SIDEBAR NAV-->
			<aside id="left-sidebar-nav">
				 <ul id="slide-out" class="side-nav fixed leftside-navigation" ng-hide="isNavActive('/')">
				     <li  ng-class="{ active: isNavActive('/dashboard')}"><a href="#/dashboard" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a>
				     </li>
				     <li  ng-class="{ active: isNavActive('/channels')}"><a href="#/channels" class="waves-effect waves-cyan"><i class="fa fa-list-alt"></i></i> Channels</a>
				     </li>
				     <li  ng-class="{ active: isNavActive('/channel-stats')}"><a href="#/channel-stats" class="waves-effect waves-cyan"><i class="fa fa-pie-chart"></i> Channel Stats</a>
				     </li>
				     <li  ng-class="{ active: isNavActive('/details')}"><a href="#/details" class="waves-effect waves-cyan"><i class="fa fa-info-circle"></i></i> Details</a>
				     </li>
				     <li  ng-class="{ active: isNavActive('/testGrid')}"><a href="#/testGrid" class="waves-effect waves-cyan"><i class="fa fa-info-circle"></i></i> Test-Grid</a>
				     </li>
					 <li ng-class="{ active: isNavActive('/')}"><a href="#/" ><i class="fa fa-sign-out"></i>Log out</a>
					 </li>
				 </ul>
			</aside>
		  	<!-- START CONTENT -->
		  	<section id="content">
			    <!--start container-->
			    <div class="container" ng-controller="RootController">
					<div class="section">
						<ng-view></ng-view>
						<div id="jsgrid" class="section" ng-show="isNavActive('/testGrid')">
						<!--Static Data-->
							<div class="row" >
							      	<div id="jsGrid-static"></div>
							</div>
							<div class="divider"></div>
						</div>
			        	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			       	</div>
			    </div>
			    <!--end container-->
		  	</section>
		  <!-- END CONTENT -->
		  <!-- //////////////////////////////////////////////////////////////////////////// -->
		</div>
		<!-- END WRAPPER -->
	</div>
	<!-- END MAIN -->
	<!-- //////////////////////////////////////////////////////////////////////////// -->
	<!-- START FOOTER -->
	<footer class="page-footer">
		<div class="footer-copyright">
		    <div class="container">
			    <span class="right">Copyright © 2016 <a class="grey-text text-lighten-4" href="http://www.pingnetwork.in/" target="_blank">Ping-Network</a> All rights reserved.</span>
			    
		    </div>
		</div>
	</footer>
	<!-- END FOOTER -->
	<!-- //////////////////////////////////////////////////////////////////////////// -->
    <!-- ================================================
    Scripts
    ================================================ -->
    <!--materialize js-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/materialize.js"></script>
    <!--prism
    <script type="text/javascript" src="admin/resources/scripts/lib/js/prism/prism.js"></script>-->
    <!--scrollbar-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <!-- chartist -->
    <!-- <script type="text/javascript" src="js/plugins/chartist-js/chartist.min.js"></script> -->   
    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/plugins.js"></script>
    <!--custom-script.js - Add your own theme custom JS-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/custom-script.js"></script>
    
     <!--jsgrid-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/plugins/jsgrid/js/db.js"></script> <!--data-->
    <script type="text/javascript" src="admin/resources/scripts/lib/js/plugins/jsgrid/js/jsgrid.min.js"></script>
    <script type="text/javascript" src="admin/resources/scripts/lib/js/plugins/jsgrid/js/jsgrid-script.js"></script>
    
</body>
</html>