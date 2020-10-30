<script>
  import { modalNote } from "./store.js";
  import { showModal } from "./store.js";
  import Palette from "./Palette.svelte";

  let show = "false";
  showModal.subscribe((value) => {
    show = value;
  });

  let note;
  modalNote.subscribe((value) => {
    note = value;
  });

  const toggleModal = () => {
    if (show) show = false;
    showModal.set(false);
  };

  const saveChanges = (e) => {
    modalNote.set(note);
    toggleModal();
  };

  // per la textarea
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
</script>

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
  }
  /* .modal {
    padding: 10px;
    border-radius: 8px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  } */

  .modal {
    background-color: var(--note-bg-color, rgba(255, 255, 255, 0.8));
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
</style>

{#if show}
  <div
    class="backdrop"
    on:click|self={saveChanges}
    style="--note-bg-color:{note.color};">
    <div class="modal">
      <input class="title" type="text" bind:value={note.title} />
      <textarea minrows="1" bind:value={note.text} use:text_area_resize />
      <div class="footer">
        <Palette bind:chosenColor={note.color} />
        <!-- isNote={true} on:deletePressed -->
        <button on:click={saveChanges} class="btn-close">Chiudi</button>
      </div>
    </div>
  </div>
{/if}
