//--------------------------------------
//**************************************
// Timeline of the experiment
//**************************************
//--------------------------------------

function createTimeline()
{

	var exp_timeline = [];
	jsPsych.data.addProperties({subjectNum: subjectNum});

//	exp_timeline.push(full_screen, welcome_msg, inputs, instructions, example)//, calibration_msg, calibration);
	exp_timeline.push(full_screen, inputs);

	for(curr_blockNum = 0; curr_blockNum < n_blocks; curr_blockNum++)
	{
		exp_timeline.push(pre_block_msg(curr_blockNum+1, curr_totalTrialNum));

		for(curr_trialNum = 0; curr_trialNum < n_Trials; curr_trialNum++)
		{	
			// get counterbalanced data
			t1_angle = trialData[curr_totalTrialNum-1].t1_angle;
console.log(curr_totalTrialNum-1+ " "+ t1_angle);
			distractor1_time = 1000;
			distractor2_time = 500;

			t2_angle = trialData[curr_totalTrialNum-1].t2_angle; // +10, -10, empty circle


			// fixed parameters
			fixationScreen_time = 500;

			phase1 = 0;
			phase2 =110;

			t1_time = 100;
			sf1 = 0.6;

			t2_time = 100;
			sf2 = 1.8;

			distractor3_time = 600;

			resp1_time = 1500;
			resp2_time = 1500;

			exp_timeline.push(fixationScreen(fixationScreen_time, t1_angle, t2_angle, sf1, sf2, phase1, phase2, curr_totalTrialNum));
			
			for(var i = 0; i<= distractor1_time/2; i=i+100)
			{	
				exp_timeline.push(flashingDistractor1(70));
				exp_timeline.push(stimOff(30));
				exp_timeline.push(flashingDistractor2(70));
				exp_timeline.push(stimOff(30));
			}
			for(var i = 0; i<= t1_time; i=i+100)
			{	
				exp_timeline.push(target1(70));
				exp_timeline.push(stimOff(30));
			}
			for(var i = 0; i<= distractor2_time/2; i=i+100)
			{	
				exp_timeline.push(flashingDistractor1(70));
				exp_timeline.push(stimOff(30));
				exp_timeline.push(flashingDistractor2(70));
				exp_timeline.push(stimOff(30));
			}	
			for(var i = 0; i<= t2_time; i=i+100)
			{	
				exp_timeline.push(target2(70));
				exp_timeline.push(stimOff(30));
			}	
			for(var i = 0; i<= distractor3_time/2; i=i+100)
			{	
				exp_timeline.push(flashingDistractor1(70));
				exp_timeline.push(stimOff(30));
				exp_timeline.push(flashingDistractor2(70));
				exp_timeline.push(stimOff(30));
			}	

				
//				exp_timeline.push(flashingDistractor(distractor2_time));
//				exp_timeline.push(target2(t2_time));
//				exp_timeline.push(flashingDistractor(distractor3_time));
			exp_timeline.push(response1(resp1_time));
			exp_timeline.push(response2(resp2_time));


		//	exp_timeline.push(all_gratingSet1(colorCues_time, cue_pos1, cue_pos2, cueColor1, cueColor2));

/*			if(curr_trialNum%10 == 0 && curr_trialNum > 9)
			{
				exp_timeline.push(loop_validation);
			}
*/
			curr_totalTrialNum++;
		}

		exp_timeline.push(post_block_msg());
//		exp_timeline.push(loop_validation);
	}
	return exp_timeline;
}