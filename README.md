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

### Loops

#### For

```js
import { For } from 'react-render-actions';

<For start={0} comparator={(i) => i < 10} next={(i) => i++}>
  {(i) => <p key={i}>Hello World!</p>}
</For>
```

#### ForOf

```js
import { ForOf } from 'react-render-actions';

<ForOf data={[1, 2, 3]}>
  {(i) => <p key={i}>{i}</p>}
</ForOf>
```

#### ForIn

```js
import { ForIn } from 'react-render-actions';

const data = {
  name: 'John',
  age: '21',
  email: 'john@example.com',
};

<ForIn data={data}>
  {([key, value]) => <p key={key}>{key}: {value}</p>}
</ForIn>
```

#### ForEach

```js
import { ForEach } from 'react-render-actions';

<ForEach data={[1, 2, 3]}>
  {(item) => <p>{item}</p>}
</ForEach>
```

#### While

```js
import { While } from 'react-render-actions';

<While test={2 > 1}>
  <p>Hello World!</p>
</While>
```

#### DoWhile

```js
import { DoWhile } from 'react-render-actions';

<DoWhile test={2 > 1}>
  <p>Hello World!</p>
</DoWhile>
```

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

<Reduce data={[1, 2, 3]} pattern={(prev, next) => prev + next}>
  {(filteredData) => <p>{JSON.stringify(filteredData)}</p>}
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
