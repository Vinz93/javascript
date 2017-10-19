## Strings

### templates

### New methods

* .startsWith()

* .endsWith()

* .includes()

* .repeat()

```js
const accountNumber = '825242631RT0001';
`${accountNumber.startsWith('825')}` //true
//startsWith RT after 9?
`${accountNumber.startsWith('RT',9)}` //true
`${accountNumber.endsWith('825')}` //false
`${accountNumber.endsWith('001')}` //true
`${accountNumber.includes('RT')}` //tur
```
