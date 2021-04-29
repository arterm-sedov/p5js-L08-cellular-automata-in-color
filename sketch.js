/*
Tutorial 07
	CA -> arrays
	CA -> classes 
	CA -> algorithms

*/

///----- GLOBAL VARIABLES ARE HERE 

var GRID; // data layer contaning all cells states 
var NEIGHB; // data layer contaning corresponding neighbours amount 

var RES = 100; // total grid resolution in one dimension 

var UNIT;
var ENV;

//----------------------------------------------------------------------

function setup()
{
	createCanvas(900, 900);
	frameRate(15);
	rectMode(CORNER);
	colorMode(HSB, 80, 100, 100);

	
	ENV = new Environment(RES);

}

function draw()
{	
	clear(); 
	background(0);
	ENV.update();
	ENV.display();

}

// //----------------------------------------------------------------------



// function createEmptyGrid()
// {
// 	GRID = new Array(RES);    // create an Array object at the GRID variable name
// 	NEIGHB = new Array(RES); // same

// 	for(var i = 0; i < RES; i++)
// 	{
// 		GRID[i] = new Array(RES);  // for EVERY column index create another array object 
// 		NEIGHB[i] = new Array(RES); 

// 		for(var j = 0; j < RES; j++)
// 		{
// 			GRID[i][j] = 0;   // fill with ZERO values
// 			NEIGHB[i][j] = 0; // fill with ZERO values 
// 		}
// 	}
// }

// function fillGridRandom(midAmount)
// {
// 		for(var i = 0; i < RES; i++)
// 		{
// 			for(var j = 0; j < RES; j++)
// 			{
// 				if (random(0,1) > midAmount)  // the way to control precentage of live\dead cells. if midAmount = 0.5 -->> 50% live\dead. If midAbount 0.9 -->> 10% live. 90% dead 
// 					GRID[i][j] = 1;
// 				else
// 					GRID[i][j] = 0;
// 			}
// 		}
// }


// function fillGridPatternOne()
// {
// 	for(var i = 0; i < RES; i ++)
// 	{
// 		for(var j = 0; j < RES; j ++)
// 		{
// 			if (i%3 == 0 || j%3 == 0) GRID[i][j] = 1; // see references for MODULO % 
// 		}
// 	}
// }


// function displayGrid()
// {
// 	var xSize = width / RES; // calculate cell size in pixels 
// 	var ySize = height / RES; 

// 	for( var i = 0; i < RES; i++)
// 	{
// 		for(var j = 0; j < RES; j++)
// 		{
// 			push();
// 			translate(xSize * i, ySize * j);

			
// 			if(GRID[i][j] == 1) // if cell is alive --> display white 
// 			{
// 				stroke(0);
// 				fill(NEIGHB[i][j] * 20, 100, 100); // sample color usage 
// 			}
// 			else // cell is dead --> display black
// 			{ 
// 				stroke(30);
// 				noFill();
// 			}

// 			rect(0,0, xSize, ySize);

// 			pop();
// 		}
// 	}

// }


// function checkNeighbours()
// {
// 	for(var i = 0; i < RES; i++)
// 		for(var j = 0; j < RES; j++)
// 			NEIGHB[i][j] = countCellNeighbours(i, j);  // count neighbours number for EVERY cell 
// }

// function countCellNeighbours(i, j)
// {
// 	var result = 0; // temp variable to store count result 

// 	for(var ii = -1; ii <= 1; ii++)
// 	{
// 		for(var jj = -1; jj <=1; jj++)
// 		{
// 			if(i+ii < 0 || i+ii >= RES) continue; // if we are out of grid indexes -->> go to another loop iteration
// 			if(j+jj < 0 || j+jj >= RES) continue; // The continue statement "jumps over" one iteration in the loop.

// 			result += GRID[i + ii][j +jj];  
// 		}
// 	}

// 	result -=GRID[i][j]; // substract self state 

// 	return result; // return calculated amount as a number 
// }


// function applyBaseRule() 
// {
// 	for(var i = 0; i < RES; i++)
// 	{
// 		for(var j = 0; j < RES; j++)
// 		{
// 			if (GRID[i][j] == 1 && NEIGHB[i][j] < 2) // dead if lonley 
// 			{
// 				GRID[i][j] = 0; 
// 			}
// 			else if (GRID[i][j] == 0 && NEIGHB[i][j] == 3) // born if exactly 3 neighb 
// 			{
// 				GRID[i][j] = 1; 
// 			}
// 			else if (GRID[i][j] == 1 && NEIGHB[i][j] > 3) // die of overpopulaition
// 			{
// 				GRID[i][j] = 0; 
// 			}
// 			// all other scenarios -->> stay alive 
// 		}

// 	}		
// }