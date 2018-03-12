# create-lowdb-sync

> Synchronously create a [lowdb](https://www.npmjs.com/package/lowdb) in /tmp and populate it with some initial data

## Installation

```
npm install --save create-lowdb-sync
```

```
yarn add create-lowdb-sync
```

## Usage

```js
import { createDatabase } from 'create-lowdb-sync';

/* Handles identities and identity locators for external service ids */
const identity = createDatabase('identity', () => ({
  people: [
    {
      id: 10000,
      first_name: 'David',
      last_name: 'Wallace',
      tagline: 'I am best known as the Dunder Mifflin CFO',
      username: 'dwallace',
      salesforceCompanyId: 2, // Dunder Mifflin
      hrEmployeeId: 1000
    },
    {
      id: 11000,
      first_name: 'Michael',
      last_name: 'Scott',
      tagline: 'Paper king of Scranton, PA! Founder of the Dundies! RegionalManager4Life.',
      username: 'mscott',
      salesforceCompanyId: 2, // Dunder Mifflin
      hrEmployeeId: 1100
  	},
    {
      id: 12000,
      first_name: 'Jim',
      last_name: 'Halpert',
      tagline: 'Awkward faces are my primary sales weapon.',
      username: 'jhalpert',
      salesforceCompanyId: 2, // Dunder Mifflin
      hrEmployeeId: 1200
    },
    {
      id: 13000,
      first_name: 'Dwight',
      last_name: 'Schrute',
      tagline: 'Fact. I could sell beets to a beet farmer.',
      username: 'dschrute',
      salesforceCompanyId: 2, // Dunder Mifflin
      hrEmployeeId: 1300
    },
    {
      id: 140000,
      first_name: 'Pam',
      last_name: 'Beesly',
      tagline: 'I hate the idea that someone out there hates me.',
      username: 'pbeesly',
      salesforceCompanyId: 2, // Dunder Mifflin
      hrEmployeeId: 1400
    }
  ]
}));

identity.get('people').first().value().first_name // David 

```