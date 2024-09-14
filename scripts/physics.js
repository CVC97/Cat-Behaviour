import { x2c, y2c } from "./utilities.js"


// ++++++++++ PHYSICS OF THE CAT BEHAVIOUR ++++++++++


// potential class induced on the cat
export class CatPotential {
    get_potential = this.get_potential.bind(this);

    constructor(g, delta) {
        this.g = g;
        this.delta = delta;
    }


    // get the potential for a given x
    get_potential(x) {
        return this.g * (x**2-1) * x**2 * (x**2-this.delta) / (x**2+this.delta);
    }
}


// Euler-Maruyama integrator for the newtonian equation of motion of the cat