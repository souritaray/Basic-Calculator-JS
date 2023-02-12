function insert(num){
    let inputData=document.querySelector(".textview");
    inputData.value=inputData.value + num;
  }
  
  function equals(){
    try{
        document.querySelector(".textview").value=eval(document.querySelector(".textview").value)  
    }
    catch(e){
      alert("Please provide correct values");
       document.querySelector(".textview").value="";
    }
  }
  
  function clean(){
    document.querySelector(".textview").value="";
  }
  
  function back(){
    let inputData=document.querySelector(".textview");
    inputData.value=inputData.value.slice(0,-1);
  }

