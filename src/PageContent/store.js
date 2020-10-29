import { writable } from 'svelte/store'

export const newNote = writable({
    title: "",
    text: "",
    color: "",
    id: 0
  })

export let modalNote = writable();
// export let showModal = writable({
//   val: false;
// });
export let showModal = writable(false);