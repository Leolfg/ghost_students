// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {   
        var studenttrigger = this.el
        console.log("this studenttrigger" +studenttrigger.id)
        var audio_name = studenttrigger.id.replace('trigger_','audio_');
        var audio_file = document.querySelector('#'+ audio_name);
        console.log("audio is "+ audio_file.id);
        
        studenttrigger.addEventListener('click', function( evt ){decrease_score(),check_score(), () => {audio_file.play()}})

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
            var camera_2 = document.getElementById("camera_2")
    
            var camille = document.getElementById("camille_end")
    
            if  (score_text_value == 0){
                score_text.setAttribute("visible", "false");
                document.getElementById("etudiants_text").setAttribute("visible", "false");
                
                camille.emit('theend');
    
                camera_2.setAttribute('camera', 'active', true)
            }
    
        }

    }
    });



        
