// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        var studenttrigger = this.el;
        studenttrigger.addEventListener('click', function( evt ){test_click()})

        function test(){
        console.log(studentrigger)
        }
    }
    });

    function test_click(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if (score_text_value > -1){
        score_text.setAttribute("value", (score_text_value -1))
        }

        var test_2 = test();
        
        /*console.log(studentrigger)
        var student_name = studenttrigger.id.replace('trigger_','')
        var student =  document.getElementById(student_name)
        console.log('the student clicked is ' + student_name + ' or ' + student)*/

        /*student.setAttribute("visible", "false");
        studenttrigger.setAttribute("class", "activated_student_trigger");
        studenttrigger.setAttribute("visible", "false"); 
        
        console.log('student+studenttrigger deactivated');*/


    }

    /*function setTriggerFalse(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        var studenttrigger = this.el;




        var student =  document.getElementById("student")
        student.setAttribute("visible", "false");

        studenttrigger.setAttribute("class", "activated_student_trigger"); //student trigger already defined in the init part but maybe let idk
        studenttrigger.setAttribute("visible", "false"); 
        
        console.log('student+studenttrigger deactivated');
        
        score_text.setAttribute("value", (score_text_value) + (-1))
        }

*/