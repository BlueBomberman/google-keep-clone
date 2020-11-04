<script>
  import { showSide } from "./store.js";
  import Icon from "fa-svelte";
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
  import { faInbox } from "@fortawesome/free-solid-svg-icons/faInbox";
  import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
  import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
  import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";

  const items = [
    {
      name: "Note",
      icon: faLightbulb,
      active: true,
    },
    {
      name: "Promemoria",
      icon: faBell,
      active: false,
    },
    {
      name: "Modifica Etichette",
      icon: faPen,
      active: false,
    },
    {
      name: "Archivio",
      icon: faInbox,
      active: false,
    },
    {
      name: "Trash",
      icon: faTrashAlt,
      active: false,
    },
  ];
  let mouseOver = false;

  function toggleOver() {
    mouseOver = !mouseOver;
  }
</script>

<style>
  nav {
    grid-area: sb;
    font-weight: 550;
  }

  .Open-bar {
    width: 300px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    cursor: pointer;
  }

  .btn {
    margin-left: 1em;
    background-color: transparent;
    border: none;
    color: rgb(88, 88, 88);
    padding: 12px 16px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 100%;
  }

  .Closed-bar li:hover {
    background-color: rgb(228, 228, 228);
    border-radius: 25px;
    height: fit-content;
    width: fit-content;
    padding: 0 0;
  }

  .Closed-bar .li-active {
    background-color: #feefc3;
    border-radius: 25px;
    height: fit-content;
    width: fit-content;
    padding: 0 0;
  }

  .Open-bar li:hover {
    background-color: rgb(228, 228, 228);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .Open-bar .li-active {
    background-color: #feefc3;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
</style>

<nav>
  {#if $showSide || mouseOver}
    <ul class="Open-bar" on:mouseleave={toggleOver}>
      {#each items as item}
        <li class:li-active={item.active}>
          <button type="button" class="btn"><Icon
              bind:icon={item.icon} /></button>
          <p>{item.name}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <ul class="Closed-bar" on:mouseover={toggleOver}>
      {#each items as item}
        <li class:li-active={item.active}>
          <button type="button" class="btn"><Icon
              bind:icon={item.icon} /></button>
        </li>
      {/each}
    </ul>
  {/if}
</nav>
