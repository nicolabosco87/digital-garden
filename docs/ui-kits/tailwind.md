# Tailwind

## Handle style based on parent state (es: hover)

https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state

### Through Group

```html
<a
  href="#"
  class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
>
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">
    Create a new project from a variety of starting templates.
  </p>
</a>
```

### Through named Group

```html
<ul role="list">
  {#each people as person}
  <li class="group/item hover:bg-slate-100 ...">
    <img src="{person.imageUrl}" alt="" />
    <div>
      <a href="{person.url}">{person.name}</a>
      <p>{person.title}</p>
    </div>
    <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
      <span class="group-hover/edit:text-gray-700 ...">Call</span>
      <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
        <!-- ... -->
      </svg>
    </a>
  </li>
  {/each}
</ul>
```
