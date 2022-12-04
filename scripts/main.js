
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

// Instance of Player
let player = null;
let previousMaskedStatus = false;

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
	
	// get the player instance
	player = runtime.objects.Player.getFirstInstance();
}

function Tick(runtime)
{
// 	if (player == null) {
// 		return;
// 	}
// 	if (player.isYelling){
// 		console.log("yelling");
// 	} else {
// 		console.log("not yelling");
// 	}
// 	console.log(player.x)
// 	if (player.Masked && previousMaskedStatus == false) {
// 		console.log("I am grumpy and masked");
// 		previousMaskedStatus = true;
// 	} else if (!player.Masked && previousMaskedStatus == true) {
// 		console.log("I am grumpy and not masked")
// 		previousMaskedStatus = false;
// 	}
}
