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
function order(){
    alert("Please fill the form correctly!"+"\n"+"Conformation message will be sent to your email"+"\n"+"For any ordering issues only"+"\n"+"Contact: +91 6383577376 , +91 9095779297"+"\n"+"[Not for any other purpose]");
   
}
