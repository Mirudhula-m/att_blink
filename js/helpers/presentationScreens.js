//--------------------------------------
//**************************************
// PRESENTATION SCREENS
//**************************************
//--------------------------------------

//--------------------------------------
// FIXATION DOT
//--------------------------------------

function fixationScreen(duration, t1_angle, t2_angle, sf1, sf2, phase1, phase2, curr_totalTrialNum)
{

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();
			// canvases for generating gratings in advance. 
			// All canvases are hidden and only fixation cross will be shown
			// This reduced the latency by 75-100ms
			return '<div>'+
					'<canvas id = "canvas1" style = "display:none"></canvas><canvas id = "backCanvas1" style = "display:none"></canvas>'+
					'<canvas id = "canvas2" style = "display:none"></canvas><canvas id = "backCanvas2" style = "display:none"></canvas>'+
					'<canvas id = "canvas3" style = "display:none"></canvas><canvas id = "backCanvas3" style = "display:none"></canvas>'+
					'<canvas id = "canvas4" style = "display:none"></canvas><canvas id = "backCanvas4" style = "display:none"></canvas>'+
					'</div>'+stim_str;
			
		},
		on_load: function() 
		{
			console.log("---------------------------------------------------");
			console.log("START OF NEW TRIAL "+curr_totalTrialNum+" ---------");
			console.log("---------------------------------------------------");
			
			// Generating grating arrays in advance

			makeStimGrating1URL('canvas1', 'backCanvas1', 45, 135, 1, phase1);
			makeStimGrating12URL('canvas4', 'backCanvas4', 45, 135, 1, phase2);
			makeStimGrating2URL('canvas2', 'backCanvas2', t1_angle, 1, sf1);
			makeStimGrating3URL('canvas3', 'backCanvas3', t2_angle, 1, sf2);

  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s1 = "+lat);
  			trial_latency.s1 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// FLASHING DISTRACTOR
//--------------------------------------

function flashingDistractor1(duration)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();
			
			return '<div><canvas id = "canvas1"></canvas><canvas id = "backCanvas1"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s2 just finished loading.');

 			makeStimGrating1('canvas1', 'backCanvas1'); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s2 = "+lat);
  			trial_latency.s2 = lat - duration;
  		}
	}
	return psychBlock_NR;
}

function flashingDistractor2(duration)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();
			
			return '<div><canvas id = "canvas4"></canvas><canvas id = "backCanvas4"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s2 just finished loading.');

 			makeStimGrating12('canvas4', 'backCanvas4'); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s2 = "+lat);
  			trial_latency.s2 = lat - duration;
  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// STIMULI OFF
//--------------------------------------

function stimOff(duration)
{

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();

			return stim_str;
			
		},
		on_load: function() 
		{
			console.log("Stimuli off");
  		},
  		on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("stim off = "+lat);
  			trial_latency.s111 = lat - duration;

  		}
	}
	return psychBlock_NR;
}

//--------------------------------------
// TARGET 1
//--------------------------------------

function target1(duration)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();
			
			return '<div><canvas id = "canvas2"></canvas><canvas id = "backCanvas2"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s3 just finished loading.');

 			makeStimGrating2('canvas2', 'backCanvas2'); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s3 = "+lat);
  			trial_latency.s3 = lat - duration;
  		}
	}
	return psychBlock_NR;
}


//--------------------------------------
// TARGET 2
//--------------------------------------

function target2(duration)
{
	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();
			
			return '<div><canvas id = "canvas3"></canvas><canvas id = "backCanvas3"></canvas></div>'+stim_str;
		},
		on_load: function() 
		{
			a = (new Date()).getTime();
  		    console.log('s4 just finished loading.');

 			makeStimGrating3('canvas3', 'backCanvas3'); 
  		},
	  	on_finish: function(data)
  		{
  			lat = (new Date()).getTime() - a;
  			console.log("s4 = "+lat);
  			trial_latency.s4 = lat - duration;
  		}
	}
	return psychBlock_NR;
}


//--------------------------------------
// RESPONSE 1
//--------------------------------------

