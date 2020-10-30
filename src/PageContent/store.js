import { writable } from 'svelte/store'

export const newNote = writable({
    title: "",
    text: "",
    color: "",
    id: 0
  })


export let modalNote = writable();
export let showModal = writable(false);
export let showSide = writable(true);