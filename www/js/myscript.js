function displayerror(jqXHR,exception){
	 var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        return msg;
}
function userlogin(){
	var mobile= $('#L_Mobile').val();
	var password = $('#L_Password').val();
	if(mobile.length!=10){
		$("#loginerrror").html("Enter Valid 10 Digit Mobile Number");
		alert("Enter Valid 10 Digit Mobile Number");
	}else if(password.length<4){
		$("#loginerrror").html("Enter Valid Password");
		alert("Enter Valid Password");
	}else{
	$.ajax({
				type : 'post',
				url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
				data : {'type':'002','password':password, 'mobile':mobile},
				beforeSend:function(){
						$('.loader').show(); $("#login-btn").attr("disabled", true);
				},
				success : function (res){
							$('.loader').hide(); $("#login-btn").attr("disabled", false);
							if(isNaN(res)==false){
								$("#loginerrror").html("Login Successful");
								window.localStorage.setItem('userid', res);
								window.localStorage.setItem("login", "true");
								window.location.href="home.html";		
							}else{
								alert(res); $("#loginerrror").html(res);
							}
	
						},
						error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $("#loginerrror").html(msg);
							$('.loader').hide(); $("#login-btn").attr("disabled", false);
						},	
					});
	}
}
function usersignup(){
	$('.loader').show();  $("#signup-btn").attr("disabled", true);
	var name = $('#S_name').val();
	var mobile= $('#S_mobile').val();
	var password = $('#S_password').val();
	if(name==''||name.length<3){
		alert('Enter Valid User Name'); $("#signup-error").html("Enter Valid User Name");  
		$("#signup-btn").attr("disabled", false); $('.loader').hide();
	}else if(mobile.length!=10){
		alert('Enter Valid 10 Digit Mobile Number'); $("#signup-error").html("Enter Valid 10 Digit Mobile Number");  
		$("#signup-btn").attr("disabled", false); $('.loader').hide();
	}else if(password.length<4){
		alert('Enter Valid Password'); $("#signup-error").html("Enter Valid Password");  
		$("#signup-btn").attr("disabled", false); $('.loader').hide();
	}else{
		$.ajax({
				type : 'post',
				url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
				data : {'type':'001','name':name,'password':password, 'mobile':mobile},
				beforeSend:function(){
					$('.loader').show();  $("#signup-btn").attr("disabled", true);
				},
				success : function (res){
					$('.loader').hide();  $("#signup-btn").attr("disabled", false);
							if(isNaN(res)==false){
								alert("Signup Successful");
								
								window.localStorage.setItem('userid', res);
								window.localStorage.setItem("login", "true");
								window.location.href="home.html";		
							}else{
								alert(res); $("#signup-error").html(res);  
								
							}
	
						},
						error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $("#signup-error").html(msg);
							$('.loader').hide(); $("#signup-btn").attr("disabled", false);
						},		
					});
	}
				
}
function forgetpassword(){
	$('.loader').show();  $("#forgetpassword-btn").attr("disabled", true);
	var mobile= $('#forget_pass').val();
	if(mobile.length!=10){
		alert('Enter Valid 10 Digit Mobile Number'); $("#forgetpass-error").html("Enter Valid 10 Digit Mobile Number");  
		$("#forgetpassword-btn").attr("disabled", false); $('.loader').hide();
	}else{
		$.ajax({
				type : 'post',
				url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
				data : {'type':'013', 'mobile':mobile},
				beforeSend:function(){
					$('.loader').show();  $("#forgetpassword-btn").attr("disabled", true);	
				},
				success : function (res){
							$('.loader').hide();  $("#forgetpassword-btn").attr("disabled", false);

							if(isNaN(res)==false){
								alert("Password Sent On Your Phone"); $("#forgetpass-error").html("Password Sent On Your Phone");  
							
							}else{
								alert(res);
								$("#forgetpass-error").html(res); $("#forgetpass-error").html(res);  
							}
	
						},
						error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $("#forgetpass-error").html(msg);
							$('.loader').hide(); $("#forgetpassword-btn").attr("disabled", false);
						},		
					});
	}
}
function UserLogout(){
	window.localStorage.clear();
	window.localStorage.removeItem("IDFR");
	window.location.href="index.html";
}


