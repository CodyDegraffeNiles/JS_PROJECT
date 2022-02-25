# MINI-XCOM

### Background
-------

In MINI-XCOM, the player commands a squad of hardened space marines. In turn-based combat on a grid-coordinate board, 
the player battles the AI in a last man standing fight.  If all the player’s units die, they lose. If they kill all the enemy units, they win. In each turn and for each unit, the player can either:

  1) Move the unit
  2) Command the unit to shoot an enemy

After the player's turn, the AI will make a turn and command its units to either move or shoot. Each unit, both friend and foe, has a set of stats. These stats include a movement range, shooting range, and health points. A unit dies once its health points reach zero. The player can also view their units' stats by clicking on the unit. Lastly, the player must be stragetic about their movement choices as cover morphs the battlefiled into choke points and kill zones.


### Functionality & MVPs
-------
With MINI-XCOM, users will be able to:
* Command their units to move or shoot
* View the stats of their units
* Fight against a cunning(albeit simple) AI openent in turn-based combat
* See a victory or defeat image and/or message upon completion of the game

Furthermore, this project will include: 
* An intro section describing the background and rules of MINI-XCOM
* A production README

### Wireframes
------

### Technologies, Libraries, APIs
------
This project will be implemented using the following technologies: 
* Canvas API to render the game grid as well as the units and animations
* Webpack and npm to bundle the Javascript Code and manage project dependencies
* Babel to transpile the Javascript Code

### Implementation Timeline 
------
* **Friday Afternoon**: Setup project and Webpack. Start getting comfortable with Canvas and how to approach rending units on the screen.

* **Saturday**: Get the board to appear on Canvas as well as “basic units”. Create the Unit class. However, the units will probably take a longer time to properly format on the screen and will be something, I will continue to tweak through the coming days.

* **Sunday**: Finish up the board/Unit rendering, as well as make sure cover is included. Build the logic foundations of the game, i.e., how it receives and interprets user input.

* **Monday**: Finishing building up the logic foundations of the game and allow for the user’s input to show up on the canvas screen. Especially foucs on making sure, the user can move and shoot. (The unit stats display can be delayed until Wednesday)

* **Tuesday**: Finish up rendering user input and build (basic) enemy AI - Game should be functional at this point. 

* **Wednesday**: If dealyed, finish the unit stats function. Add a victory/defeat screen. Work on stylizing the project through css. 
If there is time, work on bonus features. such as increasing the AI logic, adding customization, and add background music.

* **Thursday Morning**: Finish up production, write a Production Readme, and deploy through GitHub.

### Bonus Features
------ 

There are many areas for impovement in this project. Some of possible areas for updates are:
* Increase AI logic
* Allow the user to customize their marines, e.g., their name and color
* Add music
* Create multiple levels of fighting and allow for the persistance of Marine's health through the levels



