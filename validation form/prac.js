

function check(){
    const sub = document.querySelector(".cl1");
    const na = document.querySelector(".name");

    const ph = document.querySelector(".phone");
    const em = document.querySelector(".email");
    const pa = document.querySelector(".pass");
    const cpa = document.querySelector(".c-pass");
    let string="";

   
    console.log(na.value.length);
    console.log(ph.value.length );
    console.log(pa.value == cpa.value);
    console.log(em.value.includes("@"));


    if((na.value.length >= 5) && (ph.value.length == 10) && (ph.value != 1234567890) && em.value.includes("@") && pa.value == cpa.value ){
        console.log("ok");
    }
    else{
        if(na.value.length < 5){
            window.alert("name shoulde at least be mare than 5 character");
            na.focus();
            return false;
        }
        else if(em.value.includes("@")){
            window.alert("email should include '@'");
            em.focus();
            return false;
        }
        else if((ph.value.length == 10) || (ph.value != 1234567890)){
            window.alert("phone number should be 10 digits long and it should not be 1234567890");
            ph.focus();
            return false;
        }
        
        
        else if(pa.value == cpa.value ){
            window.alert("password and confirm password should be the same");
            cpa.focus();
            return false;
        }
    }

   
}