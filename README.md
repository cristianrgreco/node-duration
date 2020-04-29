# node-duration

> Create and convert durations to other temporal units.

[![Build Status](https://travis-ci.org/cristianrgreco/node-duration.svg?branch=master)](https://travis-ci.org/cristianrgreco/node-duration)

## Install

```bash
npm i --save node-duration
```

## Usage

```typescript
import { Duration } from "node-duration";

const duration = Duration.ofMillis(60000);

duration.toSeconds() // 60
duration.toMinutes() //  1
```
