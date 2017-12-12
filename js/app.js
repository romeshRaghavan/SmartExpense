// Initialize app
var j = jQuery.noConflict();
var $ = jQuery.noConflict();
var defaultPagePath='app/pages/';
var mydb = openDatabase("Expenzing", "0.1", "Expenzing", 1024 * 1024);


function naxvarBg() {
    var navbar = j(".navbar-clear"), box = null, cls = "active";
    return 0 === navbar.length ? !1 : (box = j(".page-on-center").length > 0 ? navbar.next().find(".page-on-center .page-content") : navbar.next().find(".page .page-content"), 
    box.scrollTop() > 10 ? navbar.addClass(cls) : navbar.removeClass(cls), void box.scroll(function() {
        j(this).scrollTop() > 40 ? navbar.addClass(cls) : navbar.removeClass(cls);
    }));
}

function showLineChart(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showLineChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showBarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Bar(data, {
        responsive: !0,
        pointDotRadius: 6,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPieChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Pie(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showDoughnutChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Doughnut(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showRadarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Radar(data, {
        responsive: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPolarChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).PolarArea(data, {
        responsive: !0,
        scaleFontSize: 10,
        tooltipFontSize: 12
    });
    return chart;
}

var myApp = new Framework7({
    swipeBackPage: !1,
    pushState: !0,
    cache: false,
    swipePanel: "left",
    modalTitle: "Title",
}), jj = Dom7;


var mainView = myApp.addView('.view-main', {});

/*
myApp.onPageInit('addExpense', function(){
    jj('.claimlisting').on('click', function (e) {
        jjheader = jj(this);
        jjcontent = jjheader.next();
        jjcontent.toggleClass('smart');
    });

    jj('.addexpense').on('click', function (e) {
        jj('.addclaim').show(1000);
    });
     jj('.closeme').on('click', function (e) {
        jj('.addclaim').hide(1000);
    });

    console.log('Index Page Init Function Triggered');
}).trigger();
*/

myApp.onPageInit('wishlist', function(){

    jj('.wishlist .claimlisting').on('click', function (e) {
    jj(this).toggleClass('selected');
    jj('.sendrest').show(1000);

    if (jj(".selected")[0]){
        jj('.sendrest').show(1000);
    } else {
        jj('.sendrest').hide(1000);
    }
});





    console.log('wishlist Page Init Function Triggered');
}).trigger();






jj("body").on("click", ".js-add-to-fav", function() {
    myApp.alert("You love this post!", "");
});



var mainView = myApp.addView(".view-main", {
    dynamicNavbar: !0,
});


// jj('.claimlisting').on('click', function (e) {
//     jjheader = jj(this);
//     jjcontent = jjheader.next();
//     jjcontent.slideToggle(e);

// });


//jj(".claimlisting").addClass('hello').attr('title', 'world').insertAfter('.something-else');


jj(".popup-splash").on("opened", function() {
    myApp.swiper(".swiper-container", {
        speed: 400,
        pagination: ".swiper-pagination",
        paginationBulletRender: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    });
}), 
jj(document).on("pageAfterAnimation", function(e) {
    if (j(".page-on-center .chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .chart-content").getContext("2d");
        showLineChart(ctx);
    }
    if (j(".page-on-center .line-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .line-chart-content").getContext("2d");
        showLineChartPage(ctx);
    }
    if (j(".page-on-center .bar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .bar-chart-content").getContext("2d");
        showBarChartPage(ctx);
    }
    if (j(".page-on-center .pie-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .pie-chart-content").getContext("2d");
        showPieChartPage(ctx);
    }
    if (j(".page-on-center .doughnut-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .doughnut-chart-content").getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if (j(".page-on-center .radar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .radar-chart-content").getContext("2d");
        showRadarChartPage(ctx);
    }
    if (j(".page-on-center .polar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .polar-chart-content").getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg();
}), 
jj(document).on("pageInit", function(e) {
    var page = e.detail.page;
    j(".zoom").swipebox(), j(".navbar").removeClass("navbar-clear"), "index" !== page.name && "menu" !== page.name && "login" !== page.name && "dashboard-1" !== page.name && "panel" !== page.name || j(".navbar").addClass("navbar-clear"), 
    j(".twitter-content").length > 0 && j(".twitter-content").twittie({
        count: 10
    }), j(".tweet").length > 0 && j(".tweet").twittie({
        count: 1
    }), j(".flickr-content").length > 0 && j(".flickr-content").jflickrfeed({
        limit: 15,
        qstrings: {
            id: "44244432@N03"
        },
        itemTemplate: '<li><a href="{{image_m}}" class="flickr"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    }, function(data) {
        j(".flickr-content li a").swipebox();
    }), j(".js-validate").length > 0 && j("body").on("click", ".js-form-submit", function() {
        var form = j(this).parents("form"), valid = form.valid();
        if ("contact" === page.name && valid) {
            var data = form.serializeObject();
            myApp.showPreloader(), j.post("/email.php", data).done(function(data) {
                myApp.hidePreloader();
                var response = JSON.parse(data);
                response.error ? myApp.alert(response.msg, "") : (myApp.alert(response.msg, ""), 
                form.find("input[type=text], input[type=email], textarea").val(""));
            });
        }
    });
    // Conversation flag
    var conversationStarted = !1, myMessages = myApp.messages(".messages", {
        autoLayout: !0
    }), myMessagebar = myApp.messagebar(".messagebar");
    // Handle message
    jj(".messagebar .link").on("click", function() {
        // Message text
        var messageText = myMessagebar.value().trim();
        // Exit if empy message
        if (0 !== messageText.length) {
            // Empty messagebar
            myMessagebar.clear();
            // Random message type
            var avatar, name, messageType = [ "sent", "received" ][Math.round(Math.random())];
            "received" === messageType && (avatar = "http://lorempixel.com/output/people-q-c-100-100-9.jpg", 
            name = "Kate"), // Add message
            myMessages.addMessage({
                // Message text
                text: messageText,
                // Random message type
                type: messageType,
                // Avatar and name:
                avatar: avatar,
                name: name,
                // Day
                day: conversationStarted ? !1 : "Today",
                time: conversationStarted ? !1 : new Date().getHours() + ":" + new Date().getMinutes()
            }), // Update conversation flag
            conversationStarted = !0;
        }
    });
}), 

j(document).ready(function() {
    if (null !== localStorage.getItem("newOptions") && localStorage.getItem("newOptions") !== !0 || (myApp.popup(".popup-splash"), 
    localStorage.setItem("newOptions", !0)), j(".chart-content").length > 0) {
        var obj = document.querySelector(".chart-content"), ctx = obj.getContext("2d");
        showLineChart(ctx);
    }
    if (j(".line-chart-content").length > 0) {
        var obj = document.querySelector(".line-chart-content"), ctx = obj.getContext("2d");
        showLineChartPage(ctx);
    }
    if (j(".bar-chart-content").length > 0) {
        var obj = document.querySelector(".bar-chart-content"), ctx = obj.getContext("2d");
        showBarChartPage(ctx);
    }
    if (j(".pie-chart-content").length > 0) {
        var obj = document.querySelector(".pie-chart-content"), ctx = obj.getContext("2d");
        showPieChartPage(ctx);
    }
    if (j(".doughnut-chart-content").length > 0) {
        var obj = document.querySelector(".doughnut-chart-content"), ctx = obj.getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if (j(".radar-chart-content").length > 0) {
        var obj = document.querySelector(".radar-chart-content"), ctx = obj.getContext("2d");
        showRadarChartPage(ctx);
    }
    if (j(".polar-chart-content").length > 0) {
        var obj = document.querySelector(".polar-chart-content"), ctx = obj.getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg(), j(".js-toggle-menu").on("click", function() {
        j(this).next().slideToggle(200), j(this).find("span").toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });

   
}), 



/* j(document).ready(function(){

     j(".claimlisting").on("click", function () {
        jheader = j(this);
         jcontent = jheader.next();
       jcontent.slideToggle();
     });
    j(".addexpense").on("click", function(){
         j(".addclaim").fadeIn();
   });
    j(".closeme").on("click", function(){
         j(".addclaim").fadeOut();     
    });

});*/


j.fn.serializeObject = function() {
    var o = {}, a = this.serializeArray();
    return j.each(a, function() {
        void 0 !== o[this.name] ? (o[this.name].push || (o[this.name] = [ o[this.name] ]), 
        o[this.name].push(this.value || "")) : o[this.name] = this.value || "";
    }), o;
};

var defColor = "178, 137, 115", fillColor = "rgba(" + defColor + ", 0.2)", strokeColor = "rgba(" + defColor + ", 1)", pointColor = "rgba(" + defColor + ", 1)", pointStrokeColor = "rgba(255, 255, 255, 1)", pointHighlightFill = "rgba(255, 255, 255, 1)", pointHighlightStroke = "rgba(" + defColor + ", 1)", pointColorHighlight = "rgba(" + defColor + ", 0.5)", defColor2 = "224, 61, 14", fillColor2 = "rgba(" + defColor2 + ", 0.2)", strokeColor2 = "rgba(" + defColor2 + ", 1)", pointColor2 = "rgba(" + defColor2 + ", 1)", pointStrokeColor2 = "rgba(255, 255, 255, 1)", pointHighlightFill2 = "rgba(255, 255, 255, 1)", pointHighlightStroke2 = "rgba(" + defColor2 + ", 1)", pointColorHighlight2 = "rgba(" + defColor2 + ", 0.5)";






function fetchSMSClaim8() {
    
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
      t.executeSql("INSERT INTO smsMaster (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
         
             });  
        var headerOprationBtn;
      t.executeSql('SELECT * FROM smsMaster;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box8').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">SMS date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_"'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto();">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateSms('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishList('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages1('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishList("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages1("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box8");  
           //createExpenseName("expenseName_"+i);
            showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 }  

function parseIncomingSMSForAmount(input){
	var amount= "";
    var amountFound = false;
	if(input.includes("Rs.")){
        var msg = input.split("Rs.")

        var test  =  msg[1];
		var rsExtractStr = test.trim().split(" ");
		amount = rsExtractStr[0];
        amountFound = true;
	}
    
    if(amountFound == false && input.includes("Rs")){
        var msg = input.split("Rs");
        var test  =  msg[1];
		var rsExtractStr = test.trim().split(" ");
		amount = rsExtractStr[0];
    }
	return amount;
}


function expandCollapse(obj) {
    try {
        
        for(var i=0; i<obj.parentNode.childNodes.length; i++) {
            var clName = obj.parentNode.childNodes[i].className;
            if(clName && clName==='opentogglelist') {
                var displayVal = obj.parentNode.childNodes[i].style.display;
                if(displayVal && displayVal==='none') {
                    obj.parentNode.childNodes[i].style.display='block';
                    obj.style.display='none';
                } else if(displayVal) {
                    obj.parentNode.childNodes[i].style.display='none';
                    obj.style.display='block';
                }
                break;
            }
        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}

 function onloadExpense() {
	if (mydb) {
		mydb.transaction(function (t) {
				//t.executeSql("SELECT * FROM accountHeadMst", [], getAccHeadList);
				//t.executeSql("SELECT * FROM currencyMst", [], getCurrencyList);
				t.executeSql("SELECT * FROM expNameMst", [], getExpNameList);
			});
	} else {
         alert(window.lang.translate('Database not found, your browser does not support web sql!'));
	}
 }

 function getAccHeadList(transaction, results) {
	var i;
	var jsonAccHeadArr = [];
	for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindAccHead = new Object();
		jsonFindAccHead["Label"] = row.accountHeadId;
		jsonFindAccHead["Value"] = row.accHeadName;
		jsonAccHeadArr.push(jsonFindAccHead);
	}
	createAccHeadDropDown(jsonAccHeadArr);
}


function getCurrencyList(transaction, results) {
    var i;
	var jsonCurrencyArr = [];

    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindCurrHead = new Object();
		jsonFindCurrHead["Value"] = row.currencyId;
		jsonFindCurrHead["Label"] = row.currencyName;
		
		jsonCurrencyArr.push(jsonFindCurrHead);
	}
	createCurrencyDropDown(jsonCurrencyArr)
}

var jsonExpNameArr = [];
function getExpNameList(transaction, results) {
    var i;
	
	for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindExpNameHead = new Object();

		jsonFindExpNameHead["ExpenseID"] = row.id;
		jsonFindExpNameHead["ExpenseName"] = row.expName;
		
		jsonExpNameArr.push(jsonFindExpNameHead);
	}
}


var jsonArr = [];
function createAccHeadDropDown(jsonAccHeadArr){

    
			if(jsonAccHeadArr != null && jsonAccHeadArr.length > 0){
				for(var i=0; i<jsonAccHeadArr.length; i++ ){
					var stateArr = new Array();
					stateArr = jsonAccHeadArr[i];
					jsonArr.push({id: stateArr.Label,name: stateArr.Value});
				}
			}
			jsonArr.sort(function(a, b){ // sort object by Account Head Name
			var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
			if (nameA < nameB) //sort string ascending
				return -1 
			if (nameA > nameB)
				return 1
			return 0 //default return value (no sorting)
			})
			j("#accountHead").select2({
				data:{ results: jsonArr, text: 'name' },
				minimumResultsForSearch: -1,
                placeholder : "Select Account Head",
				/*initSelection: function (element, callback) {
					callback(jsonArr[1]);
					getExpenseNamesBasedOnAccountHead(jsonArr[1]);
				},*/
				formatResult: function(result) {
					if ( ! isJsonString(result.id))
						result.id = JSON.stringify(result.id);
						return result.name;
				}
			});
			
}


function createExpenseName(cid){
	
	j("#"+cid).select2({
		data:{ results: jsonExpNameArr, text: 'name' },
		minimumResultsForSearch: -1,
        placeholder : "Select Expense Name",
		initSelection: function (element, callback) {
			callback(jsonExpArr[0]);
		},
		formatResult: function(result) {
			if ( ! isJsonString(result.id))
				result.id = JSON.stringify(result.id);
				return result.name;
		}
	}).select2("val","");
}

function createCurrencyDropDown(jsonCurrencyArr){
	var jsonArr = [];
	if(jsonCurrencyArr != null && jsonCurrencyArr.length > 0){
		for(var i=0; i<jsonCurrencyArr.length; i++ ){
			var stateArr = new Array();
			stateArr = jsonCurrencyArr[i];
			
			jsonArr.push({id: stateArr.Value,name: stateArr.Label});
		}
	}
		
	j("#currency").select2({
		data:{ results: jsonArr, text: 'name' },
		placeholder: "Currency",
		minimumResultsForSearch: -1,
		initSelection: function (element, callback) {
					callback(jsonArr[0]);
		},
		formatResult: function(result) {
			if ( ! isJsonString(result.id))
				result.id = JSON.stringify(result.id);
				return result.name;
		}
	}).select2("val",jsonArr[0]);
} 


function updateSms(i,smsId){
    var aa =  document.getElementById('smsAmount_'+i).value;
    if (mydb) {
        var smsDate = document.getElementById('smsDate_'+i).value;
        var smsAmount =  document.getElementById('smsAmount_'+i).value;
        var smsNarration =  document.getElementById('smsNarration_'+i).value;
        
        if (smsDate != "" && smsAmount != "" && smsNarration != "" && smsId != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE smsMaster set smsText ='"+smsNarration+"', smsSentDate ='"+smsDate+"',smsAmount = '"+smsAmount+"' where smsId = "+smsId+";");
				});
                 
            
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
}

function updateBussinesExp(i,smsId){
    var aa =  document.getElementById('smsAmount_'+i).value;
    if (mydb) {
        var smsDate = document.getElementById('smsDate_'+i).value;
        var smsAmount =  document.getElementById('smsAmount_'+i).value;
        var smsNarration =  document.getElementById('smsNarration_'+i).value;
        
        if (smsDate != "" && smsAmount != "" && smsNarration != "" && smsId != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE addExpensetable set smsText ='"+smsNarration+"', smsSentDate ='"+smsDate+"',smsAmount = '"+smsAmount+"' where smsId = "+smsId+";");
				});
                 
            
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
}



function smartSmsSendForApprover(i,smsId){
    var jsonExpenseDetailsArr = [];
				  var busExpDetailsArr = [];
				  expenseClaimDates=new Object;
				  var accountHeadIdToBeSent=''
							  var busExpDetailId = smsId;
							  var jsonFindBE = new Object();
							  var expDate = j(this).find('td.expDate1').text();
							  var expenseDate  = expDate;
							  var currentDate=new Date(expenseDate);
							  //get Start Date
							  if(!expenseClaimDates.hasOwnProperty('minInDateFormat')){
								  expenseClaimDates["minInDateFormat"]=currentDate;
								  expenseClaimDates["minInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.minInDateFormat>currentDate){
									  expenseClaimDates["minInDateFormat"]=currentDate;
									  expenseClaimDates["minInStringFormat"]=expenseDate;
								  }
							  }
							  //get End Date
							  if(!expenseClaimDates.hasOwnProperty('maxInDateFormat')){
								  expenseClaimDates["maxInDateFormat"]=currentDate;
								  expenseClaimDates["maxInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.maxInDateFormat<currentDate){
									  expenseClaimDates["maxInDateFormat"]=currentDate;
									  expenseClaimDates["maxInStringFormat"]=expenseDate;
								  }
							  }

							  jsonFindBE["expenseDate"] = "11/27/2017";
							  //get Account Head
							  var currentAccountHeadID= 1;
			/*				  if(validateAccountHead(accountHeadIdToBeSent,currentAccountHeadID)==false){
								  exceptionMessage="Selected expenses should be mapped under Single Expense Type/Account Head."
									  j('#displayError').children('span').text(exceptionMessage);
								  j('#displayError').hide().fadeIn('slow').delay(3000).fadeOut('slow');
								  requestRunning = false;
								  accountHeadIdToBeSent="";
							  }else{*/
								 // accountHeadIdToBeSent=currentAccountHeadID

								  jsonFindBE["accountCodeId"] = 1;
								  jsonFindBE["ExpenseId"] =6;
								  jsonFindBE["ExpenseName"] = "";
								  jsonFindBE["fromLocation"] ="";
								  jsonFindBE["toLocation"] = "";
                                  var smsDate = document.getElementById('smsDate_'+i).value;
                                  var smsAmount =  document.getElementById('smsAmount_'+i).value;
                                  var smsNarration =  document.getElementById('smsNarration_'+i).value;
    
    
								  jsonFindBE["narration"] =document.getElementById('smsNarration_'+i).value;
                                  
								  //jsonFindBE["isErReqd"] = j(this).find('td.isErReqd').text();
								 // jsonFindBE["ERLimitAmt"] = j(this).find('td.ERLimitAmt').text();

								jsonFindBE["perUnitException"] = 'N';

								  //if(j(this).find('td.expUnit').text()!="" ) {
									  //jsonFindBE["units"] = j(this).find('td.expUnit').text();
								  //}
								  
								  jsonFindBE["wayPoint"] = "1";
								
								  jsonFindBE["amount"] = document.getElementById('smsAmount_'+i).value;
								  jsonFindBE["currencyId"] = "1";

								 var dataURL =  "";

								  //For IOS image save
								  var data = dataURL.replace(/data:image\/(png|jpg|jpeg);base64,/, '');

								  //For Android image save
								  var data = dataURL.replace(/data:base64,/, '');

								 jsonFindBE["imageAttach"] = data; 

                                    expenseClaimDates["maxInDateFormat"]=currentDate;
								    expenseClaimDates["maxInStringFormat"]= "11/27/2017";
    				                expenseClaimDates["minInDateFormat"]=currentDate;
								    expenseClaimDates["minInStringFormat"]="11/27/2017";
								  jsonExpenseDetailsArr.push(jsonFindBE);
    

								  busExpDetailsArr.push(busExpDetailId);
								  requestRunning = true;
							  //}
                sendForApprovalBusinessDetailsA(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
						  	 sendForApprovalBusinessDetails(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						  }
    
}

//  SMS changes
function saveSMS(sms){
	j('#loading_Cat').show();
	if (mydb) {
		//save incoming sms
	    var smsMsg = sms.body;
	    //alert("sms save "+sms);
		var senderAddress = ""+sms.address;	
		senderAddress = senderAddress.toLowerCase();	
		var smsSentDate = getFormattedDateFromMillisec(parseInt(sms.date_sent));
		var smsAmount = parseIncomingSMSForAmount(smsMsg);
		if (smsMsg != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO smsMaster (smsText,senderAddr,smsSentDate,smsAmount) VALUES (?,?,?,?)", 
												[smsMsg,senderAddress,smsSentDate,smsAmount]);
				});
	            j('#loading_Cat').hide();
	        } else {
	        	j('#loading_Cat').hide();
	        }
	} else {
        alert("db not found, your browser does not support web sql!");
    }
}

function smartSmsSendForApprover1(){
    
    			var jsonExpenseDetailsArr = [];
				  var busExpDetailsArr = [];
				  expenseClaimDates=new Object;
				  if(requestRunning){
						  	return; 
	    					}
				  var accountHeadIdToBeSent=''
							  var busExpDetailId = j(this).find('td.busExpId').text();
							  var jsonFindBE = new Object();
							  var expDate = j(this).find('td.expDate1').text();
							  var expenseDate  = expDate;
							  var currentDate=new Date(expenseDate);
							  //get Start Date
							  if(!expenseClaimDates.hasOwnProperty('minInDateFormat')){
								  expenseClaimDates["minInDateFormat"]=currentDate;
								  expenseClaimDates["minInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.minInDateFormat>currentDate){
									  expenseClaimDates["minInDateFormat"]=currentDate;
									  expenseClaimDates["minInStringFormat"]=expenseDate;
								  }
							  }
							  //get End Date
							  if(!expenseClaimDates.hasOwnProperty('maxInDateFormat')){
								  expenseClaimDates["maxInDateFormat"]=currentDate;
								  expenseClaimDates["maxInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.maxInDateFormat<currentDate){
									  expenseClaimDates["maxInDateFormat"]=currentDate;
									  expenseClaimDates["maxInStringFormat"]=expenseDate;
								  }
							  }

							  jsonFindBE["expenseDate"] = expenseDate;
							  //get Account Head
							  var currentAccountHeadID=j(this).find('td.accHeadId').text();

							  if(validateAccountHead(accountHeadIdToBeSent,currentAccountHeadID)==false){
								  exceptionMessage="Selected expenses should be mapped under Single Expense Type/Account Head."
									  j('#displayError').children('span').text(exceptionMessage);
								  j('#displayError').hide().fadeIn('slow').delay(3000).fadeOut('slow');
								  requestRunning = false;
								  accountHeadIdToBeSent="";
							  }else{
								  accountHeadIdToBeSent=currentAccountHeadID

								  jsonFindBE["accountCodeId"] = j(this).find('td.accountCodeId').text();
								  jsonFindBE["ExpenseId"] =j(this).find('td.expNameId').text();
								  jsonFindBE["ExpenseName"] = j(this).find('td.expName').text();
								  jsonFindBE["fromLocation"] = j(this).find('td.expFromLoc1').text();
								  jsonFindBE["toLocation"] = j(this).find('td.expToLoc1').text();
								  jsonFindBE["narration"] = j(this).find('td.expNarration1').text();

								  jsonFindBE["isErReqd"] = j(this).find('td.isErReqd').text();
								  jsonFindBE["ERLimitAmt"] = j(this).find('td.ERLimitAmt').text();

								  jsonFindBE["perUnitException"] = j(this).find('td.isEntitlementExceeded').text();

								  if(j(this).find('td.expUnit').text()!="" ) {
									  jsonFindBE["units"] = j(this).find('td.expUnit').text();
								  }
								  
								  jsonFindBE["wayPoint"] = j(this).find('td.wayPoint').text();
								
								  jsonFindBE["amount"] = j(this).find('td.expAmt1').text();
								  jsonFindBE["currencyId"] = j(this).find('td.currencyId').text();

								  var dataURL =  j(this).find('td.busAttachment').text();

								  //For IOS image save
								  var data = dataURL.replace(/data:image\/(png|jpg|jpeg);base64,/, '');

								  //For Android image save
								  //var data = dataURL.replace(/data:base64,/, '');

								  jsonFindBE["imageAttach"] = data; 

								  jsonExpenseDetailsArr.push(jsonFindBE);

								  busExpDetailsArr.push(busExpDetailId);
								  requestRunning = true;
							  }
						  
						if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
						  	 sendForApprovalBusinessDetails(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						  }

}

function sendForApprovalBusinessDetailsA(jsonBEArr,busExpDetailsArr,accountHeadID){
	 var jsonToSaveBE = new Object();
	 jsonToSaveBE["employeeId"] = window.localStorage.getItem("EmployeeId");
	 jsonToSaveBE["expenseDetails"] = jsonBEArr;
	 jsonToSaveBE["startDate"]=expenseClaimDates.minInStringFormat;
	 jsonToSaveBE["endDate"]=expenseClaimDates.maxInStringFormat;
	 jsonToSaveBE["DelayAllowCheck"]=false;
	 jsonToSaveBE["BudgetingStatus"]=window.localStorage.getItem("BudgetingStatus");
	 jsonToSaveBE["accountHeadId"]="2";
	 jsonToSaveBE["ProcessStatus"] = "1";
	 jsonToSaveBE["title"]= window.localStorage.getItem("FirstName")+"/"+jsonToSaveBE["startDate"]+" to "+jsonToSaveBE["endDate"];
	
     var pageRefSuccess='../../'+defaultPagePath+'success.html';
     var pageRefFailure='../../'+defaultPagePath+'failure.html';
	callSendForApprovalServiceForBEA(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure);
	 
}


function callSendForApprovalServiceForBEA(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure){
var headerBackBtn=defaultPagePath+'backbtnPage.html';
j.ajax({
				  url: window.localStorage.getItem("urlPath")+"SynchSubmitBusinessExpense",
				  type: 'POST',
				  dataType: 'json',
				  crossDomain: true,
				  data: JSON.stringify(jsonToSaveBE),
				  success: function(data) {
				  	if(data.Status=="Success"){
					  	if(data.hasOwnProperty('DelayStatus')){
					  		setDelayMessage(data,jsonToSaveBE,busExpDetailsArr);
					  		 j('#loading_Cat').hide();
					  	}else{
						 successMessage = data.Message;
						 for(var i=0; i<busExpDetailsArr.length; i++ ){
							var businessExpDetailId = busExpDetailsArr[i];
                             discardMessagesA(businessExpDetailId);
							//deleteSelectedExpDetails(businessExpDetailId);
						 }
						 requestRunning = false;
						 j('#loading_Cat').hide();
						 //j('#mainHeader').load(headerBackBtn);

                          alert(successMessage);
                            location.reload();
						 //j('#mainContainer').load(pageRefSuccess);
						// appPageHistory.push(pageRef);
						}
					}else if(data.Status=="Failure"){
					 	successMessage = data.Message;
						requestRunning = false;
					 	j('#loading_Cat').hide();
						j('#mainHeader').load(headerBackBtn);
					 	j('#mainContainer').load(pageRefFailure);
					 }else{
						 j('#loading_Cat').hide();
						successMessage = "Oops!! Something went wrong. Please contact system administrator.";
						j('#mainHeader').load(headerBackBtn);
					 	j('#mainContainer').load(pageRefFailure);
					 }
					},
				  error:function(data) {
					j('#loading_Cat').hide();
					requestRunning = false;
                    alert(window.lang.translate('Error: Oops something is wrong, Please Contact System Administer'));
				  }
			});
}


function discardMessagesA(smsID){
			mydb.transaction(function (t) {
				t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsID]);
			});
          location.reload();
		}




function discardMessages1(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}


function discardMessages3(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM wishListForBussExpense  WHERE busExpId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}




function discardMessages2(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}

function saveBusinessDetailsInWishList(i,smsId){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('smsNarration_'+i).value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt = document.getElementById('smsAmount_'+i).value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsId]);

			});

          location.reload();

                    alert("Added to wishlist.");

		/*}else{
			return false;
		}*/
    } else {
        alert(window.lang.translate('Database not found, your browser does not support web sql!'));
        
    }
}


function validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id){
	if(exp_date == ""){
        alert(window.lang.translate('Expense Date is invalid'));
		return false;
	}
	if(acc_head_id == "-1"){
        alert(window.lang.translate('Account Head is invalid'));
		return false;
	}
	if(exp_name_id == "-1"){
        alert(window.lang.translate('Expense Name is invalid'));
		return false;
	}

	if(isZero(exp_amt,"Amount")==false){
		document.getElementById("expAmt").value = "";
		return false;
	}


	if(exp_narration == ""){
        alert(window.lang.translate('Narration is invalid'));
		return false;
	}
	
		

		if(exp_amt != ""){
			if(isOnlyNumeric(exp_amt,"Amount")==false)
			{
				return false;
			}
			
		}else{
            alert(window.lang.translate('Amount is invalid'));
			return false;
		}
	
	if(currency_id == "-1"){
        alert(window.lang.translate('Currency Name is invalid'));
		return false;
	}
	
		return true;
	}

function fetchDataFromWishListA() {
    mydb.transaction(function(t) {

      t.executeSql('SELECT * FROM wishListForBussExpense;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box9').empty(); 
/*        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img src="images/Uber-Logo-120x120.jpg" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">SMS date : '+row.expDate+' | Amount Rs. : '+row.expAmt+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.expNarration);
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
            var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send for approval').appendTo(div17);  
            var a2 = j('<a></a>').text('Add to wishlist').attr({ class: ["action-blue js-down"].join(' ') }).appendTo(div17);  
            var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages1("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box9");
         
            }*/
              
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["selectli(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="images/dummy-image.png" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.expDate+' | Amount : '+row.expAmt+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.expNarration);
            
          var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_"'+i+'" src="images/dummy-image.png" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto();">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);

            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.expDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.expAmt+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.expNarration+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateSms('+i+','+row.busExpId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable); 
             var a0 = j('<a></a>').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["hideNow(this)"].join(' ')}).text('Edit').appendTo(div17);  
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.busExpId+");"].join(' ')}).text('Send').appendTo(div17);   
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages3("+row.busExpId+");"].join(' ')}).appendTo(div17);  
            var divA = j('<div></div>').attr({ class: ["closemenow"].join(' '),onclick : ["reload();"].join(' ') }).appendTo(div8);
             j(divA).append('<img id="" src="images/closeme.png" alt ="">');
                                            
            mytable.appendTo("#box9");  
           //createExpenseName("expenseName_"+i);
            //showPic(i,row.smsAttachment);
            }  
     }     
          
                });
         });
}
function changePage(){
    window.location.href = 'add-to-wishlist.html';
}

