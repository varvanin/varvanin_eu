<script>
import { onMount } from 'svelte';
import { blur } from 'svelte/transition';

let show = false;
onMount(()=> {
    show = true;
})
</script>


{#if show}
<div transition:blur="{{amount: 10}}">
    <slot></slot>
</div>
{/if}