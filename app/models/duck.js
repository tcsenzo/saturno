import Animal from './animal'
export default class Duck extends Animal {
	constructor(sound) {
		super(Duck.name.toLowerCase(), sound);
	}
}