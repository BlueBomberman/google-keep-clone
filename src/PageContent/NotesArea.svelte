<script>
  import Note from "./Note.svelte";
  import Masonry from "svelte-masonry/Masonry.svelte";
  import { onDestroy } from "svelte";
  import { newNote } from "./store.js";

  let gap = "1.5rem";

  let notes = [
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
  ];

  const unsubscribe = newNote.subscribe((newValue) => {
    newValue.id = notes.length + 1;
    if (newValue.title != "" || newValue.text != "") {
      notes = [newValue, ...notes];
      gap = "1.5rem";
    }
  });
  onDestroy(unsubscribe);

  const deleteButton = (note) => {
    notes = notes.filter((n) => n !== note);
  };

  // modal
  import { modalNote } from "./store.js";
  import { showModal } from "./store.js";

  const toggleModal = (e, id) => {
    modalNote.set(notes.filter((n) => n.id === id)[0]);
    showModal.set(true);
  };

  const unsubscribe2 = modalNote.subscribe((newValue) => {
    if (newValue != undefined) {
      var index = notes.indexOf(notes.filter((n) => n.id === newValue.id)[0]);
      if (index !== -1) {
        notes[index] = newValue;
      }
    }
  });
  onDestroy(unsubscribe2);
</script>

<style>
  .grid {
    width: 95%;
    height: 100%;
  }
</style>

<div class="grid">
  <Masonry colWidth={'minmax(250px, 0.25fr)'} bind:gridGap={gap} items={notes}>
    {#each notes as note}
      <Note
        {note}
        on:click={(e) => toggleModal(e, note.id)}
        on:deletePressed={deleteButton(note)} />
    {/each}
  </Masonry>
</div>
