import { writable } from 'svelte/store'


export let modalNoteId = writable();
export let showModal = writable(false);
export let showSide = writable(true);

const NotesStore = writable([
  {
    id: 1,
    title: "Libri da leggere",
    text: "-Signore degli anelli \n-il mondo di sofia \n-l'alchimista",
    color: "#cbf0f8",
  },
  {
    id: 2,
    title: "Ricette",
    text: "Pasta al sugo, \nbistecche ai ferri, \ninsalata russa",
    color: "#ffffff",
  },
  {
    id: 3,
    title: "Citazioni",
    text:
      "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum eros est, at accumsan sem cursus nec.' \n\n'Nulla facilisi. Phasellus nec turpis vitae augue pellentesque feugiat. Aliquam lacinia ornare risus, quis suscipit erat bibendum vitae. Suspendisse ac enim consectetur, facilisis odio sit amet, interdum ipsum.' ",
    color: "#fdcfe8",
  },
])

export default NotesStore;