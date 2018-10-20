function readmore1() {
	var cl = document.getElementById("bt1");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC1() {
	var cl = document.getElementById("bt1");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function readmore2() {
	var cl = document.getElementById("bt2");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC2() {
	var cl = document.getElementById("bt2");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function readmore3() {
	var cl = document.getElementById("bt3");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC3() {
	var cl = document.getElementById("bt3");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function readmore4() {
	var cl = document.getElementById("bt4");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC4() {
	var cl = document.getElementById("bt4");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function readmore5() {
	var cl = document.getElementById("bt5");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC5() {
	var cl = document.getElementById("bt5");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function readmore6() {
	var cl = document.getElementById("bt6");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#95db46";
	
}
function readmoreC6() {
	var cl = document.getElementById("bt6");
	cl.style.color = "#fff";
	cl.style.backgroundColor= "#fff";
	
}

function calC() {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var age = document.getElementById("age").value;
	
	var male =  66+((13.7*weight)+(5*height)-(6.8*age));	
	var female = 665+((9.6*weight)+(1.8*height)-(4.7*age));
	var ch = 0;
	var n = document.getElementById("num");
	n.innerHTML=0;

	var mCh =document.getElementById("male").checked;
	var fmCh =document.getElementById("female").checked;

	if(mCh==true){
		ch = male;
	}else if(fmCh==true){
	 	ch = female;
	}

	
    var i = 0;
    var interval = setInterval(function(){ 
        if (i >= ch) {
        	clearInterval(interval)
        }
        n.innerHTML = i; 
        i=i+30;
    }, 
    0);
}
function calBMI() {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var res =0;
	var Heimet =parseFloat(height/100);
	res = weight/ (Heimet*Heimet) ;
	var n = document.getElementById("num");
	n.innerHTML=0;
	n.innerHTML = res.toFixed(2) ;


	var row1 = document.getElementById("row1");
	var row2 = document.getElementById("row2");
	var row3 = document.getElementById("row3");
	var row4 = document.getElementById("row4");
	var row5 = document.getElementById("row5");
	
	row1.style.backgroundColor = "#8f8f8f";
	row2.style.backgroundColor = "#8f8f8f";
	row3.style.backgroundColor = "#8f8f8f";
	row4.style.backgroundColor = "#8f8f8f";
	row5.style.backgroundColor = "#8f8f8f";

	if(res>=30){
		row5.style.backgroundColor = "#e74c3c";	
			
	}else if(res>=25){
		row4.style.backgroundColor = "#f1c40f";
		
	}else if(res>=23){
		row3.style.backgroundColor = "#2ecc71";	
		
	}else if(res>=18.50){

		row2.style.backgroundColor = "#e67e22";
		
	}else if(res<=18.50){
		row1.style.backgroundColor = "#e74c3c";
		
	}
	


}



var httpRequest;
var key ="&key=AIzaSyDzEqfGn8x4aIWR7x5eq6NLeHmSXgdSnis"
var pix1 ="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
function makeRequest() {
	httpRequest = new XMLHttpRequest();
	var keyword = document.getElementById("keyword").value;
	url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+keyword+key;
	httpRequest.open('GET', url);
	httpRequest.onreadystatechange = alertContents;
	httpRequest.send();
}
function alertContents() {

	var reTx = document.getElementById("reTx");
	reTx.style.color = "#4e4e4e";
	//  เข้าถึงกล่องใหญ่
	var bigAll = document.getElementById("bigAll");


	if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
		var placeObj = JSON.parse(httpRequest.responseText);
		for(i=0; i<placeObj.results.length; i++) {



			boxRes = document.createElement("div");
			boxRes.className = "boxRes"+i;
			boxRes.id = "boxRes"+i;

			var row = document.createElement("div");
			row.className = "row"+i;
			row.id = "row"+i;

			var photo = document.createElement("div");
			photo.className = "photo"+i;
			photo.id = "photo"+i;


			var head = document.createElement("div");
			head.className = "head"+i;
			head.id = "headBox"+i;

			var des = document.createElement("div");
			des.className = "des"+i;
			des.id = "des"+i;

			var type = document.createElement("div");
			type.className = "type"+i;
			type.id = "type"+i;

			//เพิ่ม div 

			bigAll.appendChild(boxRes);

			var boxResA = document.getElementById("boxRes"+i);
			boxResA.appendChild(row);

			var rowB = document.getElementById("row"+i);
			rowB.appendChild(photo);
			rowB.appendChild(head);
			rowB.appendChild(des);
			rowB.appendChild(type);

			// ----------รูป------------------------------

			var photo = document.getElementById("photo"+i);
			var head = document.getElementById("headBox"+i);
			var des = document.getElementById("des"+i);
			var type = document.getElementById("type"+i);

			var photoImg = document.createElement("img");
			photoImg.id = "img"+i;	
			var head5 = document.createElement("h5");
			head5.id = "head"+i;	
			var desP = document.createElement("p");
			desP.id = "desP"+i;
			var typeP = document.createElement("p");
			typeP.id = "typeP"+i;

			
			
			photoImg.src  = pix1+placeObj.results[i].photos[0].photo_reference+key;
			head5.innerHTML =placeObj.results[i].name;
			desP.innerHTML = placeObj.results[i].formatted_address;
			typeP.innerHTML = "ประเภท : "+ placeObj.results[i].types[0]+" , "+ placeObj.results[i].types[1];

			photo.appendChild(photoImg);
			head.appendChild(head5);
			des.appendChild(desP);
			type.appendChild(typeP);


			// boxResA.style.width= "960px";
			// boxResA.style.height= "220px";
			// boxResA.margin= "auto";
			// boxResA.marginRight= "0px";

			rowB.style.width= "960px";
			rowB.style.height= "260px";
			rowB.margin = "auto";

			im=document.getElementById("img"+i);
			

			im.style.float ="left";
			im.style.width ="310px";
			im.style.height ="205px";
			


			h5=document.getElementById("head"+i);
			
			h5.style.display ="inline-block";
			h5.style.width ="300px";
			h5.style.fontSize ="22px";
			h5.style.textAlign ="center";
			h5.style.marginTop ="0px";
			h5.style.marginBottom ="0px";

			dP=document.getElementById("desP"+i);
			dP.style.marginTop ="0px";
			dP.style.display ="inline-block";
			dP.style.width ="300px";
			dP.style.marginLeft ="48px";

			tP=document.getElementById("typeP"+i);
			
			tP.style.display ="inline-block";
			tP.style.width ="300px";
			tP.style.marginLeft ="48px";
			tP.style.marginTop ="6px";
			tP.style.color= "#9f9f9f";
			tP.style.fontStyle="italic";

			
		}

	

	}
}