function itisloading(on){
if( on ){
$(document).on('pagebeforecreate', '[data-role="page"]', function(){     
    setTimeout(function(){

  var $this = $( this ),
        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData( "textonly" );
        html = $this.jqmData( "html" ) || "";
    $.mobile.loading( "show", {
            text: msgText,
            textVisible: textVisible,
            theme: theme,
            textonly: textonly,
            html: html
    });



        //$.mobile.loading('show');
    },1);    
});
}else{
	$.mobile.loading('hide');
}

}
function backgroundworker(){
	var CAT_Load  = window.localStorage.getItem("CAT_Load");
	var PRO_Load  = window.localStorage.getItem("PRO_Load");
	var BAN_Load  = window.localStorage.getItem("BAN_Load");
	var SLOT_Load = window.localStorage.getItem("SLOT_Load");
	var ConLoad  = window.localStorage.getItem("ConLoad");
	var chk =0; var Update_Load= "1.0.0";
		   	$.ajax({
		   			async: false,
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'0100100'},
					beforeSend:function(){	
						
					},
					success : function (res){
						var data  = jQuery.parseJSON(res);						
						var cat_chk=data[0][2]; var pro_chk=data[1][2]; var ban_chk=data[2][2];
						var SLOT_chk=data[3][2]; var Update_chk=data[4][2]; window.localStorage.setItem('min_order', data[5][2]);
						var con_chk=data[6][2]; 
						if(CAT_Load!=cat_chk){
							//
							$("#load_status").html("Cetegory Change Detected <br> Loading Category.."); 
							 $.ajax({
 								async: false,
								type : 'post',
								url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',async:false,
								data : {'type':'014'},
								beforeSend:function(){ },
								success : function (res){
									var data  = jQuery.parseJSON(res);	var table = ''; var table1 = ''; var j=-1;
									$.each(data, function (i, item) {
										table1 +='<div class="category-box"><a href="#" onclick="gotoselcat('+data[i][0]+',`'+data[i][1]+'`)"><figure><img src='+data[i][4]+' alt="category"></figure><h6>'+data[i][1]+'</h6><p>'+data[i][2]+'</p></a></div>';
										j=j+1;
										
									});
									
									$.each(data, function (i, item) {
										table +='<div class="all-category"><div class="category-box"><a href="#" onclick="gotoselcat('+data[j][0]+',`'+data[j][1]+'`)"><figure><img src='+data[j][4]+' alt="category"></figure><p>'+data[j][1]+'</p></a></div></div>';
										j=j-1;

									});
									window.localStorage.setItem('CAT_Load', cat_chk); 
									window.localStorage.setItem('CAT_LIST_Slider', table); window.localStorage.setItem('CAT_LIST_Grid', table1); 
									//console.log(table1);
								},	
							});	

						}if(PRO_Load!=pro_chk){
							$("#load_status").html("");
							$("#load_status").html("Product Change Detected <br> Loading New Products.."); 
							 $.ajax({
								async: false,
								type : 'post',
								url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',async:false,
								data : {'type':'0100101'},
								beforeSend:function(){ },
								success : function (res){
									window.localStorage.setItem('PRO_Load', pro_chk); window.localStorage.setItem('PRO_LIST', res); //window.location.href="new.html";
								}
							});	
							
						}if(BAN_Load!=ban_chk){ 
							$("#load_status").html("");
							$("#load_status").html("Banner Change Detected <br> Loading New Banner.."); 
							$.ajax({
								async: false,
								type : 'post',
								url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
								data : {'type':'015'},
								success : function (res){
									var data  = jQuery.parseJSON(res);		var the_table = '';
									$.each(data, function (i, item) {
										the_table += '<div class="item" onclick="gotobancat('+data[i][2]+')"><figure><img src='+data[i][1]+' alt="banner"></figure></div>'; //console.log(data[i][0]);
									});
									the_table = the_table+"";
									window.localStorage.setItem('BAN_Load', ban_chk); window.localStorage.setItem('BAN_List', the_table);
								}
							});	
						}if(SLOT_Load!=SLOT_chk){ 
							$("#load_status").html("");
							$("#load_status").html("Slot Change Detected <br> Loading New Slot.."); 
							$.ajax({
								async: false,
								type : 'post',
								url : 'https://softwarezsolution.com/app/annapurnamart/admin/api/api.php',async:false,
								data : {'type':'0019'},
								success : function (res){
									var data  = jQuery.parseJSON(res);								
									var the_table = '&nbsp;&nbsp;&nbsp;<option value="kl"  myTag="kl">Select Delivery Preference  </option> ';

									$.each(data, function (i, item) {
										the_table += '&nbsp;&nbsp;&nbsp;<option value='+ data[i][2] +' myTag="'+data[i][1]+'">'+ data[i][1] +'</option>';						
									});
									the_table = the_table+"";
									window.localStorage.setItem('SLOT_Load', SLOT_chk); window.localStorage.setItem('SLOT_List', the_table);
								}
							});	
						}if(Update_Load<Update_chk){
							alert("You need to Update Your App");	
							$("#load_status").html("You need to Update App"); 
							chk=1;
						}if(ConLoad!=con_chk){ 
							$("#load_status").html("Contact Change Detected <br> Loading Contacts....");
							$.ajax({
								async: false,
								type : 'post',
								url : 'https://softwarezsolution.com/app/annapurnamart/admin/api/api.php',
								data : {'type':'0032'},
								success : function (res){
								if(res=='null'){
									$("#load_status").html("No Contact Options Found For Your City Check Back Soon"); 
								}else{
									var data  = jQuery.parseJSON(res);		var the_table = '';
									$.each(data, function (i, item) {
										if(data[i][2]=="Mobile"){
										the_table += '<p><a href="tel:'+data[i][2]+'" style="color: green" >'+data[i][2]+'</a></p>';
										}else{
										the_table += '<p><a href="mailto::'+data[i][2]+'" style="color: green" >'+data[i][2]+'</a></p>';
										}
									});
									the_table = the_table+"";
									window.localStorage.setItem('ConLoad', con_chk); window.localStorage.setItem('CON_List', the_table);	
									}
								}
							});	
						}									
					},	error: function (jqXHR, exception) { 
									var msg=displayerror(jqXHR, exception);
									alert(msg); $("#load_status").html(msg);
									exit;
					},
				});	
			if(chk=="0"){setTimeout(sendtopage, 500);}else{setTimeout(gotoupdate, 500);}
 }
 function gotobancat(catd){
 	if(catd=='#'){

 	}else{
 		gotoselcat(catd,'')
 	}	
 }
