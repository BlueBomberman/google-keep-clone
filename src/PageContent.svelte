<script>
  import Sidebar from "./PageContent/Sidebar.svelte";
  import NoteCreate from "./PageContent/NoteCreate.svelte";
  import NotesArea from "./PageContent/NotesArea.svelte";
</script>

<style>
  .page-content {
    min-height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr;
    /* grid-auto-rows: min-content; */
    grid-template-areas: "sb content";
    margin-top: 75px;
    /* box-sizing: content-box; */
  }

  .content {
    grid-area: content;
  }
</style>

<div class="page-content">
  <Sidebar />
  <div class="content">
    <NoteCreate />
    <NotesArea />
  </div>
</div>
