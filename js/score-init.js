// JavaScript source code
AFRAME.registerComponent('score-init',
{
    init: function( )
    {
        var score_text = this.el;
        score_text.setAttribute("value", 10)    
    }
});