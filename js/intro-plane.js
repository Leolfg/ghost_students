// JavaScript source code
AFRAME.registerComponent('intro-plane',
{
    init: function( )
    {
        var planeintro = this.el;

        console.log('before');
        wait(7000);  //milliseconds
        console.log('after');

        planeintro.setAttribute("visible", "false");
    }
});

