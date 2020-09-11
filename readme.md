# Structure

## Website: built code and source code
This repository contains the source code of our website. When pushing to it's master branch, GitHub Actions automatically builts the website to another repository: https://github.com/Coderdojo-Schoeneweide/coderdojo-schoeneweide.github.io. Only ever edit the website-hugo repo, never the built code.

## Folder Structure
There is separate logic for the general theme and specific website content. 

### Theme
Everything concerning layout, styling, templates goes into the theme **coderdojoschoeneweide**.

#### assets/scss
* SCSS styling files can be added here.
* Variables in SCSS
  * `$color-dark`: Primäre dunkle Farbe für die Website, z.B. für Text
  * `$color-light`: Primäre helle Farbe für die Website, z.B. für Hintergründe
  * `$color-main`: Themenfarbe (Akzentfarbe) der Website, momentan orange
* Classes in SCSS
  * `.wrapper`: Beschränkt die Breite des Inhalts auf eine vorgegebene Weite (momentan 900px)
  * `.background-main`: Färbt den Hintergrund des Elements in der Farbe, die in der Variablen `$color-main` gepeichert ist

#### static
* **images** contains images that are part of the theme, such as contact icons
* **js** contains scripts that are part of the theme like obfuscate.js for the impressum

#### layouts
* directly in the **layouts** folder you find the template (https://gohugo.io/templates/introduction/) index.html which is for the homepage
* in **\_default** you find templates used on the content:
  * baseof is used on each page
  * impressum on the impressum
  * list on the blog overview page
  * single on individual blog post pages.
* in **partials** you find html-snippets that can be re-used. 
  
### Content
Specific website content is split into multiple parts: 
* Specific media files, going into **static** (eg. team member images)
* specific data, going into **data** (eg. team member info)
* specific text content, like posts or website section text, going into **content**. 

Do not edit files in **resources/\_gen**. These are automatically created files, like the minified scss from the theme!

# How to develop locally
* Before developping for the first time: Install the extended version Hugo https://gohugo.io/getting-started/installing/ (hugo-extended, we need this because the regular version can not do SCSS processing which we need tho!)

* Clone this Repository
* Make a separate git branch for developing your feature if you're not doing a hotfix!
* In the root-folder, run `hugo serve` to make hugo build the website and run a local server with the website
* Make your changes
* Push
* Submit a Pull-Request for your changes to be merged into master and go live!

# Credits
* We used to Hugo Quick Start (https://gohugo.io/getting-started/quick-start/) guide for the basic set up and the Hugo documentation for further work.
* Thanks to https://thomas-leister.de/einfuehrung-in-hugo-theme-erstellen/ for the introduction on how to make own themes.