function gotoupdate(){
	window.location.href="https://play.google.com/store/apps/details?id=com.annapurnamart.annapurnamart";
	exit;
}
 function loadbanner(){
 	
 	var BAN_List  = window.localStorage.getItem("BAN_List");
 	$( "#newbanner" ).html( BAN_List );	
 	$('.main-banner-slider').owlCarousel({
    	center: true,
    	items:1,
    	autoplay: true,
    	loop:true,
    	stagePadding: 40,
    	margin:10,
    	responsiveClass:true
	})
		    	
}
function loadCategory(){
	
/*	var CAT_LIST_Slider  = window.localStorage.getItem("CAT_LIST_Slider");
 	$( "#cat-slide" ).html( CAT_LIST_Slider );	
	$('.category-slider').owlCarousel({
    	items:2,
    	loop: true,
    	nav: false,
    	dots:false,
    	stagePadding: 30,
    	margin:10,
    	responsiveClass:true
	})
	*/
	var CAT_LIST_Grid  = window.localStorage.getItem("CAT_LIST_Grid");
 	$( "#cat-grid" ).html( CAT_LIST_Grid );	
 	//console.log(CAT_LIST_Grid);
 	
}
function loadcontactoption(){
	var CON_List  = window.localStorage.getItem("CON_List");
 	$( "#contactoptionlist" ).html( CON_List );	
}
 function plusitemproonallpro(id,price){
	var proqty = $('#proqty'+id+'').val(); var realqty  = window.localStorage.getItem("realqty");
	proqty= parseInt(proqty) + 1;
	$('#proqty'+id+'').val(parseInt(proqty));

	var Price  = window.localStorage.getItem("Price");
	var proqty = $('#proqty'+id+'').val();
	if(proqty<0){
		$('#proqty'+id+'').val(0);
		alert("Enter valid Product Quantity");
	}else{
		findtotal(id,price)
		var total=parseInt(Price)*parseInt(proqty);
		$('#total').val(total);
	}

}
function minusitemproonallpro(id,price){
	var proqty = $('#proqty'+id+'').val(); var realqty  = window.localStorage.getItem("realqty");
	proqty= parseInt(proqty) - 1;
	$('#proqty'+id+'').val(parseInt(proqty));

	var Price  = window.localStorage.getItem("Price");
	var proqty = $('#proqty'+id+'').val();
	if(proqty<0){
		$('#proqty'+id+'').val(0);
		alert("Enter valid Product Quantity");
	}else{
		findtotal(id,price);
		var total=parseInt(Price)*parseInt(proqty);
		$('#total').val(total);
	}

}
function findtotal(id,price){
	//alert(0);
	var qty=$('#proqty'+id+'').val();
	var total=parseFloat(+price * +qty);
	$('#totalprice'+id+'').html("<strong>₹ "+total+"/-</strong>");
	$('#proqty').val(qty);
	$('#total').val(total);
}

function addtocartfake(P_ID,price,kimg,Name,realqty){
	//alert(0);
	//console.log(P_ID,price,kimg,Name,realqty);
	var proqty = $('#proqty').val();
	var total = $('#total').val();
	/*var P_ID  = window.localStorage.getItem("P_ID");
	var price  = window.localStorage.getItem("Price");
	var kimg  = window.localStorage.getItem("kimg");
	var Name  = window.localStorage.getItem("Name");		
	var realqty  = window.localStorage.getItem("realqty");
	*/
	

$('.loader').show();  $("#atttocart-btn").attr("disabled", true);

	var proqty = $('#proqty'+P_ID+'').val();
	var total = parseFloat(+price * +proqty);
	var P_ID  = P_ID;//  window.localStorage.getItem("P_ID");
	var price  = price; //window.localStorage.getItem("Price");
	var kimg  = kimg; //window.localStorage.getItem("kimg");
	var Name  = Name; //window.localStorage.getItem("Name");		
	var realqty  = realqty; //window.localStorage.getItem("realqty");
	
	var k = new Date().getTime();
	var IDFR  = window.localStorage.getItem("IDFR");

	if(proqty<=0){
		alert("Enter Valid Quantity and hit Add To Cart button");
		$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
	}else if(!IDFR){
		var d = k;
		window.localStorage.setItem('IDFR', d);
		var IDFR  = window.localStorage.getItem("IDFR");
		 $.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'005','P_ID':P_ID,'price':price,'proqty':proqty,'total':total,'IDFR':IDFR,'kimg':kimg,'Name':Name,'realqty':realqty},
					beforeSend:function(){
						$('.loader').show();  $("#atttocart-btn").attr("disabled", true);
					},
					success : function (res){
						$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);

						if(res=="Success: Product Added Successfully"){
							alert("Added To Your Cart"); 
							var cart_count  = window.localStorage.getItem("cart_count"); 
														//alert(cart_count); 
							if(cart_count === null){cart_count = 1; window.localStorage.setItem('cart_count', parseInt(cart_count)); }else{window.localStorage.setItem('cart_count', parseInt(cart_count)+1);  }
							window.localStorage.setItem('cart_count', cart_count);
							window.location.href="allproduct.html";
						}else{alert("Error: Something Went Wrong Try Again");}
						
					},	error: function (jqXHR, exception) { 
									var msg=displayerror(jqXHR, exception);
									alert(msg); $('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
					},
				});	
	}else{
	var IDFR  = window.localStorage.getItem("IDFR");
	 $.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'005','P_ID':P_ID,'price':price,'proqty':proqty,'total':total,'IDFR':IDFR,'kimg':kimg,'Name':Name,'realqty':realqty},
					beforeSend:function(){
						$('.loader').show();  $("#satttocart-btn").attr("disabled", true);
					},
					success : function (res){
						$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
						if(res=="Success: Product Added Successfully"){
							alert("Added To Your Cart");
							var cart_count  = window.localStorage.getItem("cart_count"); 
							if(cart_count === null){cart_count = 1; window.localStorage.setItem('cart_count', parseInt(cart_count));}else{window.localStorage.setItem('cart_count', parseInt(cart_count)+1);}
							window.location.href="allproduct.html";
						}else{
							alert("Error: Something Went Wrong Try Again");}
						
					},	error: function (jqXHR, exception) { 
									var msg=displayerror(jqXHR, exception);
									alert(msg); $('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
					},
				});	
	}
	



}
function loadProduct1(){
		$('.loader').show();
		var cat_id  = window.localStorage.getItem("cat_id");
		var cat_name  = window.localStorage.getItem("cat_name");
		$("#cat-name").html(cat_name); 
		var PRO_LIST  = window.localStorage.getItem("PRO_LIST");
		var data  = jQuery.parseJSON(PRO_LIST);
		var table = ''; var peroff; var fakeprice;
		$.each(data, function (i, item) {
			if(data[i][9]==cat_id){ 
				
				if(data[i][10]!=0 & data[i][8]!="Disable"){
					//offer
					peroff=parseFloat((data[i][10]*100)/data[i][3]); fakeprice=parseFloat(+data[i][3] + +data[i][10]);
					console.log(peroff);
					table +='<div class="all-category product-all-page" ><div class="all-product-category"><div class="category-box"><a href="#"><figure><img src='+data[i][4]+' alt="category" onclick="gotoProduct('+data[i][0]+')"><span class="off">'+peroff+'%</span></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control"><del>₹ '+fakeprice+'</del> ₹ '+data[i][3]+'</p></li><li><p>Add To Cart</p> <div class="count-item"><a href="javascript:void(0)" class="decrement" onclick="minusitemproonallpro('+data[i][0]+','+data[i][3]+')">-</a><div class="input-box"><input type="number" onchange="findtotal('+data[i][0]+','+data[i][3]+')" placeholder="0" name="" value="0" id="proqty'+data[i][0]+'" disabled> </div><a href="javascript:void(0)" class="increment" onclick="plusitemproonallpro('+data[i][0]+','+data[i][3]+')">+</a></div> </li></ul></div><div class="bottom-part"><h4><p id="totalprice'+data[i][0]+'"> </p></h4><a href="#" onclick="addtocartfake('+data[i][0]+',`'+data[i][3]+'`,`'+data[i][4]+'`,`'+data[i][1]+'`,`'+data[i][2]+'`)">Buy Now</a></div></div></div></div></div>';
				}else if(data[i][10]==0 & data[i][8]!="Disable"){
					//normal
					//normal
					table +='<div class="all-category product-all-page" ><div class="all-product-category"><div class="category-box"><a href="#"><figure><img src='+data[i][4]+' alt="category" onclick="gotoProduct('+data[i][0]+')"></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control">₹ '+data[i][3]+'</p></li><li><p>Add To Cart</p> <div class="count-item"><a href="javascript:void(0)" class="decrement" onclick="minusitemproonallpro('+data[i][0]+','+data[i][3]+')">-</a><div class="input-box"><input type="number" onchange="findtotal('+data[i][0]+','+data[i][3]+')" placeholder="0" name="" value="0" id="proqty'+data[i][0]+'" disabled> </div><a href="javascript:void(0)" class="increment" onclick="plusitemproonallpro('+data[i][0]+','+data[i][3]+')">+</a></div> </li></ul></div><div class="bottom-part"><h4><p><del></del></p> <p id="totalprice'+data[i][0]+'"> </p> </h4><a href="#" onclick="addtocartfake('+data[i][0]+',`'+data[i][3]+'`,`'+data[i][4]+'`,`'+data[i][1]+'`,`'+data[i][2]+'`)">Buy Now</a></div></div></div></div></div>';
				}else{
					//out of stock
					table +='<div class="all-category product-all-page" onclick="#"><div class="all-product-category"><div class="category-box"><a href="#"><figure> <p class="out-of-stock"><label>Out of Stock</label></p> <img src='+data[i][4]+' alt="category"></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control">₹ '+data[i][3]+'</p></li></ul></div><div class="bottom-part"><h4><p><del></del></p>₹ '+data[i][3]+'</h4><a href="#"><del>Buy Now</del></a></div></div></div></div></div>';
				}

				}				
			});
			$('.loader').hide();
			$("#newprotab").html(table); 
}


