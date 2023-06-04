var myIndex = 0;
carousel();

function carousel() {
    // var i;
    var x = document.getElementsByClassName("slide");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

var  count = 0;
var  count2 = 0;
var  count3 = 0;
        window.onload = function(){
            var y = setInterval(() =>{
                count +=1;
                if (count == 300){
                    clearInterval(y);
                }
                document.getElementById('dis').innerHTML = count;
            },100);

            var k = setInterval(() =>{
                count2 +=1;
                if (count2 == 900){
                    clearInterval(k);
                }
                document.getElementById('dis2').innerHTML = count2;
            },100);

            var h = setInterval(() =>{
                count3 +=1;
                if (count3 == 900){
                    clearInterval(h);
                }
                document.getElementById('dis3').innerHTML = count3;
            },100);
        }

        // }else if (count == 900){
        //           clearInterval(y);
        // }
        // document.getElementById('ddis').innerHTML = count;
        // else{

        // }
       