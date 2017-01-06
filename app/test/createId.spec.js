import expect from 'expect'
import createId from '../containers/createId'

describe('createId', () => {
	it('should attach an ID onto a name', () => {
		const actual = createId('Sam');
		const expected = 'Sam5';
		
		expect(actual).toEqual(expected);
	});
});