function reload(){

    location.reload();
}
function changePage1(){
    window.location.href = 'index.html';
}

function hide(){
  j('.ontent-block tabshead').hide(); 
}

function hideOn(obj) {
       
    try {
        for(var i=0; i<obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes.length; i++) {
            var clName = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].className;
            if(clName && clName==='item-content claimlisting') {
                var displayVal = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display;
                if(displayVal && displayVal==='none') {
                    obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display='block';
                    obj.parentNode.parentNode.parentNode.parentNode.style.display='none';
                } else if(displayVal) {
                    obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display='none';
                    obj.parentNode.parentNode.parentNode.parentNode.style.display='block';
                }
                break;
            }
        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}

function goToHome(){
    window.location.href = 'index.html';
}


function takePhoto(){
/*    CameraPreview.takePicture(function(base64PictureData){
   code here 
        onTakePhotoDataSuccess(base64PictureData);
    });*/
    
    
		navigator.camera.getPicture(onTakePhotoDataSuccess(), onTakeFail, { quality: 10,
            destinationType: 0 });
    
    

/*
       navigator.camera.getPicture(function(imageData) {
    onTakePhotoDataSuccess(imageData, i),onTakeFail;
}, null, options);

*/

    
    
		//camerastatus = status;    
    
}

function onTakeFail(message) {
        
    }

function onTakePhotoDataSuccess(imageData) {   
        var fileTempCamera = "data:image/jpeg;base64," + imageData;
        show_1.src = "data:image/jpeg;base64," + imageData;
		attach_1.src = "data:image/jpeg;base64," + imageData;
		fileTempGalleryBE ="";
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE smsMaster set smsAttachment ='"+fileTempCamera+"' where smsId = 1;");
				});
            } else {
        alert("db not found, your browser does not support web sql!");
    }
    
    
    }

