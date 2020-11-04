<script>
  export let note;
  import Palette from "./Palette.svelte";
  import { modalNoteId, showModal } from "./store.js";
  import NotesStore from "./store.js";

  //delete operation
  function handleDelete(id) {
    NotesStore.update((currentNotes) => {
      return currentNotes.filter((n) => n.id !== id);
    });
  }

  //open modal
  function toggleModal() {
    modalNoteId.set(note.id);
    showModal.set(true);
  }
</script>

<style>
  section {
    background-color: var(--note-bg-color, rgba(255, 255, 255, 0.8));
    min-height: 4em;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    padding: 1em;
  }

  section:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }

  h3 {
    margin: 0;
    font-weight: 630;
  }

  p {
    white-space: pre-line;
  }

  .container {
    display: flex;
    visibility: hidden;
  }

  section:hover .container {
    visibility: visible;
  }
</style>

<section on:click|self={toggleModal} style="--note-bg-color:{note.color};">
  <h3 on:click|self={toggleModal}>{note.title}</h3>
  <p on:click|self={toggleModal}>{note.text}</p>

  <!-- <slot /> -->
  <div class="container">
    <Palette
      bind:chosenColor={note.color}
      isNote={true}
      on:deletePressed={handleDelete(note.id)} />
  </div>
</section>