function gotoselcat(cat_id,cat_name){
	window.localStorage.setItem('cat_id', cat_id);
	window.localStorage.setItem('cat_name', cat_name);
	window.location.href="allproduct.html";
}

function loadslotvalue(){
	var SLOT_List  = window.localStorage.getItem("SLOT_List");
	$("#delivery").html(SLOT_List);
			
}

function sendtopage(){
 	window.location.href="login.html";
 }

function loadProduct(){
			var cat_id  = window.localStorage.getItem("cat_id");
			//alert(userid);
	    	$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'003','cat_id':cat_id},
					beforeSend:function(){
						
						$("#loading").show();
					},
					success : function (res){
					//console.log(res);
						$("#loading").hide();
						var data  = jQuery.parseJSON(res);						
						var table = '';
						$.each(data, function (i, item) {
						table += '<li data-icon=carat-r id="shopcat"> <img src='+data[i][4]+' width=100% height=100% onclick="showBIGImage(\'' + data[i][4] + '\')"> <div onclick="gotoProduct('+data[i][0]+')">' + data[i][1] + '<p>'+data[i][2]+' &#x20b9; '+data[i][3]+'</p></div></li>';
					
					});
					$('<ul data-role=listview data-inset=true>').attr({'id':'listv'}).appendTo('#shops');
					$('#listv').append(table);
					$('#listv').listview().listview("refresh");

					}
				});		 
}

