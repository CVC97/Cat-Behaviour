import { CatPotential } from "./physics.js";
import { x2c, y2c, CoordinateSystem } from "./utilities.js"



// building canvas
export const canvas = document.getElementById("CatCanvas");
export const ctx = canvas.getContext("2d");

// global definitions
export const manim_red = "#FC6255";
export const manim_blue = "#58C4DD";



// ++++++++++ PARAMETER SECTION ++++++++++

// parameters of the potential
let g = 1                                           // coupling constant between cat and human
let delta = 0.5                                     // specific bonding strength between cat and humam



// ++++++++++ MAIN SECTION ++++++++++

// building coordinate system and potential
let axis = new CoordinateSystem(ctx, [0, 0], [-6, 6], [-3, +3], [-1.3, 1.3], [-0.2, 0.2], "x", "V(x)");
let potential = new CatPotential(g, delta);
let potential_function = axis.draw_function(ctx, potential.get_potential);



// ++++++++++ EVENT FUNCTIONS ++++++++++


// updates the drawn cat potential
function update_potential() {
    g = parseFloat(document.getElementById("coupling_constant").value);
    delta = parseFloat(document.getElementById("bond_strength").value);
    console.log(delta)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // build new potential
    axis = new CoordinateSystem(ctx, [0, 0], [-6, 6], [-3, +3], [-1.3, 1.3], [-0.2, 0.2], "x", "V(x)");
    potential = new CatPotential(g, delta);
    potential_function = axis.draw_function(ctx, potential.get_potential);      
}



// ++++++++++ EVENT LISTENERS ++++++++++



// track interactions with the navigation bar
document.getElementById("coupling_constant").addEventListener("change", update_potential);
document.getElementById("bond_strength").addEventListener("change", update_potential);