// JavaScript source code
AFRAME.registerComponent('student-manager',
{
    init: function( )
    {
        studenttrigger = this.el
        this.studenttrigger_test = studenttrigger
        studenttrigger.addEventListener('click', function( evt ){test_click()})
    },

    test: function () {
        console.log(this.studenttrigger_test); // nomdutriggercliqué
        this.studenttrigger_test = 'issouV2';
        console.log(this.studenttrigger_test); // issouV2
      }

    });

    function test_click(){

        var score_text = document.getElementById("score_text")
        var score_text_value = score_text.getAttribute('value');

        if (score_text_value > -1){
        score_text.setAttribute("value", (score_text_value -1))
        }

        test();

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