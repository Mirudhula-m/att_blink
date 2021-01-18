// function to make the 4 response placeholder circles

function makeResponseStim1(canvas)
{
	var c = new Canvas(canvas, "_", win_y, win_x, 0, 0);

	//diagonal lines
	c.context.beginPath();
	c.context.moveTo(win_x/2-200-placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2+placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineTo(win_x/2-200+placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2-placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();
	
	c.context.moveTo(win_x/2-200+placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2+placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineTo(win_x/2-200-placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2-placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();

	// cardinal lines
	c.context.beginPath();
	c.context.moveTo(win_x/2+200, win_y/2-placeholderDia/2);
	c.context.lineTo(win_x/2+200, win_y/2+placeholderDia/2);
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();
	
	c.context.moveTo(win_x/2+200+placeholderDia/2, win_y/2);
	c.context.lineTo(win_x/2+200-placeholderDia/2, win_y/2);
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();

	// left circle
	c.context.beginPath();
	c.context.arc(win_x/2-200, win_y/2, placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 5;
	c.context.strokeStyle = "yellow";
	c.context.stroke();
	c.context.closePath();

	// right circle
	c.context.beginPath();
	c.context.arc(win_x/2+200, win_y/2, placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 5;
	c.context.strokeStyle = "yellow";
	c.context.stroke();
}

function makeResponseStim2(canvas)
{
	var c = new Canvas(canvas, "_", win_y, win_x, 0, 0);

	//diagonal line - CCW
	c.context.beginPath();
	c.context.moveTo(win_x/2-200-placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2+placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineTo(win_x/2-200+placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2-placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();

	//diagonal line - CW	
	c.context.moveTo(win_x/2+200+placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2+placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineTo(win_x/2+200-placeholderDia/2*Math.cos((Math.PI*45)/180), win_y/2-placeholderDia/2*Math.sin((Math.PI*45)/180));
	c.context.lineWidth = 20;
	c.context.strokeStyle = "black";
	c.context.stroke();

	// left circle
	c.context.beginPath();
	c.context.arc(win_x/2-200, win_y/2, placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 5;
	c.context.strokeStyle = "yellow";
	c.context.stroke();
	c.context.closePath();

	// right circle
	c.context.beginPath();
	c.context.arc(win_x/2+200, win_y/2, placeholderDia/2, 0, 2 * Math.PI);
	c.context.lineWidth = 5;
	c.context.strokeStyle = "yellow";
	c.context.stroke();
}
