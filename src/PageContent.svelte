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
    grid-template-rows: auto 1fr;
    grid-template-areas: "sb insert" "sb content";
    margin-top: 75px;
    box-sizing: content-box;
  }
</style>

<div class="page-content">
  <Sidebar />
  <NoteCreate />
  <NotesArea />
</div>
