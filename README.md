# bem
Block Element Modifier
## createBem
```js
import { createBem } from '@fish-se7en/bem'

const {
    name,
    bem,
} = createBem('button', 'el')

console.log(name)  // ElButton
console.log(bem())  // ['el-button']
console.log(bem(['readonly'])  // ['el-button', 'el-button--readonly']

const {
    bem,
} = createBem('form', 'el')

console.log(bem('item'))  // ['el-form__item']
```


