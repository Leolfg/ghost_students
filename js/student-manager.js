// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        studenttrigger = this.el
        studenttrigger.addEventListener('click', function( evt ){test_click()})
    }
    });

    function test_click(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if (score_text_value > 0){
        score_text.setAttribute("value", (score_text_value -5))
        }

        if(score_text_value <= 0){
            document.getElementById("camera").setAttribute("position", "10 10 10");
            console.log("the score is 0, player tped")
            //take player to a position
            //make camille scalabre appear + animation
            //petit texte "Tu as trouvé tous les étudiants de l'école Estienne"
        }
}