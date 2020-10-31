<script>
  //icone
  import Icon from "fa-svelte";
  import { faPalette } from "@fortawesome/free-solid-svg-icons/faPalette";
  import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
  import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

  let paletteIcon = faPalette;
  let checkIcon = faCheck;
  let trashIcon = faTrashAlt;

  const colors = [
    "#ffffff",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed",
  ];

  export let chosenColor = "#ffffff";
  export let isNote = false;

  // event dispatcher to delete
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function deletePressed() {
    dispatch("deletePressed");
  }

  //change the color
  function toggleColor(color) {
    chosenColor = color;
  }
</script>

<style>
  .color {
    box-shadow: 0px 0px 2px 1px rgba(122, 122, 122, 0.5);
    opacity: 0.8;
    margin: 5px;
    outline: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: none;
    overflow: hidden;
  }

  .color:hover {
    border: 2px solid #333;
    box-shadow: none;
  }

  .btn {
    background-color: transparent;
    border: none;
    color: black;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 100%;
  }

  .btn:hover {
    background-color: #d3d3d3;
  }

  .wrapper:hover .pop-over {
    visibility: visible;
  }
  .pop-over {
    visibility: hidden;
    position: absolute;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.2s;
    width: 9em;
    height: 7.5em;
  }
</style>

<div class="wrapper">
  <button type="button" class="btn"><Icon bind:icon={paletteIcon} /></button>
  <div class="pop-over">
    {#each colors as color}
      <button
        type="button"
        class="color"
        style="background:{color}"
        on:click={(e) => toggleColor(color)}>
        {#if color === chosenColor}
          <Icon color="#ccc" bind:icon={checkIcon} />
        {/if}
      </button>
    {/each}
  </div>
</div>
{#if isNote}
  <button type="button" class="btn" on:click={deletePressed}><Icon
      bind:icon={trashIcon} /></button>
{/if}
