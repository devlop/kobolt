import kobolt from '../src/index';

describe('kobolt', () : void => {
    it('returns HTMLElement', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        templateElement.innerHTML = '<div>nothing</div>';

        // @ts-ignore
        const output : any = kobolt(templateElement);

        expect(output).toBeInstanceOf(HTMLElement);
    });

    it('replaces single occurrence of a single placeholder', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        templateElement.innerHTML = '<div>{{ name }}</div>';

        // @ts-ignore
        const output : any = kobolt(templateElement, {
            'name': 'Korpral Gifting',
        });

        expect(output.outerHTML).toEqual(expect.stringContaining('Korpral Gifting'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ name }}'));
    });

    it('replaces multiple occurrences of a single placeholder', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        templateElement.innerHTML = '<div>{{ name }} - {{ name }}</div>';

        // @ts-ignore
        const output : any = kobolt(templateElement, {
            'name': 'Korpral Gifting',
        });

        expect(output.outerHTML).toEqual(expect.stringContaining('Korpral Gifting'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ name }}'));
    });

    it('replaces single occurrence of multiple placeholders', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        templateElement.innerHTML = '<div>{{ name }} {{ rank }}</div>';

        // @ts-ignore
        const output : any = kobolt(templateElement, {
            'name': 'Jonas Gifting',
            'rank': 'Korpral',
        });

        expect(output.outerHTML).toEqual(expect.stringContaining('Jonas Gifting'));
        expect(output.outerHTML).toEqual(expect.stringContaining('Korpral'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ name }}'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ rank }}'));
    });

    it('replaces multiple occurrences of multiple placeholders', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        templateElement.innerHTML = '<div>{{ name }} {{ rank }} ({{ name }} {{ rank }})</div>';

        // @ts-ignore
        const output : any = kobolt(templateElement, {
            'name': 'Jonas Gifting',
            'rank': 'Korpral',
        });

        expect(output.outerHTML).toEqual(expect.stringContaining('Jonas Gifting'));
        expect(output.outerHTML).toEqual(expect.stringContaining('Korpral'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ name }}'));
        expect(output.outerHTML).toEqual(expect.not.stringContaining('{{ rank }}'));
    });

    it('returns template unchanged if no placeholders', () : void => {
        const templateElement : HTMLTemplateElement = document.createElement('template');

        const input : string = '<div>nothing</div>';

        templateElement.innerHTML = input;

        // @ts-ignore
        const output : any = kobolt(templateElement);

        expect(output.outerHTML).toBe(input);
    });
});
