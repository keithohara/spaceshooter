﻿// A variable that will contain our bullet prefab
public var bullet : GameObject;
public var speed: int = 2;

function Update() { 
    // Move the spaceship horizontally (no changes)
    var r2d = GetComponent("Rigidbody2D");

    r2d.velocity.x = Input.GetAxis("Horizontal")*speed;

    if (Input.GetButtonDown("Fire1")) {
        // Create a new bullet at “transform.position” 
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }

    /*
    if (Input.GetKey("right"))
        r2d.velocity.x = 10;
    else if (Input.GetKey("left"))
        r2d.velocity.x = -10;
    else
        r2d.velocity.x = 0;

    // When the spacebar is pressed
    if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position” 
        // Which is the current position of the ship
        // Quaternion.identity = add the bullet with no rotation
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
    */
} 
