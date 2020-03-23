<script>
	import { fade } from 'svelte/transition';
	import Nav from '../components/Nav.svelte';
</script>

<div class="wrap">

	<Nav  />
	<slot></slot>

</div>
