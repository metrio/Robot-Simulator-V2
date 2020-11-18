
document.addEventListener("DOMContentLoaded", function() {
  // initializes the board

  
  init();
    
  const moveContainer = document.querySelector('#moves-container')
    
  document.addEventListener('keydown', function(e){
      
      const newMove = document.createElement('li')

      if (e.key === "ArrowLeft"){
          newMove.textContent = "left"
      } else if (e.key === "ArrowRight"){
          newMove.textContent = "right"
      } else if (e.key === "ArrowUp"){
          newMove.textContent = "up"
      } else if (e.key === "ArrowDown"){
          newMove.textContent = "down"
      } 

      newMove.addEventListener('click', function() {
        newMove.remove()
      })

      moveContainer.append(newMove) 
    })



  const moveButton = document.querySelector('#move-button')
  

  moveButton.addEventListener('click', function() {

    const moveContainerLi = moveContainer.querySelectorAll("li")

    for (i = 0; i < moveContainerLi.length; i++ ) {
      
      move(moveContainerLi[i].textContent)
     
      const deleteMove = moveContainerLi[i]

      setTimeout(function(){deleteMove.remove()}, 5000)
          
      console.log("Does it work?")
  }
  
})

  
  
  // const setTimer = setTimeout(function() {
  //       console.log(moveContainerLi[i])
  //       moveContainerLi[i].remove()}, 500
  //     )}
  











})//DOM ending;

