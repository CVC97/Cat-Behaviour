// ++++++++++ PHYSICS OF THE CAT BEHAVIOUR ++++++++++


// potential class induced on the cat
export class CatPotential {
    get_potential = this.get_potential.bind(this);
    get_force = this.get_force.bind(this);

    constructor(g, delta) {
        this.g = g;
        this.delta = delta;
    }


    // get the potential for a given x
    get_potential(x) {
        return this.g * (x**2-1) * x**2 * (x**2-this.delta) / (x**2+this.delta);
    }


    // get the force from the above potential
    get_force(x) {
        let delta_x = 0.001;
        return (this.get_potential(x+delta_x) - this.get_potential(x-delta_x)) / (2*delta_x);
    }
}


// Verlet-Maruyama integrator for the newtonian equation of motion of the cat
export class VerletMaruyama {


    constructor(potential, force_params, delta_t) {
        
    }
}