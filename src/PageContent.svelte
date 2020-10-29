<script>
  import Sidebar from "./PageContent/Sidebar.svelte";
  import NoteCreate from "./PageContent/NoteCreate.svelte";
  import NotesArea from "./PageContent/NotesArea.svelte";

  let collapse = true;
</script>

<style>
  .page-content {
    min-height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 23% auto;
    grid-template-rows: auto auto;
    grid-template-areas: "sb insert" "sb content";
    margin-top: 50px;
    box-sizing: content-box;
  }
</style>

<div class="page-content">
  <Sidebar />
  <NoteCreate bind:collapse />
  <NotesArea />
</div>
