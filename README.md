# Frontend Mentor - Recipe finder website solution

This is a solution to the Recipe finder website challenge on Frontend Mentor. It implements a simple, performant recipe browsing experience with search and time-based filters.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the Home, About, Recipes index, and Recipe detail pages
- Search recipes by name or ingredient
- Filter recipes by maximum prep time and cook time
- See responsive layouts from mobile to desktop
- See focus and hover states on interactive controls

Routes:

```
- / —> Home
- /about —> About
- /recipes —> Recipes index (search + filters)
- /recipes/[slug] —> Recipe details and related recipes
```

### Screenshot

<table >
  <tr>
    <td><img src="public/screenshots/Healthy Bites - mobile.png" alt="Healthy Bites – Mobile" /></td>
    <td><img src="public/screenshots/Healthy Bites - tablet.png" alt="Healthy Bites – Tablet" /></td>
    <td><img src="public/screenshots/Healthy Bites - main.png" alt="Healthy Bites – Desktop" /></td>
  </tr>
</table>

### Links

- Live site: not deployed yet

## My process

### Built with

- Next.js 15.5 (App Router, React 19.1, Server Components)
- Tailwind CSS v4 (via @tailwindcss/postcss)
- Local fonts via next/font (Nunito, Nunito Sans)
- Shadcn UI components
- MongoDB Node.js driver 6.x
- Biome 2.2 + Prettier 3.6 (with prettier-plugin-tailwindcss)

### What I learned

- Server-side fetching relative recipes to the current displayed recipe by matching ingredients.
- Using local variable fonts with next/font for better CLS and consistent typography.

### Continued development

- Add pagination and/or infinite scroll to Recipes.
- Implement authentication for authoring tools and favorites.

### Useful resources

- Next.js App Router docs: https://nextjs.org/docs/app
- Tailwind CSS v4: https://tailwindcss.com/

## Author

- [Ahmad Yousif](https://github.com/ahmadyousif89)

## Acknowledgments

- Frontend Mentor for the challenge brief and assets.
- Icons and images are included in the repository’s public assets folder.
