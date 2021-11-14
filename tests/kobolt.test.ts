import kobolt from '../src/index';

describe('kobolt', () => {
    it('returns HTMLElement', () => {
        const templateElement = document.createElement('template');

        templateElement.innerHTML = '<div>nothing</div>';

        expect(kobolt(templateElement)).toBeInstanceOf(HTMLElement);
    });
});
