
/* var check = document.getElementById("check");
//console.log(check);

check.onclick = function (){

    if(check.checked){

        var date = new Date(); 
        date.setDate(date.getHours+5); 
        //console.log(date);
                                            //각국의 시간을 통일하기위해서
        var cookie ="xxx=aaa123; expires=" + date.toUTCString()+";";    
        document.cookie = cookie;
        
        window.close();

    }
    
}
 */

function addCookie(name, value){

    //시간 설정
    var date = new Date();
    date.setDate(date.getDate() + 1); //
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    console.log(date);

    //쿠키 생성
    var cookie = "";
    cookie += name + "=" + value +"; "; 
    cookie +="expires=" + date.toUTCString()+"; path=/";

    document.cookie = cookie;

}

//쿠키 확인하기
function getCookie(name){
    
    var arr = document.cookie.split('; ');

    if(arr.length != 0){

        for(var i =0; i < arr.length; i++){

            //-1이 반환되면 없다는 뜻인데 그 반대니까 있다면,
            if(arr[i].indexOf(name + "=") != -1){

                return true;//쿠키가 있다는 뜻 , true를 반환한다.
            }
        }
    }


}