function searchitem(){
	
var PRO_LIST  = window.localStorage.getItem("PRO_LIST");
var data  = jQuery.parseJSON(PRO_LIST);	
	var usersearchtext= $('#usersearchtext').val();	
	$('.loader').show();
			
	var table = ''; var chk=0; var pro_name; var pro_dsc;
	$.each(data, function (i, item) {
		pro_name = data[i][1]; pro_dsc = data[i][5];
		if(pro_name.toLocaleLowerCase().includes(usersearchtext.toLocaleLowerCase())==true || pro_dsc .toLocaleLowerCase().includes(usersearchtext.toLocaleLowerCase())==true){
			chk=1;
			if(data[i][10]!=0 & data[i][8]!="Disable"){
				//offer
				table +='<div class="all-category product-all-page" onclick="gotoProduct('+data[i][0]+')"><div class="all-product-category"><div class="category-box"><a href="#"><figure><img src='+data[i][4]+' alt="category"><span class="off">Offer</span></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control">₹ '+data[i][3]+'</p></li></ul></div><div class="bottom-part"><h4><p><del>₹'+data[i][10]+'</del></p>₹ '+data[i][3]+'</h4><a href="#">Buy Now</a></div></div></div></div></div>';
			}else if(data[i][10]==0 & data[i][8]!="Disable"){
				//normal
				table +='<div class="all-category product-all-page" onclick="gotoProduct('+data[i][0]+')"><div class="all-product-category"><div class="category-box"><a href="#"><figure><img src='+data[i][4]+' alt="category"></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control">₹ '+data[i][3]+'</p></li></ul></div><div class="bottom-part"><h4><p><del></del></p>₹ '+data[i][3]+'</h4><a href="#">Buy Now</a></div></div></div></div></div>';
			}else{
				//out of stock
				table +='<div class="all-category product-all-page" onclick="#"><div class="all-product-category"><div class="category-box"><a href="#"><figure> <p class="out-of-stock"><label>Out of Stock</label></p> <img src='+data[i][4]+' alt="category"></figure></a><div class="left-content"><h6>'+data[i][1] +'</h6><div class="quality-list"><ul><li><p>Quantity</p><p class="form-control">'+data[i][2]+'</p></li><li><p>Price</p><p class="form-control">₹ '+data[i][3]+'</p></li></ul></div><div class="bottom-part"><h4><p><del></del></p>₹ '+data[i][3]+'</h4><a href="#"><del>Buy Now</del></a></div></div></div></div></div>';
			}
			
		}		
		});
	if(chk==1){

			$("#cat-grid").hide(); $("#cat-slide").hide(); $("#newbanner").hide();  $("#cat-slide-head").hide(); $("#cat-grid-head").hide();
			$('#newprotab').html(table); $('.loader').hide(); $("#newprotab").show(); 	

		
	}else{
				$("#cat-grid").hide(); $("#cat-slide").hide(); $("#newbanner").hide();  $("#cat-slide-head").hide(); $("#cat-grid-head").hide();
				$("#newprotab").show(); $('.loader').hide();	$('#newprotab').html("<div class='no-found-box'><p class='not-found'<br> No Product Found</p><p class='not-found'><k  style='font-size: 60px !important;'>😐</k></p></div>");
	}

	    	
}



