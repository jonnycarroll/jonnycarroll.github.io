# About this repo

> Imitation is the highest form of flattery.

This site was built entirely by my hands, from scratch, using a combination of Jekyll, Tailwind and Alpine.js.
However, I would like to give a big shout out to [Brittany Chiang](https://brittanychiang.com/) for much inspiration.

I am happy to pay it forward. If you would like to fork this site **please go ahead, but with attribution to [jonnycarroll.dev](https://jonnycarroll.dev)**.

Getting Jekyll and Tailwind to play together took a little bit of searching and tinkering but overall, the combination is super easy to work with.
Add in Alpine.js and overall you have a very quick and easy way to build a static website.

# Running the site locally

For local development, use the following script:

```shell
./run-dev.sh
# runs: bundle exec jekyll serve --livereload
```

`--livereload` updates the browser real-time as you make changes to your code.

# Releasing changes to the interwebs

You can test your build with the following script:

```shell
./run-build.sh
# runs: JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build
```

This site comes with a GitHub Workflow to deploy to your GitHub Pages site.

You will need to configure GitHub Pages on your account:
1. Go to your repo settings
2. Select Pages from the left hand menu
3. If you have not already done so, follow the instructions for setting up your Pages site
4. For Build and deployment, select GitHub Actions for `Source`
5. Every time you commit changes to `main` the GitHub Workflow will trigger
