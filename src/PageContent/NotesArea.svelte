<script>
  import Note from "./Note.svelte";
  import Masonry from "svelte-masonry/Masonry.svelte";
  import NotesStore from "./store.js";
  // import { fade } from "svelte/transition";
  // import { flip } from "svelte/animate";

  let gap = "1.5rem";
</script>

<style>
  .grid {
    width: 95%;
    height: 100%;
  }

  /* .card {
    overflow: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  } */
</style>

<div class="grid">
  <Masonry
    colWidth={'minmax(250px, 0.25fr)'}
    bind:gridGap={gap}
    items={$NotesStore}>
    {#each $NotesStore as note (note.id)}
      <!-- <div class="card" animate:flip={{ duration: 500 }}> -->
      <Note {note} />
      <!-- </div> -->
    {/each}
  </Masonry>
</div>
