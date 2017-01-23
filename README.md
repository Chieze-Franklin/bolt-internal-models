# bolt-internal-models

Internal Bolt module that defines the Bolt models.

## Installation

```sh
$ npm install bolt-internal-models
```

## Use

```js
var models   = require('bolt-internal-models')

models.app.findOne({ name: 'bolt-settings', startup: true }, function(errorApp, app){});
```

### Note

This is an internal module and should not be used in 3rd party apps.