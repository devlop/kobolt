'use strict';

import PlaceholdersInterface from './PlaceholdersInterface';

const escapeRegExp = require('lodash.escaperegexp');

const kobolt = (templateElement : HTMLTemplateElement, placeholders : PlaceholdersInterface | null = null) : HTMLElement => {
    const templateWrapper : HTMLElement = document.createElement('div');

    templateWrapper.appendChild(
        (templateElement.content.firstElementChild !).cloneNode(true) as HTMLElement,
    );

    for (const [key, value] of Object.entries(placeholders ?? {})) {
        templateWrapper.innerHTML = templateWrapper.innerHTML.replace(
            new RegExp(`\\{\\{ ${escapeRegExp(key)} \\}\\}`, 'g'),
            value,
        );
    }

    return templateWrapper.firstElementChild as HTMLElement;
};

// allows "import kobolt from '@devlop/kobolt'" and "import { kobolt } from '@devlop/kobolt'"
export {
    kobolt as default,
    kobolt as kobolt,
};
