### **Robot Scrapyard JS Log**

### Sept 12 2026



Beginning of development. Framwork for game completed. The game window with text was created.



### Sept 13 2026



The player was added with default sprite. Movement was added along the play area.



### Sept 19 2026



The movement, physics, and basic collision for the player was implemented. The player turns red for a few hundred miliseconds when colliding with an enemy. The enemy group was added. An enemy spawn function was created. The space key temporarily spawns enemies for now. Both the enemies and player collide with world bounds. When the spawnEnemy function is called, it creates a random x and random y for the new enemy child to spawn. The WASD keys were bound to the new movement instead of the arrows.



### Sept 21 2026



A basic shooting animation has been implemented. I'm using a placeholder sprite for the bullet, as well as the player and enemy. There is an input taken from the mouse and it calculates where to send the bullet sprite to. I have the methods set up and plan on implementing a collision mechanic. An interactive button was created for the start screen. It is temporary and is using Phaser's createRectangle() method with a text overlay. An interactive sprite will be created later in development along with a completed start screen, which includes designed interactive buttons, background, art style, etc.

