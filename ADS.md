# Ads — boosterpackheroes.wiki

The Native Banner slot after Quick Answer is wired and **turned on** for boosterpackheroes.wiki only.

`sites/booster/ads.config.ts` sets `enabled` to true. `afterQuickAnswer.id` is `7806fbe5ed7b719b7ed4d3e5355591ae`. `afterQuickAnswer.scriptSrc` and the site-wide `scriptSrc` are `https://bauval.org/21/7806fbe5ed7b719b7ed4d3e5355591ae`. That zone is this domain’s own Get Code. No key from another game is stored here. `invokeBase` stays empty. The container id is `container-7806fbe5ed7b719b7ed4d3e5355591ae`.

`analytics.gaId` in `sites/booster/site.config.ts` is empty. The base layout does not load GA4.

Adult and sensitive categories stay off. The 404 page does not render a slot.
