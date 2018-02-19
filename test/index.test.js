import React from 'react'
import { Browser, Terminal, MacTerminal } from '../src/index'

test('Render Browser', () => {
  const wrapper = shallow(
    <Browser />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render Terminal', () => {
  const wrapper = shallow(
    <Terminal />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render MacTerminal', () => {
  const wrapper = shallow(
    <MacTerminal />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render Terminal with props', () => {
  const wrapper = shallow(
    <Terminal grayscale />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render Browser with props', () => {
  const wrapper = shallow(
    <Browser grayscale />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Render MacTerminal with props', () => {
  const wrapper = shallow(
    <MacTerminal grayscale />
  )
  expect(wrapper).toMatchSnapshot()
})