# MINI-XCOM
------
MINI-XCOM allows the player to be immersed in the role of an Imperium tank commander. In turn-based combat with a reactive and descriptive user interface, 
the player battles traitor in a last man(tank) standing fight. In each turn and for each unit, the player can either:

  1) Move the unit 
  2) Command the unit to shoot an enemy

After the player's turn, the AI will command its units. Each unit, both friend and foe, has a set of stats. These stats include a movement range, shooting range, and health points. A unit dies once its health points reach zero. The player can view units' stats by clicking on the unit. The player must be stragetic about their movement choices as cover morphs the battlefiled into choke points and kill zones. The game also has sound effects, which can be disabled.

[Become A Commander!](https://codydegraffeniles.github.io/MINI-XCOM/)

### A Commander and His Canvas
-----
MINI-XCOM uses Vanilla Javascript and a Canvas HTML element to provide interactive gamplay to the user. By combining the two through the use of event listeners, the battlefield can dynamically update to provide the user with feedback about the battle as well as make gameplay smoother.

While the use of Canvas over normal HTML allows for more dynamic images and less cluttered HTML, Canvas does present a unique challange, locating exactly where a user clicked. Unlike a grid using HTML elements, sections of a canvas grid cannot be "labeled/marked". This means if a user clicks anywhere on the canvas, the whole canvas is clicked. This is problamatic as it makes user interaction with units on the canvas impossible without creating a method to determine where on the canvas the user clicked. MINI-XCOM solves this problem in the following way. 

First, MINI-XCOM's canvas element has defined ratios. It is an 8 by 8 grid with each square having a both a height and width of 80. Thus, each unit on the grid is given a pos(ition) attribute that corresponds to a location on the grid, so its location can be stored and later manipulated for movement.

Secondly, when a user clicks on the canvas, the following code is run to determine the exact location of the click. (Code snippet)
``` JavaScript
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft; 
    let yClick = e.pageY - canvasRight;
```

The code above determines the X and Y coordinates of the upper left top of the Canvas. It then subtracts those of the X and y coordinates of the click (as givn by the pageX and pageY attributes, to give you the click in terms of the canvas' own coordinate system rather than overal pages.

After determining where the user clicked, the x and y coordinates of the click are both divided by 80 as this is the noted height and width of the grid. The resulting number is floored (rounded down) to get the grid position of the click. This grid position is then checked against the positions of the units to determine if the user clicked on a unit and if so, the approriate logic is initaited. This logic is also used in reverse to convert a unit's position back into coordinates on the grid so they can be rendered in the proper spot on the grid. 
``` JavaScript
  let x = Math.floor((xClick) / 80);
  let y = Math.floor((yClick) / 80);
 ```
<!-- 
### Another Feature?
------- -->


### Future Features
------ 
* Increased AI logic with the AI taking its turn one unit at a time
* Animation for the tanks
* Add board scalability for different sized windows and devices


### Acknowledgments
----
The author would like to acknowledge that the following were invaulabe to understanding and using the concepts that made MINI-XCOM possible:

* [Clicks on a Canvas Element](https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element)
* My friends who play tested and gave valuable user feedback.