function showBIGImage(image){
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	width= width-40;
	$("#imgfordisplay").html('<a href="#myPopup" data-rel="popup" id="biggerimage"></a>');
	$("#imgfordisplay").show();
	$("#showbiggerimage").html('<img src='+image+' width='+width+'px >');
	$("#biggerimage").click();
	$("#imgfordisplay").hide();
}
function gotoProduct(P_ID){
	window.localStorage.setItem('P_ID', P_ID);
	window.location.href="singleproduct.html";
}
function loadProductDetail(){
		var P_ID  = window.localStorage.getItem("P_ID");
		var PRO_LIST  = window.localStorage.getItem("PRO_LIST");
		var data  = jQuery.parseJSON(PRO_LIST);
		$.each(data, function (i, item) {
			if(data[i][0]==P_ID){
				 		$('#Name').html(data[i][1]); $('#heading-pro').html(data[i][1]);
						$('#kimg').html('<img src='+data[i][4]+' width=100% >');
						$('#Desc').html(data[i][5]);
						$('#Price').html("&#x20b9; "+data[i][3]+"&nbsp; ");
						$('#Price1').html(" &#x2718; &#x20b9; "+data[i][3]+" / "+data[i][2]);
						$('#Qty').html("&nbsp; "+data[i][2]+"&nbsp; ");
						$('#tty').html("&nbsp; (x "+data[i][2]+")&nbsp; ");
						window.localStorage.setItem('Price', data[i][3]);
						window.localStorage.setItem('kimg', data[i][4]);
						window.localStorage.setItem('Name', data[i][1]);
						window.localStorage.setItem('realqty', data[i][2]);

				}				
			});
}
function plusitempro(){
	var proqty = $('#proqty').val(); var realqty  = window.localStorage.getItem("realqty");
	proqty= parseInt(proqty) + 1;
	$('#proqty').val(parseInt(proqty));

	var Price  = window.localStorage.getItem("Price");
	var proqty = $('#proqty').val();
	if(proqty<0){
		$('#proqty').val(0);
		alert("Enter valid Product Quantity");
	}else{
		var total=parseInt(Price)*parseInt(proqty);
		$('#total').val(total);
	}

}
function minusitempro(){
	var proqty = $('#proqty').val(); var realqty  = window.localStorage.getItem("realqty");
	proqty= parseInt(proqty) - 1;
	$('#proqty').val(parseInt(proqty));

	var Price  = window.localStorage.getItem("Price");
	var proqty = $('#proqty').val();
	if(proqty<0){
		$('#proqty').val(0);
		alert("Enter valid Product Quantity");
	}else{
		var total=parseInt(Price)*parseInt(proqty);
		$('#total').val(total);
	}

}
function calculateTotal(){
	var Price  = window.localStorage.getItem("Price");
	var proqty = $('#proqty').val();
	if(proqty<=0){
		alert("Enter valid Product Quantity");
	}else{
		var total=Price*proqty;
		$('#total').val(total);
	}
}
function AddToCart(){
	$('.loader').show();  $("#atttocart-btn").attr("disabled", true);

	var proqty = $('#proqty').val();
	var total = $('#total').val();
	var P_ID  = window.localStorage.getItem("P_ID");
	var price  = window.localStorage.getItem("Price");
	var kimg  = window.localStorage.getItem("kimg");
	var Name  = window.localStorage.getItem("Name");		
	var realqty  = window.localStorage.getItem("realqty");
	
	var k = new Date().getTime();
	var IDFR  = window.localStorage.getItem("IDFR");

	if(proqty<=0){
		alert("Enter Valid Quantity and hit Add To Cart button");
		$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
	}else if(!IDFR){
		var d = k;
		window.localStorage.setItem('IDFR', d);
		var IDFR  = window.localStorage.getItem("IDFR");
		 $.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'005','P_ID':P_ID,'price':price,'proqty':proqty,'total':total,'IDFR':IDFR,'kimg':kimg,'Name':Name,'realqty':realqty},
					beforeSend:function(){
						$('.loader').show();  $("#atttocart-btn").attr("disabled", true);
					},
					success : function (res){
						$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);

						if(res=="Success: Product Added Successfully"){
							alert("Added To Your Cart"); 
							var cart_count  = window.localStorage.getItem("cart_count"); 
														//alert(cart_count); 
							if(cart_count === null){cart_count = 1; window.localStorage.setItem('cart_count', parseInt(cart_count)); }else{window.localStorage.setItem('cart_count', parseInt(cart_count)+1);  }
							window.localStorage.setItem('cart_count', cart_count);
							window.location.href="allproduct.html";
						}else{alert("Error: Something Went Wrong Try Again");}
						
					},	error: function (jqXHR, exception) { 
									var msg=displayerror(jqXHR, exception);
									alert(msg); $('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
					},
				});	
	}else{
	var IDFR  = window.localStorage.getItem("IDFR");
	 $.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'005','P_ID':P_ID,'price':price,'proqty':proqty,'total':total,'IDFR':IDFR,'kimg':kimg,'Name':Name,'realqty':realqty},
					beforeSend:function(){
						$('.loader').show();  $("#satttocart-btn").attr("disabled", true);
					},
					success : function (res){
						$('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
						if(res=="Success: Product Added Successfully"){
							alert("Added To Your Cart");
							var cart_count  = window.localStorage.getItem("cart_count"); 
							if(cart_count === null){cart_count = 1; window.localStorage.setItem('cart_count', parseInt(cart_count));}else{window.localStorage.setItem('cart_count', parseInt(cart_count)+1);}
							window.location.href="allproduct.html";
						}else{
							alert("Error: Something Went Wrong Try Again");}
						
					},	error: function (jqXHR, exception) { 
									var msg=displayerror(jqXHR, exception);
									alert(msg); $('.loader').hide();  $("#atttocart-btn").attr("disabled", false);
					},
				});	
	}
	
}
function showcartcount(){
	var cart_count  = window.localStorage.getItem("cart_count"); 
	if(cart_count === null){$('#cart_count').html("<span class='count'>0</span>");}
	else{$('#cart_count').html("<span class='count'>"+cart_count+"</span>");}
}
function loadCartProduct(){
			$('.loader').show();
			var IDFR  = window.localStorage.getItem("IDFR");
			if(!IDFR){
				alert("Your Cart is Empty");
				window.location.href="home.html";
				
			}else{
				$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'006','IDFR':IDFR},
					beforeSend:function(){
						$('.loader').show();
						
					},
					success : function (res){
						$('.loader').hide();
						if(res!='null'){
							var data  = jQuery.parseJSON(res);						
							var table = ''; var totalamt=0;
							$.each(data, function (i, item) {
								totalamt = totalamt +parseInt(data[i][4]);
								table +='<div class="cart-card"><figure><img src='+data[i][7]+' alt="vegetable"></figure><div class="cart-content"><h2>'+data[i][8]+'</h2><p>'+data[i][3]+'  X ₹'+data[i][2]+' Per '+data[i][9]+' = ₹ '+data[i][4]+'</p><a href="#" onclick="Onclick=removefromcart('+IDFR+','+data[i][1]+',`'+data[i][2]+'`,`'+data[i][3]+'`,'+data[i][4]+')" class="delete-item"><i class="fa fa-trash"></i></a></div></div>';
							});
							$('#listv').html(table); $('#total-amt').html("₹ "+totalamt+" ");
							window.localStorage.setItem('totalamt', totalamt);
						}else{alert("Your Cart is Empty"); window.location.href="home.html"}
					},error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $('.loader').hide(); 
							window.location.href="home.html";
						},
				});
			}	
		
}	
function removefromcart(a1,a2,a3,a4,a5){
var t=confirm("Remove");
	if(t){
		$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'007','IDFR':a1,'a2':a2,'a3':a3,'a4':a4,'a5':a5},
					beforeSend:function(){
						$('.loader').show();
					},
					success : function (res){
						$('.loader').hide();
						alert(res);
						var cart_count  = parseInt(window.localStorage.getItem("cart_count"));  window.localStorage.setItem('cart_count', cart_count-1);

						window.location.href="cart.html";
					}
				});
	}
}
function loadCartTotal(){
			var IDFR  = window.localStorage.getItem("IDFR");
			if(!IDFR){
				alert('Your Cart is Empty'); $("#placeorder-error").html("Your Cart is Empty");
				$('.loader').show();
				window.location.href="home.html";
			}else{
				var totalamt  = window.localStorage.getItem("totalamt");
				$("#totalamt").html("₹ "+totalamt); $("#totalamt1").html("₹ "+totalamt);
			}
	
}
function setdelcharge(){
	//alert(0);
		var totalamt = window.localStorage.getItem("totalamt");	
		var delivery = $('#delivery').val();

		console.log(delivery);
		if(delivery=="kl"){
			alert("Please Select Delivery Slot");
		}else{
			var res=parseInt(totalamt)+parseInt(delivery);
			window.localStorage.setItem('deliverycharge', delivery);		
			$("#delcharge").html("₹ "+delivery);
			$("#totalamt1").html("₹ "+res);
			window.localStorage.setItem('totalamt1', res);	
		}		
}

function findnewtotal(){
	//alert(0);
		var AMT = window.localStorage.getItem("AMT");	
		var delivery = $('#delivery').val();

		console.log(delivery);
		if(delivery=="kl"){
			alert("Please Select Delivery Slot");
		}else{
			var res=parseInt(AMT)+parseInt(delivery);
			window.localStorage.setItem('NEWAMT', res);		
		$("#totalamt").html("...");
		$("#totalamt").html("<b>TOTAL: &#x20b9;"+ res+"<b>");
		}		
}

