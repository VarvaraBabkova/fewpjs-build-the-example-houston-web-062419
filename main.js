// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//const like = document.querySelector(".like")
document.addEventListener("click", function(event){
  if(event.target.className=="like"){
    res = mimicServerCall()
    .then(function(){


      const like_glyph = event.target.firstElementChild
      if (like_glyph.className =="like-glyph activated-heart"){
        like_glyph.className = "like-glyph"
         like_glyph.innerText = EMPTY_HEART
      }else{
         like_glyph.className = "like-glyph activated-heart"
         like_glyph.innerText = FULL_HEART
      }
     
      })
      .catch(function(message) {

        const modal = document.querySelector("#modal")
        document.querySelector("#modal-message").innerText = message
        modal.className = "not_hidden"

        console.log(message)

        setTimeout(function(){
              modal.className = "hidden"

        }, 2000);

      });
      console.log(res)
    }
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
