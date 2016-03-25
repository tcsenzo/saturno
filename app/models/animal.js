export default class Animal {
	constructor(species, sound) {
		this.sound = sound;
		this.species = species;
	}

	say() {
		return `the ${this.species} says ${this.sound}`;
	}
}