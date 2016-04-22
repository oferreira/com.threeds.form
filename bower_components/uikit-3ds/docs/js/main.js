/*************************************************************************
	MAIN JS
*************************************************************************/

$( window ).bind( "create.xrayhtml", function( e ) {
	var prism = !!~e.target.getAttribute( "class" ).indexOf( "prism" );

	if( prism && "Prism" in window ) {
		$( ".prism" ).find( "code" ).addClass( "language-markup" );
		Prism.highlightAll();
	}
});


/*********************************
 MAIN JS
*********************************/

$(function() {

// Automatic color

    //Function to convert hex format to a rgb color
    function rgb2hex(orig){
        var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
    }

	$('.item-bg-color').each(function(){
		var color =  rgb2hex( $(this).css( "background-color" ) );
		$(this).next().html(color);
	});


//Header 3DS
    $('body').header3ds({
        "bgcolor" 		: "dark",
        "website"		: "g",
        "hasfooter"		: true,
        "hasborder"		: true,
        "hascompass"	: true,
        "language"		: "fr",
        "secure"		: true,
        "width"			: "100%",
        "margin"		: "16",
        "mediaqueries"	: [
            {
                "max"		: "75rem",
                "width" 	: "75rem",
                "margin"	: "16px"
            },
            {
                "width" 	: "75rem"
            }
        ]
    });



// Generate summary area
	$push = $("#summary-area ul");
	increment = 0;
	$("body").find("h2,h3").each(function( index ) {
		increment++;
		$this = $(this);
		name = $this.text();
		if($this.is("h2")){
			className = "body1";
		}else{
			className = "body2";
		}
		$(this).attr("id","index_"+increment);
		$li = $("<li>").addClass(className);
		$a = $("<a>").attr("href","#index_"+increment).text(name);
		$push.append($li.append($a));
	});


	$( window ).resize(function() {
		resizeMe();
	});

	resizeMe();

	function resizeMe(){
		var h = $(window).height();
		//console.log(h);
		$(".sidebar").height(h);
	}



});