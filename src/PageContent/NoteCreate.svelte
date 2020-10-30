<script>
  import Palette from "./Palette.svelte";
  import NotesStore from "./store.js";

  let nuovo = {
    title: "",
    text: "",
    color: "#ffffff",
    id: 0,
  };

  //open and close form
  let collapse = true;
  function toggleCollapse() {
    collapse = !collapse;
  }

  //add note
  function handleSubmit() {
    if (nuovo.title !== "" || nuovo.text !== "") {
      nuovo.id = $NotesStore.length + 1;
      NotesStore.update((notes) => {
        return [nuovo, ...notes];
      });
      console.log(nuovo);
    }
    nuovo = {
      title: "",
      text: "",
      color: "#ffffff",
      id: 0,
    };
    toggleCollapse();
  }

  //textarea resize
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
  form {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 50%;
    min-height: 60px;
    background-color: var(--note-bg-color, rgba(255, 255, 255, 0.8));
    height: fit-content;
    border-radius: 5px;
    box-shadow: 1px 1px 8px 1px rgba(89, 89, 89, 0.53);
    display: block;
    width: 100%;
    padding: 1rem;
    border-width: 0;
  }

  .title-field input {
    font-weight: 600;
  }

  ::placeholder {
    color: rgb(119, 119, 119);
    opacity: 1;
    font-weight: 550;
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
    background: rgb(236, 236, 236);
  }

  .collapsed-form {
    grid-area: insert;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 50%;
    background-color: var(--note-bg-color, rgba(255, 255, 255, 0.8));
    height: fit-content;
    border-radius: 5px;
    box-shadow: 1px 1px 8px 1px rgba(89, 89, 89, 0.53);
    display: block;
    width: 100%;
    padding: 1rem;
    border-width: 0;
    color: rgb(119, 119, 119);
    font-weight: 550;
    text-align: left;
  }
</style>

{#if collapse}
  <div class="collapsed-form" on:click={toggleCollapse}>Scrivi una nota...</div>
{:else}
  <form
    on:submit|preventDefault={handleSubmit}
    style="--note-bg-color:{nuovo.color};">
    <div class="title-field form-item">
      <input type="text" placeholder="Titolo" bind:value={nuovo.title} />
    </div>

    <div class="note-field form-item">
      <textarea
        minrows="1"
        placeholder="Scrivi una nota..."
        bind:value={nuovo.text}
        use:text_area_resize />
    </div>

    <div class="footer">
      <Palette bind:chosenColor={nuovo.color} />
      <button class="btn-close">Chiudi</button>
    </div>
  </form>
{/if}
