#! /usr/bin/env node

import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";



let Timmer = await inquirer.prompt([{

	name : "Input",
	type : "number",
	message : "Please input the value of the second amount?",
	validate : (count_down)=>{
       if(isNaN(count_down)){
       	return "Opzzzzzz enter a valid number!";
       }

       else if(count_down > 60){
        return "The duration of the second must be 60 seconds";
       }


       else{
       	return true;
       }
	}

}]);




let count_down = Timmer.Input



function StartTimmer(num : number) {
	let initial = new Date().setSeconds(new Date().getSeconds() + num);
	let res = new Date(initial);
	setInterval(() => {
		let current_time = new Date();
		let time_difference = differenceInSeconds(res, current_time);


		if(time_difference <=0){
			console.log("Time out!");
			process.exit();
		}

		let minutes = Math.floor((time_difference % (3600 * 24)) / 3600);
	    let seconds = Math.floor(time_difference % 60);
		console.log(`${minutes.toString().padStart(2 , "0")} : ${seconds.toString().padStart(2 , "0")}`);


	},1000);

}

StartTimmer(count_down);
