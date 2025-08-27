<script lang="ts">
  import { getData, addData } from '$lib/remote/data.remote';

  const randomWords = ['tree', 'river', 'mountain', 'desert', 'ocean', 'sky'];

  function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }
</script>

<h1>Data from remote function</h1>
{#each await getData() as item}
  <h2>{item.title}</h2>
  <p>{item.slug}</p>
{/each}
<button onclick={() => addData(getRandomWord())}>Add post (remote command)</button>
<button onclick={() => addData(getRandomWord())}>Add post (remote command + server function)</button>
<button onclick={() => addData(getRandomWord())}>Add post (query abuse)</button>
