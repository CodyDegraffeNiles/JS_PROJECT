# MINI-XCOM
------
MINI-XCOM allows the player to be immersed in the role of an Imperium tank commander. In turn-based combat with a reactive and descriptive user interface, 
the player battles traitor in a last man(tank) standing fight. In each turn and for each unit, the player can either:

  1) Move the unit 
  2) Command the unit to shoot an enemy

After the player's turn, the AI will command its units. Each unit, both friend and foe, has a set of stats. These stats include movement range, shooting range, firepower(damage) and health points. A tank dies once its health points reach zero. The player can view a tank's stats by clicking on it. The player must be strategic about their movement choices as czech hedgehogs morphs the battlefield into choke points and kill zones. The game also has sound effects, which can be disabled.

[Become A Commander!](https://codydegraffeniles.github.io/MINI-XCOM/)

### The Chosen Unit
----
MINI-XCOM uses Vanilla Javascript and a Canvas HTML element to provide interactive gameplay to the user. By combining the two through the use of event listeners, the battlefield can dynamically update to provide the user with feedback about the battle as well as make gameplay smoother. There were two interesting issues that arose with this approach. The first was how to provide effective user feedback. The second was how to register user clicks on the canvas.

First, from a development standpoint, the most interesting feature to work on was effective user interaction. There are many ways that one can go around giving user feedback as well as updating the game's data. One could give a rundown of all units and their stats that is either a permanent feature of the sidebar or a clickable drop down menu. Nonetheless, MINI-XCOM's main determinant of what to display to the user is the grid view's
selectedUnit property. In other words, the last clicked unit by the player.

``` Javascript
Class GridView {
  constructor(grid, ai){
    this.selectedUnit = undefined;
    /// More properties
  };
  // On most clicks, this code is run for the clicked unit.
  selectUnit(unit){
    this.selectedUnit = unit;
    };
```
This selectedUnit is the unit whose stats show up on the screen. The absence of a selectedUnit also indicates the swap of a turn as all units are deselected when a turn swaps so the other player can act. Lastly, the selectedUnit is also used to determine which event listeners to activate/remove. The reason for the heavy emphasis on the selectedUnit is because it is the main focus of the player. As the player interacts with the game one unit at a time, updating the user interface based on what unit is selected is critical for user interaction and readability. It also increases the player's feeling of agency as compared to a more static all unit overview.

### A Commander and His Canvas
-----

While the use of Canvas over normal HTML allows for more dynamic images and less cluttered HTML, Canvas does present a unique challenge, locating exactly where a user clicked. Unlike a grid using HTML elements, sections of a canvas grid cannot be "labeled/marked". This means if a user clicks anywhere on the canvas, the whole canvas is clicked. This is problematic as it makes user interaction with units on the canvas impossible without creating a method to determine where on the canvas the user clicked. MINI-XCOM solves this problem in the following way. 

First, MINI-XCOM's canvas element has defined ratios. It is an 8 by 8 grid with each square having a both a height and width of 80. Thus, each unit on the grid is given a pos(ition) property that corresponds to a location on the grid, so its location can be stored and later manipulated for movement.

Secondly, when a user clicks on the canvas, the following code is run to determine the exact location of the click. (Code snippet)
``` JavaScript
    let cavansLeft = canvas.offsetLeft + canvas.clientLeft;
    let canvasRight = canvas.offsetTop + canvas.clientTop;
    let xClick = e.pageX - cavansLeft; 
    let yClick = e.pageY - canvasRight;
```

The code above determines the x and y coordinates of the upper left top of the Canvas. It then subtracts those from the x and y coordinates of the click (as given by the pageX and pageY property, to give you the click in terms of the canvas' own coordinate system rather than overall pages.

After determining where the user clicked, the x and y coordinates of the click are both divided by 80 as this is the noted height and width of the grid. The resulting number is floored (rounded down) to get the grid position of the click. This grid position is then checked against the positions of the units to determine if the user clicked on a unit and if so, the appropriate logic is initiated. This logic is also used in reverse to convert a unit's position back into coordinates on the grid so they can be rendered in the proper spot on the grid. 
``` JavaScript
  let x = Math.floor((xClick) / 80);
  let y = Math.floor((yClick) / 80);
 ```

### Technologies

* Vanilla Javascript and Canvas API are used to achieve interactive gameplay logic and display
* Webpack and npm to bundle the Javascript Code and manage project dependencies
* Babel to transpile the Javascript Code

### Planned Features
------ 
* Increased AI logic
* Animation for the tanks
* Add board scalability for different sized windows and devices

### Acknowledgments
----
The author would like to acknowledge that the following were invaluable to understanding and using the concepts that made MINI-XCOM possible:

* [Clicks on a Canvas Element](https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element)
* My friends who play tested MINI-XCOM and gave valuable user feedback.
