let cards = document.querySelectorAll('.card')
let count =  document.querySelector('.count')


let chance = 5;

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}


cards.forEach(card => {
  card.addEventListener('click', function(e) {
    
    
    function randomCard() {
      // condition 1 | si la carte a deja rotate => msg erreur, sinon rotate 
      // condition 2 | si il y a plus d'essai dispo => msg erreur + no rotate, sinon continue a chercher
      // condition 3 | si tombe sur le bon chiffre random (20) => Gg, sinon continue a chercher
      
      let rotateClass = e.target.parentElement.parentElement.classList.contains('rotate');
      
      if (rotateClass){
        console.log('already clicked on this one');
      } else {
        
        if (chance >= 1) {
          
          card.classList.add('rotate')
          
          const randomInt = randomIntFromInterval(1, 10)
          console.log(randomInt)
          
          
          
          if (randomInt == 10){
            
            let cardBacks = document.querySelectorAll('.flip-back')

            cardBacks.forEach(function (cardBack) {

              let winnerImg = cardBack.querySelector('img')

              winnerImg.src = 'images/testdrive.jpg'

            })



            // document.querySelector('.flip-back').innnerHTML = `<img src="images/testdrive.jpg" alt="back">`

            // let img = document.getElementById('img')
            // img.src = 'images/testdrive.jpg'
            
            // img.addEventListener('click', function () {
            //   img.src = 'images/testdrive.jpg'
            // })

            console.log('GG! you win!');
            console.log("---------------------");
            
            eTarg = e.target.parentElement.parentElement
            
            document.querySelector('h1').innerHTML = `GG !`
            document.querySelector('h2').innerHTML = ``
            document.querySelector('h4').innerHTML = ``
            count.parentElement.innerHTML = ``
            eTarg.classList.add('winner')
            document.querySelector('.flip-cards').classList.add('youWon')


            // Hide all other cards
            document.querySelectorAll('.card').forEach(function(card) {
              if (card.classList.contains('winner')) {
              } else {
                card.classList.add('loser');
              }
            });

          } else{
            chance--
  
            console.log(`Wrong, -1 chance. Vous reste ${chance} essai`);
            console.log("---------------------");
            
            document.querySelector('.count').innnerHTML = chance
          }

        } else{
          console.log(`0 essai disponible! rip, no car for you...`);
        }
        
      } 

    }
    
    if (e.target) {

      console.log('*click*');
      randomCard()
    }

  });
  
});


















