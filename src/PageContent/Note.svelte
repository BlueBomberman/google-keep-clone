<script>
  export let note;

  import Palette from "./Palette.svelte";
</script>

<style>
  section {
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
  }

  section:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }

  h3 {
    margin: 0;
    font-weight: 630;
  }
</style>

<section on:click|self style="--note-bg-color:{note.color};">
  <h3 on:click|self>{note.title}</h3>
  <p on:click|self>{note.text}</p>

  <slot />
  <Palette bind:chosenColor={note.color} isNote={true} on:deletePressed />
</section>
