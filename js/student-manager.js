// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        studenttrigger = this.el
        studenttrigger.addEventListener('click', function( evt ){decrease_score(),check_score()})
    }
    });

    function decrease_score(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if (score_text_value > 0){
            score_text.setAttribute("value", (score_text_value -1))
        }
    }

        
    function check_score(){
        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if  (score_text_value == 0){
            score_text.setAttribute("visible", "false");
            document.getElementById("etudiants_text").setAttribute("visible", "false");
            document.getElementById("camera").setAttribute("position", "13.25 11.36 13.9");
            document.getElementById("camera_rig").setAttribute("rotation","-16.7 26.47 0");

            console.log("the score is 0, player tped")
                        //take player to a position
            //make camille scalabre appear + animation
            //petit texte "Tu as trouvé tous les étudiants de l'école Estienne"
        }

    }