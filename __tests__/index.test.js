const { createBem } = require('../dist/cjs/index.js')
const { test, expect } = require('@jest/globals')

test('name with prefix', () => {
    const { name } = createBem('form', 'el')
    expect(name).toBe('ElForm')
})

test('name', () => {
    const { name } = createBem('form')
    expect(name).toBe('Form')
})

test('name with special char', () => {
    const { name } = createBem('form-item', 'el')
    expect(name).toBe('ElFormItem')
})

test('block with prefix', () => {
    const { bem } = createBem('form', 'el')
    expect(bem()).toEqual(['el-form'])
})

test('block', () => {
    const { bem } = createBem('form')
    expect(bem()).toEqual(['form'])
})

test('element', () => {
    const { bem } = createBem('form', 'el')
    expect(bem('item')).toEqual(['el-form__item'])
})

test('only modifiers', () => {
    const { bem } = createBem('form', 'el')
    expect(bem(['disabled'])).toEqual(['el-form', 'el-form--disabled'])
})

test('only modifiers', () => {
    const { bem } = createBem('form', 'el')
    expect(bem({
        disabled: true,
    })).toEqual(['el-form', 'el-form--disabled'])
})

test('only modifiers', () => {
    const { bem } = createBem('form', 'el')
    expect(bem({
        name: 'name',
        number: 2,
    })).toEqual(['el-form', 'el-form--name-name', 'el-form--number-2'])
})

test('only modifiers', () => {
    const { bem } = createBem('form', 'el')
    expect(bem('item', {
        disabled: true,
    })).toEqual(['el-form__item', 'el-form__item--disabled'])
})

test('only modifiers', () => {
    const { bem } = createBem('form', 'el')
    expect(bem('item', {
        name: 'name',
        number: 2,
    })).toEqual(['el-form__item', 'el-form__item--name-name', 'el-form__item--number-2'])
})

test('full', () => {
    const { bem } = createBem('form', 'el')
    expect(bem('item', 'disabled')).toEqual(['el-form__item', 'el-form__item--disabled'])
})

test('full', () => {
    const { bem } = createBem('form', 'el')
    expect(bem('item', ['disabled'])).toEqual(['el-form__item', 'el-form__item--disabled'])
})
