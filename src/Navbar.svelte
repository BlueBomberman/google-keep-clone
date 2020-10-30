<script>
  import Icon from "fa-svelte";
  import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
  import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
  import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
  import { faThList } from "@fortawesome/free-solid-svg-icons/faThList";
  import { faRedoAlt } from "@fortawesome/free-solid-svg-icons/faRedoAlt";
  import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

  import { showSide } from "./PageContent/store.js";
  function toggleShow() {
    showSide.update((value) => !value);
  }

  let menuIcon = faBars;
  let searchIcon = faSearch;
  let closeIcon = faTimes;
  let layoutIcon = faThList;
  let reloadIcon = faRedoAlt;
  let settingsIcon = faCog;
</script>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: solid;
    border-width: thin;
    border-color: rgb(202, 202, 202);
    background-color: white;
  }

  .nav-item {
    margin-left: 1em;
    cursor: pointer;
  }

  .btn {
    background-color: transparent;
    border: none;
    color: rgb(141, 141, 141);
    padding: 12px 16px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 100%;
  }

  .btn:hover {
    background-color: #d3d3d3;
    color: rgb(29, 29, 29);
  }

  h2 {
    font-weight: 480;
    margin-left: 0.3em;
  }

  .search-bar {
    width: 50%;
    height: 55px;
    background-color: rgb(243, 243, 243);
    border-radius: 8px;
    padding: 1rem;
    border-width: 0;
    display: flex;
    justify-content: space-between;
    margin-left: 6em;
  }
  .block {
    display: flex;
  }
  .buttons-block {
    width: 20%;
    display: flex;
    justify-content: flex-end;
  }
</style>

<header class="navbar">
  <button type="button" class="nav-item btn" on:click={toggleShow}><Icon
      bind:icon={menuIcon} /></button>
  <img
    src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
    alt="logo google keep"
    class="nav-item logo" />
  <h2>Keep</h2>
  <div class="search-bar nav-item">
    <div class="block">
      <Icon bind:icon={searchIcon} />
      <div class="nav-item">Cerca...</div>
    </div>
    <Icon bind:icon={closeIcon} />
  </div>
  <div class="buttons-block">
    <button type="button" class="btn"><Icon bind:icon={reloadIcon} /></button>
    <button type="button" class="btn"><Icon bind:icon={layoutIcon} /></button>
    <button type="button" class="btn"><Icon bind:icon={settingsIcon} /></button>
  </div>
</header>
