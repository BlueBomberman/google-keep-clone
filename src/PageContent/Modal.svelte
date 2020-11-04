<script>
  import { modalNoteId, showModal } from "./store.js";
  import NotesStore from "./store.js";
  import Palette from "./Palette.svelte";

  //initialize note
  let note;
  modalNoteId.subscribe((id) => {
    note = $NotesStore.filter((notes) => notes.id === $modalNoteId)[0];
  });

  //close and save
  function toggleModal() {
    showModal.set(false);
  }

  function saveChanges() {
    let index = $NotesStore.indexOf(
      $NotesStore.filter((n) => n.id === note.id)[0]
    );
    if (index !== -1) {
      NotesStore.update((notes) => {
        notes[index] = note;
        return notes;
      });
    }
    toggleModal();
  }

  // textarea resize
  function resize({ target }) {
    target.style.height = "1px";
    target.style.height = +target.scrollHeight + "px";
  }

  function text_area_resize(el) {
    resize({ target: el });
    el.style.overflow = "hidden";
    el.addEventListener("input", resize);

    return {
      destroy: () => el.removeEventListener("input", resize),
    };
  }

  //delete Operation
  function handleDelete() {
    NotesStore.update((currentNotes) => {
      return currentNotes.filter((n) => n.id !== note.id);
    });
    toggleModal();
  }
</script>

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal {
    background-color: var(--note-bg-color, #ffffff);
    min-height: 4em;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.2s;
    width: 100%;
    text-align: left;
    cursor: pointer;
    padding: 1em;
    margin: 10% auto;
    max-width: 50%;
  }

  .modal:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }

  input,
  textarea {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
  }

  textarea {
    resize: none;
    overflow: hidden;
  }

  .title {
    font-size: 20px;
    font-weight: 550;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  .btn-close {
    margin-right: 20px;
    border-radius: 5px;
    background: transparent;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-close:hover {
    background: white;
  }

  .block {
    display: flex;
  }
</style>

{#if $showModal}
  <div
    class="backdrop"
    on:click|self={saveChanges}
    style="--note-bg-color:{note.color};">
    <div class="modal">
      <input
        class="title"
        placeholder="titolo qui.."
        type="text"
        bind:value={note.title} />
      <textarea
        placeholder="testo qui.."
        minrows="1"
        bind:value={note.text}
        use:text_area_resize />
      <div class="footer">
        <div class="block">
          <Palette
            bind:chosenColor={note.color}
            isNote={true}
            on:deletePressed={handleDelete} />
        </div>
        <button on:click={saveChanges} class="btn-close">Chiudi</button>
      </div>
    </div>
  </div>
{/if}