function setfiledsforOrder(){
			var saved_name  = window.localStorage.getItem("saved_name");
			var saved_Mobile  = window.localStorage.getItem("saved_Mobile");
			var saved_Address  = window.localStorage.getItem("saved_Address");
			var saved_pin  = window.localStorage.getItem("saved_pin");
			var saved_email  = window.localStorage.getItem("saved_email");
			//console.log(saved_name);
			if(saved_name){
				$('#Name').val(saved_name);
				//console.log("1");
			}else{	
				var Name = $('#Name').val();
				window.localStorage.setItem('saved_name', Name);
				}
			if(saved_Mobile){
				$('#Mobile').val(saved_Mobile);
			}else{	
				var Mobile = $('#Mobile').val();
				window.localStorage.setItem('saved_Mobile', Mobile);
				}
			if(saved_Address){
				$('#address').val(saved_Address);
			}else{	
				var address = $('#address').val();
				window.localStorage.setItem('saved_Address', address);
				}
			if(saved_pin){
				$('#pin').val(saved_pin);
			}else{	
				var pin = $('#pin').val();
				window.localStorage.setItem('saved_pin', pin);
				}

			if(saved_email){
				$('#Email').val(saved_email);
			}else{	
				var Email = $('#Email').val();
				window.localStorage.setItem('saved_email', Email);
				}
				
	
}
function saveaddress(){
			var Name = $('#Name').val(); var Mobile = $('#Mobile').val(); var address1 = $('#address').val(); 
			var pin1 =$('#pin').val(); var Email = $('#Email').val();

			window.localStorage.setItem('saved_name', Name);
			window.localStorage.setItem('saved_Mobile', Mobile);
			window.localStorage.setItem('saved_Address', address1);
			window.localStorage.setItem('saved_pin', pin1);
			window.localStorage.setItem('saved_email', Email);
			
}

function PlaceOrder(){
		saveaddress();
		$("#placeorder-error").html("Placing Your Order Please Wait..");
		$("#placeorder-btn").attr("disabled", true); $('.loader').show();

			var IDFR  = window.localStorage.getItem("IDFR");//deliverycharge
			//var AMT = window.localStorage.getItem("NEWAMT");	
			var totalamt1 = window.localStorage.getItem("totalamt1");	
			var totalamt = window.localStorage.getItem("totalamt");	
			var deliverycharge = window.localStorage.getItem("deliverycharge");	
			var min_order = window.localStorage.getItem("min_order");	
			var userid  = window.localStorage.getItem("userid");
			var Name = $('#Name').val();
			var Mobile = $('#Mobile').val();
			var address = $('#address').val();
			var pin = $('#pin').val();
			var payoption = $("input[name='payoption']:checked").val();
			var email=$('#Email').val(); //fake email for orders

			var delivery = $("#delivery option:selected").attr("myTag");

			if(!IDFR){
				alert('Your Cart is Empty'); $("#placeorder-error").html("Your Cart is Empty");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
				window.location.href="home.html";
			}else if(parseInt(totalamt)<parseInt(min_order)){
				var rem=parseInt(min_order)-(totalamt);
				alert("Minimum Order Must be Rs: "+min_order+"/-, Add Minimum Rs " +rem+ "/- Product"); 
				$("#placeorder-error").html("Minimum Order Must be Rs: "+min_order+"/-, Add Minimum Rs " +rem+ "/- Product");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(Name.length<3){
				alert('Please Enter Valid Full Name'); $("#placeorder-error").html("Please Enter Valid Full Name");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(Mobile.length!=10){
				alert('Enter Valid 10 Digit Mobile Number'); $("#placeorder-error").html("Enter Valid 10 Digit Mobile Number");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(address.length<15){
				alert("Length of Address can't Less Then 15 Character"); $("#placeorder-error").html("Length of Address can't Less Then 15");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(pin.length!=6){
				alert("Enter Valid 6 Digit PIN Code"); $("#placeorder-error").html("Enter Valid 6 Digit PIN Code");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(delivery=="kl"){
				alert("Please Select Delivery Preference"); $("#placeorder-error").html("Please Select Delivery Preference");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(payoption==undefined){
				alert("Please Select Payment Option"); $("#placeorder-error").html("Please Select Payment Option");
				$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
			}else if(payoption=='COD'){
				$("#login").attr("disabled", true);
				window.localStorage.setItem('saved_name', Name);
				window.localStorage.setItem('saved_Mobile', Mobile);
				window.localStorage.setItem('saved_Address', address);
				window.localStorage.setItem('saved_pin', pin);
				$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'009','IDFR':IDFR,'AMT':totalamt1,'userid':userid,'Name':Name,'Mobile':Mobile,'address':address,'pin':pin,'delivery':delivery,'payoption':payoption,'Del_Charge':deliverycharge},
					beforeSend:function(){
						$("#placeorder-error").html("Placing Your Order Please Wait..");
						$("#placeorder-btn").attr("disabled", true); $('.loader').show();
					},
					success : function (res){					
					$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
						if(res>0){
							alert("Order Placed Sucessfully");
							window.localStorage.removeItem("IDFR"); window.localStorage.removeItem("cart_count");
							window.location.href="myorder.html";
						}else{alert(res); $("#placeorder-error").html(res);}
					
					},error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $("#placeorder-btn").attr("disabled", false); $('.loader').hide();
						},
				});
			}else if(payoption=='Pre Paid'){
				$('.loader').hide(); $("#placeorder-btn").attr("disabled", false); $("#placeorder-error").html("");
 total_price=totalamt1*100;
 var options = {
    "key": "rzp_live_wYrtjsi2Vjbdet", // eA259AUW821iDlkXZRNmeAPX
    "amount": total_price, // Example: 2000 paise = INR 20
    "name": "Wholesale Mart",
    "description": "Wholesale Mart(Bada Bazar)",
    "image": "https://softwarezsolution.com/app/annapurnamart/icon.png",// COMPANY LOGO
    "handler": function (response) {
        //console.log(response);
        // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
        
        if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            //redirect_url = '/you-owe-money.html';
            alert("Payment Failed Please Try Again");
        } else {
          //  redirect_url = '/thnx-you-paid.html';
          alert("Payment Sucessful Please Wait...");
          $.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'009','IDFR':IDFR,'AMT':totalamt1,'userid':userid,'Name':Name,'Mobile':Mobile,'address':address,'pin':pin,'delivery':delivery,'payoption':payoption,'Del_Charge':deliverycharge},
					beforeSend:function(){
							$("#placeorder-error").html("Placing Your Order Please Wait..");
							$("#placeorder-btn").attr("disabled", true); $('.loader').show();
					},
					success : function (res){					
					$("#placeorder-btn").attr("disabled", false); $('.loader').hide();
						if(res>0){
							alert("Order Placed Sucessfully");
							window.localStorage.removeItem("IDFR"); window.localStorage.removeItem("cart_count");
							window.location.href="myorder.html";
						}else{alert(res); $("#placeorder-error").html(res);}
					
					},error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg); $("#placeorder-btn").attr("disabled", false); $('.loader').hide();
						},
				});


        }
        //location.href = redirect_url;
        
        
    },
    "prefill": {
        "name": Name, // pass customer name
        "email": email,// customer email
        "contact": Mobile //customer phone no.
    },
    "notes": {
        "address": address //customer address 
    },
    "theme": {
        "color": "#15b8f3" // screen color
    }
};
//console.log(options);
var propay = new Razorpay(options);
propay.open();






			}	
}
function loadPrvOrder(){
			$('.loader').show();
			var userid  = window.localStorage.getItem("userid");
			$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'010','userid':userid},
					beforeSend:function(){},
					success : function (res){
						$('.loader').hide();
						var data  = jQuery.parseJSON(res);	var table = ''; var ttl=0;
						$.each(data, function (i, item) {
							ttl= parseInt(data[i][3])-parseInt(data[i][12]);
							table +='<div class="cart-card"><p><span>Date:</span> '+data[i][8]+'</p><p><span>Order Number:</span> '+data[i][0]+'</p><p><span>Products:</span><i class="fa fa-inr" aria-hidden="true"></i> '+ttl+'</p><span>Delivery Charge:</span> ₹'+data[i][12]+' </p> <span>Total:</span> ₹'+data[i][3]+'</p><p><span>Payment Mode:</span> <i class="fa fa-money" aria-hidden="true"></i> '+data[i][11]+'</p><p>	<!--<p><span>Dilivery Agent Number:</span> 8989888888</p>--><p><span>Address:</span> '+data[i][6]+'</p><p class="status"><span>Status:</span> '+data[i][9]+'</p><div class="order-action" onclick="loadProducts('+data[i][2]+')"><a class="view-order" href="javascript:void(0)"  >Products</a></div></div>';
						});					
						$('#listv').html(table);
					},error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg);  $('.loader').hide();
						},
				});		 
}
function loadProducts(IDFR){
	$('.loader').show();
	
	$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'006','IDFR':IDFR},
					beforeSend:function(){	},
					success : function (res){
						$('.loader').hide();
						var data  = jQuery.parseJSON(res);	var the_table = '';
						$.each(data, function (i, item) {
							the_table +='<li><figure><img src='+data[i][7]+' alt="vegetable"></figure><div class="detail-product"><p class="name">'+data[i][8]+'</p><p><span>Quantity:</span> '+data[i][3]+' (x '+data[i][9]+')</p><p><span>Price:</span>₹ '+data[i][2]+' / '+data[i][9]+' </p><p><span>Total:</span>₹ '+data[i][4]+' </p></div></li>';
						});
						
						$("#showbiggerimage").html(the_table);
						
						$('.order-detail-popup, .forgot-password').addClass('open-popup');

						
						
					},error: function (jqXHR, exception) {
							var msg=displayerror(jqXHR, exception);
							alert(msg);  $('.loader').hide();
						},
					
					
				});
}

