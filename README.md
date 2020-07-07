# [react-render-actions](https://github.com/jb1905/react-render-actions)

[![NPM version](http://img.shields.io/npm/v/react-render-actions.svg?style=flat-square)](https://www.npmjs.com/package/react-render-actions)
[![NPM downloads](http://img.shields.io/npm/dm/react-render-actions.svg?style=flat-square)](https://www.npmjs.com/package/react-render-actions)

## About

Set of JavaScript actions to use during component rendering

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-render-actions
```

Or Yarn:

```sh
$ yarn add react-render-actions
```

## Components

### Functions

#### Map

```js
import { Map } from 'react-render-actions';

<Map data={[1, 2, 3]}>
  {(item, index) => <p key={index}>{item}</p>}
</Map>
```

#### Filter

```js
import { Filter } from 'react-render-actions';

<Filter data={[1, 2, 3]} pattern={(item) => item !== 2}>
  {(item, index) => <p key={index}>{item}</p>}
</Filter>
```

#### Reduce

```js
import { Reduce } from 'react-render-actions';

<Reduce data={[1, 2, 3]} pattern={(numbers) => numbers}>
  {(item) => <p key={index}>{item}</p>}
</Reduce>
```

### Timeouts

#### SetTimeout

```js
import { SetTimeout } from 'react-render-actions';

<SetTimeout enabled timeout={4000}>
  <p>Hello</p>
</SetTimeout>
```

#### SetInterval

```js
import { SetInterval } from 'react-render-actions';

<SetInterval enabled initialCounter={0} timeout={2000}>
  {(i) => <p>{i}</p>}
</SetInterval>
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
