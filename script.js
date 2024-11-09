
let count = 0;
function guidelines(){
    let gui = document.getElementById('gui');
    let but = document.getElementById('butg');
    if(count == 0){
    gui.style.display = "block";
    gui.innerHTML = `<br><div class = "head"><u>GUIDELINES</u></div><br>

This service is exclusively available for hostel 
residents every Saturday. To ensure a smooth experience, 
please refrain from fake orders and respect the platform's purpose. 
Your cooperation creates a positive environment for everyone. 
Enjoy your convenient food ordering!<br><br>`;
    butg.innerHTML = "CLOSE";
    count+=1;
    }
    else{
        gui.style.display = "none";
        butg.innerHTML = "READMORE";
        count-=1;
    }}

function order(link){
    const b= link;
   swal({title:"Note!",
          text:`Please fill the form correctly
                For any ordering issues only
                Contact: +91 6383577376 , +91 9095779297
                [Not for any other purpose]


                Redirecting in 3 seconds...`,
        
           
          });
    setTimeout(redirect,3000);
    function redirect(){
        console.log("Redirecting");
        window.location.href= b;
}}

const a = [0,1,0,1];
// 0 - #Hotel_1, 1 - #Hotel_2, 2 - #Hotel_3,3 - #Hotel_4
console.log("Automation - ON");
setInterval(automate,1000);
function automate(){
    const d = new Date();
    let day = d.getDay();
    let Hours = d.getHours();
    let min = d.getMinutes();
    let pand_open = document.getElementById('pan_open'); 
    let pand_clo = document.getElementById('pan_clo');
    let taj_open = document.getElementById('taj_open'); 
    let taj_clo = document.getElementById('taj_clo');
    let pot_open = document.getElementById('pot_open');
    let pot_clo = document.getElementById('pot_clo');
    let rem_open = document.getElementById('rem_open');
    let rem_clo = document.getElementById('rem_clo');
    let rem1_open = document.getElementById('rem1_open');
    let rem1_clo = document.getElementById('rem1_clo');
    let rem2_open = document.getElementById('rem2_open');
    let rem2_clo = document.getElementById('rem2_clo');

    if(day == 6){
        if(Hours >= 15){
            if(a[0] == 1){
                if((Hours >= 17)&&(min>=30)){
                    pand_clo.style.display = "inline-block";
                    pand_open.style.display = "none";
                }
                else if(Hours > 17){
                    pand_clo.style.display = "inline-block";
                    pand_open.style.display = "none";
                }
                else{
                    pand_open.style.display = "inline-block";
                    pand_clo.style.display = "none";
                }
            }
            if(a[1] == 1){
                if((Hours >= 18)&&(min>=30)){
                    taj_clo.style.display = "inline-block";
                    taj_open.style.display = "none";
                }
                else if(Hours > 18){
                    taj_clo.style.display = "inline-block";
                    taj_open.style.display = "none";
                }
                else{
                    taj_open.style.display = "inline-block";
                    taj_clo.style.display = "none";
                }
            }
            if(a[2] == 1){
                if((Hours >= 17)&&(min>=30)){
                    pot_clo.style.display = "inline-block";
                    pot_open.style.display = "none";
                }
                else if(Hours > 17){
                    pot_clo.style.display = "inline-block";
                    pot_open.style.display = "none";
                }
                else{
                    pot_open.style.display = "inline-block";
                    pot_clo.style.display = "none";
                }
            }
            if(a[3] == 1){
                if(Hours >= 18){
                    rem_clo.style.display = "inline-block";
                    rem_open.style.display = "none";
                    rem1_clo.style.display = "inline-block";
                    rem1_open.style.display = "none";
                    rem2_clo.style.display = "inline-block";
                    rem2_open.style.display = "none";
                }
                else{
                    rem_open.style.display = "inline-block";
                    rem_clo.style.display = "none";
                    rem1_open.style.display = "inline-block";
                    rem1_clo.style.display = "none";
                    rem2_open.style.display = "inline-block";
                    rem2_clo.style.display = "none";
                }
            }
           
            
        }
        else{
            pand_clo.style.display = "inline-block";
            pand_open.style.display = "none";
            taj_clo.style.display = "inline-block";
            taj_open.style.display = "none";
            pot_clo.style.display = "inline-block";
            pot_open.style.display = "none";
            rem_clo.style.display = "inline-block";
            rem_open.style.display = "none";
            rem1_clo.style.display = "inline-block";
            rem1_open.style.display = "none";
            rem2_clo.style.display = "inline-block";
            rem2_open.style.display = "none";
        }

    }
    else{
        pand_clo.style.display = "inline-block";
        pand_open.style.display = "none";
        taj_clo.style.display = "inline-block";
        taj_open.style.display = "none";
        pot_clo.style.display = "inline-block";
        pot_open.style.display = "none";
        rem_clo.style.display = "inline-block";
        rem_open.style.display = "none";
        rem1_clo.style.display = "inline-block";
        rem1_open.style.display = "none";
        rem2_clo.style.display = "inline-block";
        rem2_open.style.display = "none";
    }
    

}