function showPic(i,image){
    var show = "show_"+i;
    var attach = "attach_"+i;
     show.src = image;
     attach.src =image;
}


function addExpense(){
     window.location.href = 'addExpense.html';

        jj('.addclaim').show();
}

function addVoiceExpense(){
     window.location.href = 'voiceRead.html';
}


function saveSMS(sms){

	if (mydb) {
		//save incoming sms
	    var smsMsg = sms.body;
	    //alert("sms save "+sms);
		var senderAddress = ""+sms.address;	
		senderAddress = senderAddress.toLowerCase();	
		var smsSentDate = getFormattedDateFromMillisec(parseInt(sms.date_sent));
		var smsAmount = parseIncomingSMSForAmount(smsMsg);
		if (smsMsg != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO addExpensetable (smsText,senderAddr,smsSentDate,smsAmount,smsAttachment) VALUES (?,?,?,?,?)", 
												[smsMsg,senderAddress,smsSentDate,smsAmount,'images/dummy-image.png']);
				});

	        } else {
	        }
	} else {
        alert("db not found, your browser does not support web sql!");
    }
}


function addTobussinesExpense(){
    
	if (mydb) {
		//save incoming sms
        var smsDate = document.getElementById('expDate').value;
        var smsAmount =  document.getElementById('amount').value;
        var smsNarration =  document.getElementById('narration').value;
        var senderAddress ="";
        
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO addExpensetable (smsText,senderAddr,smsSentDate,smsAmount,smsAttachment) VALUES (?,?,?,?,?)", [smsNarration,senderAddress,smsDate,smsAmount,'images/dummy-image.png']);
				});
	            j("#addClaims").hide("slow");
                 alert("Expense added Successfully.");
            location.reload();

	} else {
        alert("db not found, your browser does not support web sql!");
    }
}
    
