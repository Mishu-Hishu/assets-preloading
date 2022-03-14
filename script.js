
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

//go over to your images practice files to remember how to display images.
// then try to load all the fantasy imgaes you downloaded for your webiste.
//see how fast they pop up on screen on a hard refresh.
//it sohuld suck, if it doesn't add images.
//then try out things to load them before you show them, preferablly with a loading bar.
//you might gonna need to add a setInterval method or one of the animation methods I didn't bother learning.
//once you got that figured out, try to do the same for sounds and music. if you manage to do that...
//you're golden.

//this piece of code has absolutly no importance, it was just for refreshing my memory
ctx.fillStyle = "#aa5555";
ctx.fillRect(c.width/2-100,c.height/2-100,200,200);