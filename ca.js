class Cell
{
	constructor(_state, _i, _j)
	{
		this.state = _state;
		this.neighbours = 0;

		this.i = _i;
		this.j = _j;

		this.age = 0;

		this.x;
		this.y;

		this.w;
		this.h;

	}

	display ()
	{

			push();
			translate(this.x, this.y);

			
			if(this.state == 1) // if cell is alive --> display white 
			{
				stroke(0);
				fill(this.age*10, 100, 100); // sample color usage 
				this.age+=1;
				if(this.age>=80) this.age =0;
			}
			else // cell is dead --> display black
			{ 
				stroke(30);
				noFill();
			}

			rect(0,0, this.w, this.h);

			pop();

	}

	countNeighb(_i, _j, _grid)
	{

		this.neighbours =0;

		for(var ii = -1; ii <= 1; ii++)
		{
		for(var jj = -1; jj <=1; jj++)
			{
			if(_i+ii < 0 || _i+ii >= _grid.length) continue; // if we are out of grid indexes -->> go to another loop iteration
			if(_j+jj < 0 || _j+jj >= _grid[_i].length) continue; // The continue statement "jumps over" one iteration in the loop.

			this.neighbours += _grid[_i + ii][_j +jj].state*(_grid[_i + ii][_j +jj].age>20);  
			}
		}
		this.neighbours -= this.state;
	}

	applyRule()
	{

		if (this.state == 1 && this.neighbours < 8  && this.neighbours>3 && this.age<40) // dead if lonley 
		{
			this.state = 0; 
		}
		else if (this.state == 0 && this.neighbours == 3 && this.age>10) // born if exactly 3 neighb 
		{
		this.state = 1; 
		this.age = 0;
		}
		// else if (this.state == 1 && this.neighbours > 3) // die of overpopulaition
		// {
		// this.state = 0; // all other scenarios -->> stay alive 
		// } 

	}

}

class Environment
{

	constructor(_resolution)
	{
		
		this.resolution = _resolution; 
		this.grid = new Array(this.resolution);
		
		var xSize = width / this.resolution; // calculate cell size in pixels 
		var ySize = height / this.resolution; 


		for(var i = 0; i < this.resolution; i++)
		{
		this.grid[i] = new Array(this.resolution);

			for(var j = 0; j < this.resolution; j++)
			{
			
			this.grid[i][j] = new Cell(1, i, j);
			
			this.grid[i][j].x = i * xSize;
			this.grid[i][j].y = j * ySize;

			this.grid[i][j].w = xSize;
			this.grid[i][j].h = ySize;

			}
		}
	}

	display()
	{

		for(var i = 0; i < this.resolution; i++)
		{

			for(var j = 0; j < this.resolution; j++)
			{
			
			this.grid[i][j].display();

			}
		}

	}

	update()
	{


		for(var i = 0; i < this.resolution; i++)
		{

			for(var j = 0; j < this.resolution; j++)
			{
			
			this.grid[i][j].countNeighb(i, j, this.grid);

			}
		}


		for(var i = 0; i < this.resolution; i++)
		{

			for(var j = 0; j < this.resolution; j++)
			{
			
			this.grid[i][j].applyRule();

			}
		}


	}

}