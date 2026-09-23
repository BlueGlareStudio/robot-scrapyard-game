### **Robot Scrapyard JS Log**

### Sept 12 2026



Beginning of development. Framwork for game completed. The game window with text was created.



### Sept 13 2026



The player was added with default sprite. Movement was added along the play area.



### Sept 16 2026



A series of social media accounts were made for Blue Glare Studio:

* Instagram
* Google Account
* GitHub
* X (Twitter)
* YouTube
* TikTok
* itch.io account
* Steam account



### Sept 17 2026



A discord account was created for Blue Glare Studio and a discord channel was created. This channel is intended to be the foundation for the game studio. It will be a hub for all the HTML5 games.



### Sept 19 2026



The movement, physics, and basic collision for the player was implemented. The player turns red for a few hundred miliseconds when colliding with an enemy. The enemy group was added. An enemy spawn function was created. The space key temporarily spawns enemies for now. Both the enemies and player collide with world bounds. When the spawnEnemy function is called, it creates a random x and random y for the new enemy child to spawn. The WASD keys were bound to the new movement instead of the arrows. An Unity account was made and the game engine was downloaded.



### Sept 21 2026



A basic shooting animation has been implemented. I'm using a placeholder sprite for the bullet, as well as the player and enemy. There is an input taken from the mouse and it calculates where to send the bullet sprite to. I have the methods set up and plan on implementing a collision mechanic. An interactive button was created for the start screen. It is temporary and is using Phaser's createRectangle() method with a text overlay. An interactive sprite will be created later in development along with a completed start screen, which includes designed interactive buttons, background, art style, etc.



### Sept 23 2026



The framework for the collision detection between enemies and the player's bullets was created. I was having issues previously with this system. There error was that the line for the collision was too high up on the script. The bullet group was added after, not before like it should be. It was fixed. A small list was created for the splash text that appears below the title of the game at the start screen. It randomly chooses between the few options that were hardcoded. It is similar to Minecraft. A small text on the GameScene was added to display the score. The score system adds 10 points whenever an enemy is hit with a bullet. A win and lose condition needs to be set.

