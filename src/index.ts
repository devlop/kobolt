'use strict';

const kobolt = (templateElement : HTMLTemplateElement) : HTMLElement => {
    return (templateElement.content.firstElementChild !).cloneNode(true) as HTMLElement;
};

// allows "import kobolt from '@devlop/kobolt'" and "import { kobolt } from '@devlop/kobolt'"
export {
    kobolt as default,
    kobolt as kobolt,
};
