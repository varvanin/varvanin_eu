<script>
  import Logo from '../components/Logo.svelte';

  
  let slogan = "szybko. tanio. zajebiście.";
  let desc = "tworzenie i projektowanie stron internetowych.";
  let copy = "varvanin.eu © 2020 wszelkie prawa zastrzeżone.";

  let bgImage = 'img/bodyBg.jpg';

  let socials = [
    '<a href="/"><i class="fab fa-facebook" /></a>',
    '<a href="/"><i class="fab fa-instagram" /></a>',
    '<a href="/"><i class="fab fa-whatsapp" /></a>',
    '<a href="/"><i class="fab fa-facebook-messenger" /></a>'
  ];
  
</script>

<svelte:head>

  <title>Tworzenie i projektowanie stron internetowych w Słubicach</title>

  <meta name="keywords" content="www, projektowanie, strony internetowe, strony www, sklep internetowy, słubice"/>
  <meta name="description" content="Tworzenie i projektowanie stron internetowych w Słubicach."/>
  <meta name="language" content="PL">
  <meta name="author" content="Yevhen Varvanin, varvanin84@gmail.com">

</svelte:head>
<!-- Home Section -->
<section class="page home" style="background-image: url({bgImage})">
  <div class="page-content">
    <div class="text-wrap elem">
      <div class="content">
        <div class="home-wrap">
            <Logo />
            <h1>{slogan}</h1>
            <p>{desc}</p>

          <!-- Social -->
          <div class="social">
            <ul>
              {#each socials as social}
              <li>{@html social}</li>
              {/each}
            </ul>
          </div>

          <!-- Copyright -->
          <div class="copy">
            <p>{copy}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>