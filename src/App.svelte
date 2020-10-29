<script>
  import Navbar from "./Navbar.svelte";
  import PageContent from "./PageContent.svelte";
  import Modal from "./PageContent/Modal.svelte";
</script>

<style>
  main {
    text-align: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main class="main">
  <Modal />
  <Navbar />
  <PageContent />
</main>
