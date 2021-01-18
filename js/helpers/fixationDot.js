//--------------------------------------
//**************************************
// Designing of task
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION DOT
//--------------------------------------

function fixationDot(probe_pos)
{
	var dot_radius = 8;
	var fix_dot = s.circle(win_x/2, win_y/2, dot_radius).attr({fill:"yellow"});
/*
	var jgl_canvas = new Canvas("canvas2", "_", win_y, win_x, 0, 0);
	jgl_canvas.context.beginPath();
	jgl_canvas.context.arc(win_x/2, win_y/2, dot_radius, 0, 2 * Math.PI);
	jgl_canvas.context.fillStyle = "yellow";
	jgl_canvas.context.fill();
	jgl_canvas.context.closePath();
*/
}