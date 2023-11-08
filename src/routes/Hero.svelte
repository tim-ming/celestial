<script lang="ts">
  import HeroImage from "$lib/images/hero.jpg";
  import HeroImageWebp from "$lib/images/hero.webp";
</script>

<section
  class="relative flex flex-col w-full items-center justify-center bg-cover bg-center vignette min-h-[min(calc(50vh+10vw+15rem),45rem)]"
  style={`background-image:url('images/hero.jpg');background-image: -webkit-image-set(url("images/hero.webp")`}
>
  <div class="absolute flex flex-col gap-12 items-center justify-center px-10">
    <div class="flex flex-col gap-8">
      <div
        class="relative flex gap-x-3 gap-y-2 tracking-tight flex-wrap items-center justify-center [&>*]:[text-shadow:0px_10px_50px_rgba(255,255,255,0.5)]"
      >
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-violet-300 text-transparent bg-clip-text"
        >
          Celestial
        </h1>
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          NFTs
        </h1>
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          at
        </h1>
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          your
        </h1>
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          endless
        </h1>
        <h1
          class="text-5xl font-semibold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          disposal.
        </h1>
      </div>
      <h2 class="text-slate-300 font-medium text-center">
        Thrift through your universe of Digital Collectibles at lowest prices.
      </h2>
    </div>
    <div class="flex gap-4">
      <a
        href="/marketplace"
        class="relative w-64 backdrop-blur-xl py-4 flex items-center justify-center font-medium text-lg rounded-md overflow-hidden shadow-gray-400 hover:shadow-gray-400 hover:shadow-2xl transition duration-1000 ease-in-out"
      >
        <div
          class="absolute w-full h-full bg-gradient-to-r backdrop-blur-xl from-white/80 to-violet-200/80"
        />
        <p class="relative">Explore NFTs</p>
      </a>
    </div>
  </div>
</section>

<style>
  .vignette {
    box-shadow: inset 0 0 9999px 9999px rgba(0, 0, 0, 0.4),
      inset 0 0 100px 100px rgba(0, 0, 0, 0.7),
      inset 0 0 50px 50px rgba(0, 0, 0, 0.2),
      inset 0 -30px 20px -20px rgba(0, 0, 0, 1),
      inset 0 0px 20px 2px rgba(0, 0, 0, 1);
  }
</style>
