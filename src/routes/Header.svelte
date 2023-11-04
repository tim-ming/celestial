<script>
  import { page } from "$app/stores";
</script>

<header>
  <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
    <a href="/">Home</a>
  </li>
</header>
