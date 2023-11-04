<script lang="ts">
  import HeroImage from "$lib/images/hero.jpg";
  import HeroImageWebp from "$lib/images/hero.webp";
</script>

<source type="image/jpg" />
<section>
  <div
    class="relative"
    style="box-shadow: inset 0 0 10px 10px rgba(255, 0, 0, 0.5);"
  >
    <picture>
      <source srcset={HeroImageWebp} type="image/webp" />
      <source srcset={HeroImage} type="image/jpeg" />
      <img src={HeroImage} alt="space" />
    </picture>
  </div>
</section>
Hello world