function notlogedin(){
	alert("You Must Login to see the content");
}
function loadMYAccount(){
	$('.loader').show();
	var userid  = window.localStorage.getItem("userid");
	$.ajax({
					type : 'post',
					url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
					data : {'type':'011','userid':userid},
					beforeSend:function(){
						
					},
					success : function (res){
						$('.loader').hide();
						var data  = jQuery.parseJSON(res); var i=0;	
						
						$('#S_name').val(data[i][1]);
						$('#S_mobile').val(data[i][2]);

						window.localStorage.setItem('pwd', data[i][3]);
					}
				});
}
function userupdate(){
	$("#userupdate-error").html("Placing Your Order Please Wait..");
	$("#userupdate-btn").attr("disabled", true); $('.loader').show();

	var userid  = window.localStorage.getItem("userid");
	var name = $('#S_name').val();
	var mobile= $('#S_mobile').val();
	var EOpassword = $('#SO_password').val();
	var password = $('#S_password').val();
	var pwd  = window.localStorage.getItem("pwd");
	if(name==''||name.length<3){
		alert('Please Enter valid Name'); $("#userupdate-error").html("Please Enter valid Name");
		$("#userupdate-btn").attr("disabled", false); $('.loader').hide();
	}else if(mobile.length!=10){
		alert('Enter Valid 10 Digit Mobile Number'); $("#userupdate-error").html("Enter Valid 10 Digit Mobile Number");
		$("#userupdate-btn").attr("disabled", false); $('.loader').hide();
	}else if(password.length<4){
		alert('Please Enter valid Password'); $("#userupdate-error").html("Please Enter valid Password");
		$("#userupdate-btn").attr("disabled", false); $('.loader').hide();
	}else if(EOpassword!=pwd){
		alert("Your Entered Password Did not match to Current password"); $("#userupdate-error").html("Your Entered Password Did not match to Current password");
		$("#userupdate-btn").attr("disabled", false); $('.loader').hide();
	}else{
		$.ajax({
				type : 'post',
				url : 'https://softwarezsolution.com/app/annapurnamart/App_api/app_api.php',
				data : {'type':'012','name':name,'password':password, 'mobile':mobile, 'userid':userid},
				beforeSend:function(){
						
				},
				success : function (res){
					$("#userupdate-btn").attr("disabled", false); $('.loader').hide();
							if(isNaN(res)==false){
								alert("Update Successful");	
								$("#userupdate-error").html("Update Successful");		
								window.location.href="home.html";		
							}else{
								alert("Update Failed");
								$("#userupdate-error").html("Update Failed");
								
								
							}
	
						}	
					});
	}
}

