<script>
  import { modalNote } from "./store.js";
  import { showModal } from "./store.js";

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
</script>

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
  }
  .modal {
    padding: 10px;
    border-radius: 8px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
</style>

{#if show}
  <div class="backdrop" on:click|self={saveChanges}>
    <div class="modal">
      <input type="text" bind:value={note.title} />
      <input type="text" bind:value={note.text} />
      <button on:click={saveChanges}>Chiudi</button>
    </div>
  </div>
{/if}
