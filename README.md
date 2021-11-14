<p align="center">
    <a href="https://www.npmjs.org/package/@devlop/kobolt"><img src="https://img.shields.io/npm/v/@devlop/kobolt.svg" alt="Latest Stable Version"></a>
    <a href="https://github.com/devlop/kobolt/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-green" alt="License"></a>
</p>

# kobolt

The most simple template factory in the world!

Turn any `<template>` into a `HTMLElement` in a breeze.

# Installing

using npm

```bash
npm install @devlop/kobolt
```

# Placeholders

Kobolt can automatically replace placeholders in your template using the format `{{ placeholder }}`.

# Usage

```
<template>
    <div data-description="{{ title }}">
        <h1 id="{{ id }}">{{ title }}</h1>
    </div>
</template>
```

```
import kobolt from '@devlop/kobolt';

const templateElement = document.querySelector('template');

const outputElement = kobolt(templateElement, {
    // pass a key value object with any placeholders that should be replaced.
    'title': 'Kobolt',
    'id': 'Co',
});

console.log(outputElement.outerHTML);

// <div data-description="Kobolt">
//     <h1 id="Co">Kobolt</h1>
// </div>
```
