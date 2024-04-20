let input=document.getElementById("input")
input.max=new Date().toISOString().split("T")[0]
let calcu_btn=document.getElementById("calculate_btn")
let currentage=document.getElementById("age")
 
calcu_btn.addEventListener("click",()=>{
    let birthdate=new Date(input.value)

    let y1=birthdate.getFullYear();
    let m1=birthdate.getMonth()+1;
    let d1=birthdate.getDate();
    
    let todaydate=new Date()

    let y2=todaydate.getFullYear();
    let m2=todaydate.getMonth()+1;
    let d2=todaydate.getDate();

    let y3,m3,d3;
    let age; 
    
    y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1
    }
    else{
        y3--
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1 
    }
    else{
        m3--
        d3=getmonth(y1,m1)+d2-d1
    }
    function getmonth(year,month){
        return new Date(year,month,0).getDate();
    }
    age=y3,m3,d3
    currentage.innerHTML=`Your Age is ${y3} Year ${m3} Month ${d3} Day`
})