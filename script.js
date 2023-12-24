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
                Conformation message will be sent to your email
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
