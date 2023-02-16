<script lang="ts">
  import { fly } from 'svelte/transition'

  export let key: string
  export let duration: number = 300
  export let inX: number = -10
  export let outX: number = 5
</script>

{#key key}
  <div
    in:fly={{ x: inX, duration, delay: duration }}
    out:fly={{ x: outX, duration }}
  >
    <slot />
  </div>
{/key}

<!-- <style>
  div {
   
    position: absolute;
    inset: 0;
  }
</style> -->
