import { CatPotential } from "./physics.js";
import { x2c, y2c, parse_x, parse_vx, CoordinateSystem } from "./utilities.js"
import { CatImage } from "./geometry.js";



// building canvas
export const canvas = document.getElementById("CatCanvas");
export const ctx = canvas.getContext("2d");

// global definitions
export const manim_red = "#FC6255";
export const manim_blue = "#58C4DD";



// ++++++++++ PARAMETER SECTION ++++++++++

// parameters of the potential
let g_coupling = 1;                                 // coupling constant between cat and human
let delta_bonding = 0.5;                            // specific bonding strength between cat and humam

// integration parameters
let delta_t = 0.025;                                // stepsize of the numerical integration / animation speed (USER OPTION)

// initial conditions
let x = -0.5;
let vx = 1;

// animation checks
let epsilon_friction = 1;                           // bool: (how strong) will friction force be considered (USER OPTION)
let sigma_noise = 0;                                // bool: (how strong) will gaussian white noise be considered (USER OPTION)

let animation_state = 0;                            // sets the animation state (0 for STOPPED, 1 for RUNNING)
let raf;                                            // animation handler



// ++++++++++ MAIN SECTION ++++++++++

// building coordinate system and potential
let axis = new CoordinateSystem(ctx, [0, 0], [-6, 6], [-3, +3], [-1.3, 1.3], [-0.2, 0.2], "x", "V(x)");
let potential = new CatPotential(g_coupling, delta_bonding);
let potential_function = axis.draw_function(ctx, potential.get_potential);
let cat =  new CatImage(ctx, axis, potential.get_potential, x);

// saving canvas background for reset
let reset_image = new Image();
reset_image.src = canvas.toDataURL("images/reset_background.jpg");



// ++++++++++ EVENT FUNCTIONS ++++++++++


// updates the drawn cat potential
function update_potential() {
    g_coupling = parseFloat(document.getElementById("coupling_constant").value);
    delta_bonding = parseFloat(document.getElementById("bond_strength").value);
    console.log(delta_bonding)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // build new potential
    axis = new CoordinateSystem(ctx, [0, 0], [-6, 6], [-3, +3], [-1.3, 1.3], [-0.2, 0.2], "x", "V(x)");
    potential = new CatPotential(g_coupling, delta_bonding);
    potential_function = axis.draw_function(ctx, potential.get_potential); 
    cat =  new CatImage(ctx, axis, potential.get_potential, x); 
}



// ++++++++++ EVENT LISTENERS ++++++++++


// reset animation button
document.getElementById("reset_button").addEventListener("click", (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(reset_image, 0, 0);
    
    // transfer resetted state to air mass and redraw
    x = parse_x(parseFloat(document.getElementById("init_x").value));
    document.getElementById("init_x").value = x;
    vx = parse_vx(parseFloat(document.getElementById("init_vx").value));
    document.getElementById("init_vx").value = vx;
    cat =  new CatImage(ctx, axis, potential.get_potential, x);
})


// track interactions with the navigation bar
document.getElementById("coupling_constant").addEventListener("change", update_potential);
document.getElementById("bond_strength").addEventListener("change", update_potential);