function fetchBussiness9() {
    
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
      t.executeSql("INSERT INTO addExpensetable (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
         
             });  
        var headerOprationBtn;
      t.executeSql('SELECT * FROM addExpensetable;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box10').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_"'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto();">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateBussinesExp('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishListkkk('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages2('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishListkkk("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages2("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box10");  
           //createExpenseName("expenseName_"+i);
           // showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 } 



function saveBusinessDetailsInWishListk(){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('narration').value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt =  document.getElementById('amount').value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								

			});

         mydb.transaction(function (t) {
             
             
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});
          location.reload();


		/*}else{
			return false;
		}*/
    } else {
        alert(window.lang.translate('Database not found, your browser does not support web sql!'));
        
    }
}



function saveBusinessDetailsInWishListkkk(i,smsId){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('smsNarration_'+i).value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt = document.getElementById('smsAmount_'+i).value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								
               t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});

            
          location.reload();

            alert("Added to wishlist.");
		/*}else{
			return false;
		}*/
    } else {
        alert(window.lang.translate('Database not found, your browser does not support web sql!'));
        
    }
}


function chooseOption(imgObj) {
	if (window.confirm("Send to OCR?") == true) {
        document.getElementById("imgProcessingId").textContent  = "sending your reciept to OCR for processing...";
		setTimeout(delayFunOK, 2000);
	} else {
        document.getElementById("imgProcessingId").textContent  = "saving your reciept to saved list...";
		setTimeout(delayFunCancel, 2000);
	}
}

