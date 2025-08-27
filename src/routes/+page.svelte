<script lang="ts">
  import { getData, addData } from '$lib/remote/data.remote';

  const randomWords = ['tree', 'river', 'mountain', 'desert', 'ocean', 'sky'];

  async function addRandomPost() {
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    await addData(randomWord);
  }
</script>

<h1>Data from remote function</h1>
{#each await getData() as item}
  <h2>{item.title}</h2>
  <p>{item.slug}</p>
{/each}
<button onclick={addRandomPost}>Add post</button>
