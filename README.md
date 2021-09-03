# [react-render-actions](https://github.com/JB1905/react-render-actions) (WIP)

[![NPM version](https://img.shields.io/npm/v/react-render-actions?style=flat-square)](https://www.npmjs.com/package/react-render-actions)
[![NPM downloads](https://img.shields.io/npm/dm/react-render-actions?style=flat-square)](https://www.npmjs.com/package/react-render-actions)
[![NPM license](https://img.shields.io/npm/l/react-render-actions?style=flat-square)](https://www.npmjs.com/package/react-render-actions)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/react-render-actions?style=flat-square)](https://codecov.io/gh/JB1905/react-render-actions)
[![Travis](https://img.shields.io/travis/com/JB1905/react-render-actions/master?style=flat-square)](https://app.travis-ci.com/github/JB1905/react-render-actions)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-render-actions?style=flat-square)](https://bundlephobia.com/result?p=react-render-actions)

## About

Set of JavaScript actions to use during component rendering

### Demo

[**Playground – play with library in Storybook**](https://jb1905.github.io/react-render-actions/)

### Similar Projects

- [React For](https://github.com/MJez29/react-for/) by [Michal Jez](https://github.com/MJez29/)
- [React If](https://github.com/romac/react-if/) by [Romain Ruetschi](https://github.com/romac/)
- [React Switch Case](https://github.com/AlexSergey/react-switch-case/) by [Sergey](https://github.com/AlexSergey/)

## Contents

- [How to Install](#how-to-install)
- [Components](#components)
  - [Conditions](#conditions)
    - [If-Else](#if-else)
    - [When](#when)
    - [Unless](#unless)
  - [Functions](#functions)
    - [Map](#map)
    - [Filter](#filter)
    - [Reduce](#reduce)
  - [Loops](#loops)
    - [For](#for)
    - [ForOf](#forof)
    - [ForIn](#forin)
    - [ForEach](#foreach)
    - [While](#while)
    - [DoWhile](#dowhile)
  - [Promises](#promises)
  - [Switch](#switch)
  - [Timeouts](#timeouts)
    - [SetTimeout](#settimeout)
    - [SetInterval](#setinterval)

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

### Conditions

#### If-Else

```js
import { If, Then, Else } from 'react-render-actions';

<If condition={2 < 3}>
  <Then>
    <p>2 is smaller than 3</p>
  </Then>

  <Else>
    <p>2 isn't smaller than 3</p>
  </Else>
</If>
```

##### Available options

**_If_**

| Param     | Type          | Default | Description         |
| --------- | ------------- | ------- | ------------------- |
| condition | () => boolean | ` `     | condition to be met |

#### When

```js
import { When } from 'react-render-actions';

<When condition={2 < 3}>
  <p>2 is smaller than 3</p>
</When>
```

##### Available options

| Param     | Type          | Default | Description         |
| --------- | ------------- | ------- | ------------------- |
| condition | () => boolean | ` `     | condition to be met |

#### Unless

```js
import { Unless } from 'react-render-actions';

<Unless condition={2 > 3}>
  <p>2 isn't greater than 3</p>
</Unless>
```

##### Available options

| Param     | Type          | Default | Description         |
| --------- | ------------- | ------- | ------------------- |
| condition | () => boolean | ` `     | condition to be met |

---

### Functions

#### Map

```js
import { Map } from 'react-render-actions';

<Map data={[1, 2, 3]}>
  {(item, index) => <p key={index}>{item}</p>}
</Map>
```

##### Available options

| Param  | Type  | Default | Description |
| ------ | ----- | ------- | ----------- |
| `data` | array | ` `     | Data to map |

#### Filter

```js
import { Filter } from 'react-render-actions';

<Filter data={[1, 2, 3]} pattern={(item) => item !== 2}>
  {(filteredData) => <p>{JSON.stringify(filteredData)}</p>}
</Filter>
```

##### Available options

| Param     | Type    | Default | Description    |
| --------- | ------- | ------- | -------------- |
| `data`    | array   | ` `     | Data to filter |
| `pattern` | boolean | ` `     | Filter pattern |

#### Reduce

```js
import { Reduce } from 'react-render-actions';

<Reduce data={[1, 2, 3]} pattern={(prev, next) => prev + next}>
  {(reducedValue) => <p>{reducedValue}</p>}
</Reduce>
```

##### Available options

| Param     | Type    | Default | Description    |
| --------- | ------- | ------- | -------------- |
| `data`    | array   | ` `     | Data to reduce |
| `pattern` | boolean | ` `     | Reduce pattern |

---

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

---

### Promises

```js
import { RPromise, Resolve, Reject } from 'react-render-actions';

const promise = {}

<RPromise promise={promise}>
  <Resolve>
    <p>Resolved!</p>
  </Resolve>

  <Reject>
    <p>Rejected!</p>
  </Reject>
</RPromise>
```

---

### Switch

```js
import { Switch, Case, Default } from 'react-render-actions';

<Switch switchValue="banana">
  <Case case="apple">
    <p>Apple</p>
  </Case>

  <Case case="banana">
    <p>Banana</p>
  </Case>

  <Case case="pear">
    <p>Pear</p>
  </Case>

  <Case case="raspberry">
    <p>Raspberry</p>
  </Case>

  <Default>
    <p>Fruit not found</p>
  </Default>
</Switch>
```

##### Available options

**_Switch_**

| Param         | Type   | Default | Description  |
| ------------- | ------ | ------- | ------------ |
| `switchValue` | string | ` `     | Switch value |

**_Case_**

| Param  | Type   | Default | Description |
| ------ | ------ | ------- | ----------- |
| `case` | string | ` `     | Case value  |

---

### Timeouts

#### SetTimeout

```js
import { SetTimeout } from 'react-render-actions';

<SetTimeout enabled timeout={4000}>
  <p>Hello World!</p>
</SetTimeout>
```

##### Available options

| Param        | Type       | Default | Description                     |
| ------------ | ---------- | ------- | ------------------------------- |
| `timeout`    | number     | ` `     | Timeout value (in milliseconds) |
| `enabled`    | boolean    | ` `     | Start timeout                   |
| `onTimeout`  | () => void | ` `     | Callback on timeout             |
| `onEnabled`  | () => void | ` `     | Callback on enabled             |
| `onDisabled` | () => void | ` `     | Callback on disabled            |
| `onDestroy`  | () => void | ` `     | Callback on destroy             |

#### SetInterval

```js
import { SetInterval } from 'react-render-actions';

<SetInterval initialCounter={0} interval={2000}>
  {(i) => <p>{i}</p>}
</SetInterval>
```

##### Available options

| Param            | Type                      | Default | Description                      |
| ---------------- | ------------------------- | ------- | -------------------------------- |
| `initialCounter` | number                    | ` `     | Initial counter value            |
| `paused`         | boolean                   | ` `     | Pause timeout                    |
| `interval`       | number                    | ` `     | Interval value (in milliseconds) |
| `onInterval`     | (counter: number) => void | ` `     | Callback on interval             |
| `onStart`        | () => void                | ` `     | Callback on start                |
| `onPause`        | () => void                | ` `     | Callback on pause                |
| `onDestroy`      | () => void                | ` `     | Callback on pause                |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