function delayFunOK() {
    document.getElementById("imgProcessingId").textContent  = "Reciept Processed successfully.";
    setTimeout(function() {document.getElementById("imgProcessingId").textContent  = "";}, 1000);
    document.getElementById("receiptClaim1").style.display = "block";
}

function delayFunCancel() {
    document.getElementById("imgProcessingId").textContent  = "Reciept saved successfully to your saved list.";
    setTimeout(function() {document.getElementById("imgProcessingId").textContent  = "";}, 1000);
}



try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteTextarea = $('amount');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
var notes = getAllNotes();
renderNotes(notes);



/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};

recognition.onstart = function() { 
  instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}



/*-----------------------------
      App buttons and input 
------------------------------*/

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

$('#save-note-btn').on('click', function(e) {
  recognition.stop();

  if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
    saveNote(new Date().toLocaleString(), noteContent);

    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());
    noteTextarea.val('');
    instructions.text('Note saved successfully.');
  }
      
})


notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);

  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();
    readOutLoud(content);
  }

  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }
});



/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}



/*-----------------------------
      Helper Functions 
------------------------------*/

function renderNotes(notes) {
  var html = '';
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
        <p class="header">
          <span class="date">${note.date}</span>
          <a href="#" class="listen-note" title="Listen to Note">Listen to Note</a>
          <a href="#" class="delete-note" title="Delete">Delete</a>
        </p>
        <p class="content">${note.content}</p>
      </li>`;    
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}


function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}


function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return notes;
}


function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime); 
}

var a = 0;
function selectli(obj){
    
    if(j(obj).hasClass("selected")){ 
					j(obj).removeClass('selected');
                    a=a-1;
                  if(a === 0){
                    j('.sendrest').hide();
                  }
				}else{
					j(obj).addClass('selected');
                // j(this).toggleClass('selected');
                 j('.sendrest').show();
                    a=a+1;
				}					
    
}


function hideNow(obj) {
    try {
        for(var i=0; i<obj.parentNode.parentNode.childNodes[0].childNodes.length; i++) {
            var clName = obj.parentNode.parentNode.childNodes[0].childNodes[i].className;
            if(clName && clName==='item-content claimlisting') {
               // var displayVal = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display;

                     obj.parentNode.parentNode.childNodes[0].childNodes[i].style.display='none';
                     obj.parentNode.parentNode.childNodes[0].childNodes[1].style.display='block';
          
                break;
            }
        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}

function addToVoicebussinesExpense(){
    
	if (mydb) {
		//save incoming sms
        var smsDate = document.getElementById('expDate').value;
        var smsAmount =  document.getElementById('amount').value;
        var smsNarration =  document.getElementById('narration').value;
        var senderAddress ="";
        
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO addVoiceExpense (smsText,senderAddr,smsSentDate,smsAmount,smsAttachment) VALUES (?,?,?,?,?)", [smsNarration,senderAddress,smsDate,smsAmount,'images/dummy-image.png']);
				});
	            j("#addClaims").hide("slow");
                 alert("Expense added Successfully.");
            location.reload();

	} else {
        alert("db not found, your browser does not support web sql!");
    }
}



function saveVoiceBusinessDetailsInWishList(){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('narration').value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt =  document.getElementById('amount').value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								

			});

         mydb.transaction(function (t) {
             
             
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});
          location.reload();


		/*}else{
			return false;
		}*/
    } else {
        alert(window.lang.translate('Database not found, your browser does not support web sql!'));
        
    }
}



function fetchBussiness10() {
    
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
      t.executeSql("INSERT INTO addVoiceExpense (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
         
             });  
        var headerOprationBtn;
      t.executeSql('SELECT * FROM addVoiceExpense;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box11').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_"'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto();">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateBussinesExp('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishListkkk('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages2('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishListkkk("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages2("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box11");  
           //createExpenseName("expenseName_"+i);
           // showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 } 