function response1(duration)
{
	var psychBlock_R =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: [67, 77], // c (cardinal) - 90; m (diagonal) - 77; spacebar (no) - 32
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();

			return stim_str+'<div style = "position:absolute; top: 0px; left: 0px">'+
					'<canvas id = "canvas"></canvas></div>';
		},
		on_load: function() 
		{
  		    console.log('RB1 just finished loading.');

  		    makeResponseStim1("canvas");
  		},
 		on_finish: function(data)
  		{
  			// recording subject data
//			sub_response = [90, 77].indexOf(data.key_press); // 0 for no change and 1 for change
  //			if(data.rt == null) { sub_RT = data.rt; }
  	//		else { sub_RT = (data.rt).toFixed(2); }

  	//		response_AFC_data[curr_totalTrialNum] = sub_response;
  	//		rt_AFC_data[curr_totalTrialNum] = sub_RT;

  			lat = (new Date()).getTime() - a;
  			console.log("s5 = "+lat);
  			trial_latency.s8 = lat - duration;
  		}
	}
	return psychBlock_R;
}

//--------------------------------------
// RESPONSE 2
//--------------------------------------

function response2(duration)
{
	var psychBlock_R =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: [67, 77, 32], // c (cardinal) - 90; m (diagonal) - 77; spacebar (no) - 32
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			fixationDot();
			stim_str = s.toString();
			s.clear();

			return stim_str+'<div style = "position:absolute; top: 0px; left: 0px">'+
					'<canvas id = "canvas"></canvas></div>';
		},
		on_load: function() 
		{
  		    console.log('RB2 just finished loading.');

  		    makeResponseStim2("canvas");
  		},
 		on_finish: function(data)
  		{
  			// recording subject data
//			sub_response = [90, 77].indexOf(data.key_press); // 0 for no change and 1 for change
  //			if(data.rt == null) { sub_RT = data.rt; }
  	//		else { sub_RT = (data.rt).toFixed(2); }

  	//		response_AFC_data[curr_totalTrialNum] = sub_response;
  	//		rt_AFC_data[curr_totalTrialNum] = sub_RT;

  			lat = (new Date()).getTime() - a;
  			console.log("s6 = "+lat);
  			trial_latency.s9 = lat - duration;
  		}
	}
	return psychBlock_R;
}




/*
//--------------------------------------
// FEEDBACK MESSAGE
//--------------------------------------

function feedback_message(duration, probe_pos, changeState, trialNum, curr_totalTrialNum)
{
	var feedback = 
	{
		type: "html-keyboard-response",
		choices: jsPsych.NO_KEYS,
		stimulus: function(data)
		{
			a = (new Date()).getTime();

			changeAngle = changeAngleData[curr_totalTrialNum];
			
			// reset after every block
			if(trialNum == 1) 
			{ 
				countCorrect = 0; 
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// reset staircase variables after every 8 trials
			if(trialNum > 8 && trialNum % 8 == 1)
			{
				staircaseCorrect = 0;
				countNAN = 0;
			}
			
			// compare subject response and actual response
			if(response_AFC_data[curr_totalTrialNum] == changeState[probe_pos])
			{
				countCorrect = countCorrect + 1; 
				staircaseCorrect = staircaseCorrect + 1;
				return "<p style = 'font-size:20px; color:black'>Correct Response.</p>";
			}
			else if(response_AFC_data[curr_totalTrialNum] == -1)
			{
				countNAN = countNAN + 1;
				return "<p style = 'font-size:20px; color:black'>No Response recorded.</p>";
			}
			else
			{
				return "<p style = 'font-size:20px; color:black'>Incorrect Response.</p>";
			}
		},
		trial_duration: duration,
		on_finish: function(data)
		{
			// staircase session
			if(trialNum >= 8 && trialNum % 8 == 0 && countNAN != 8)
			{
				[new_changeAngle, meanCorrect] = do_staircase(staircaseCorrect, countNAN, changeAngle)
				meanCorrectData[curr_totalTrialNum] = meanCorrect;
				changeAngleData[curr_totalTrialNum+1] = new_changeAngle;

				console.log("new changeAngle = "+changeAngleData[curr_totalTrialNum+1]);
				console.log("meanCorrect = "+meanCorrectData[curr_totalTrialNum]);
			}
			else
			{
				changeAngleData[curr_totalTrialNum+1] = changeAngleData[curr_totalTrialNum];
				console.log("same changeAngle = "+changeAngleData[curr_totalTrialNum+1]);
			}
			lat = (new Date()).getTime() - a;
  			console.log("feedback = "+lat);
  			trial_latency.s9 = lat - duration;

			trial_latency_json = JSON.stringify(trial_latency);
			all_trial_latency.push(trial_latency_json);
			trial_latency = {};
		}
	}
	return feedback;
}
*/



