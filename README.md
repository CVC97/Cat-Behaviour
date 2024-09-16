# Simulating the Behaviour of a Cat in the Presence of a Human Being

Based on the paper https://arxiv.org/pdf/2409.05400 from Anxo Biasi, this web-based simulation models the movement of a cat around a human being. The full Langevin Equation of the cat (with friction force and Gaussian white noise turned on) reads

$$m\ddot{x}=-V'_\mathrm{cat}(x)-\epsilon\dot{x}+\sigma\xi(t)$$

with $\epsilon$ as the friction coefficient, $\sigma$ as noise strength and a random gaussian $\xi(t)$ (of mean $0$ and standard deviation $1$), and the potential of the human on the cat 

$$V'_\mathrm{cat}(x)=g(x^2-1)x^2\frac{x^2-\delta}{x^2+\delta}$$

with 




## Physical Description of a Cats Behaviour

The behaviour of a cat is going to be modeled based on the following observations:

- **P1:** Cats prefer a certain distance to humans.
- **P2:** When resting on a person, minimal stimuli can make the cat leave that position depending on the bond-strength of human and cat.
- **P3:** 

### P1: 

TBC