# node-duration

> Create and convert durations to other temporal units.

[![Build Status](https://travis-ci.org/cristianrgreco/node-duration.svg?branch=master)](https://travis-ci.org/cristianrgreco/node-duration)

## Install

```bash
npm i --save node-duration
```

## Usage

```typescript
import { Duration, TemporalUnit } from "node-duration";

const duration = new Duration(60_000, TemporalUnit.MILLISECONDS);

duration.get(TemporalUnit.SECONDS) // 60
duration.get(TemporalUnit.MINUTES) //  1
```
