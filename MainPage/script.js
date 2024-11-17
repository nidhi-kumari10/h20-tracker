// Function to toggle the profile menu visibility
function toggleMenu() {
    const menu = document.getElementById('profileMenu');
    menu.classList.toggle('show');
  }


  let track = document.querySelector("#trackWater");
  track.onclick=()=>{
    let normalDrink = 5;
  userdrink= prompt("How much water did you drink today, Enter it in liters .");
  if(userdrink>=normalDrink && userdrink<=7){
    alert("good!");
  }
  else if(userdrink<normalDrink){
    let waterNeed = normalDrink-userdrink;
    alert(`you need to drink ${waterNeed} litre more water.`);
  }
  else{
    alert("You drink more than normal!")
  }
  };
  
 