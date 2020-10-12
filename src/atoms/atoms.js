import {
    atom
  } from 'recoil'

export const ordersList = atom({
    key: 'orders', // unique ID (with respect to other atoms/selectors)
    default: []
})

