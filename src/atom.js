import React from 'react'
import { atom } from 'recoil'


export const User = atom({
    key: 'user',
    default: ''
})
export const List = atom({
    key: 'list',
    default: getInitialData()
})

function getInitialData() {
    const list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

export const DialogC = atom({
    key: 'dialogContent',
    default: null
})

export const EnteredDataState = atom({
    key: 'enteredDataState',
    default: { title: '', information: '' },
});