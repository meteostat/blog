---
lang: en
title: Relaunching the Meteostat Web App on Cloudflare Workers
date: 2021-10-21
tags:
  - Developers
  - Vue
  - Cloudflare
author: Christian Lamprecht
featuredimg: 'https://media.meteostat.net/insights/2021/10/meteostat-webapp.png'
summary: Find out how we transferred the Meteostat web app to Cloudflare Workers.
---

Some of you may have already noticed that the Meteostat web app got a facelifting recently. We recreated everything using Vue 3, moving to a proper frontend framework for our platform. Vue does an amazing job in providing a fast onboarding for newcomers and a joyful experience for developers. It also has a relatively small footprint and is backed by a vibrant open source community. However, Single Page Applications (SPAs) come with one challenge: SEO.

[Meteostat](https://meteostat.net) has a significant share of direct traffic on its web app. But the majority of users still comes from search engines like Google and Bing. Thus, it wasn’t an option for us to leave SEO behind and trust in Google’s ability to execute JavaScript when crawling websites. As Meteostat is a highly dynamic application, pre-rendering wasn’t possible either. Thankfully, there is a solution for SEO-friendly SPAs: Server-Side Rendering ([SSR](https://v3.vuejs.org/guide/ssr/introduction.html)). The concept is simple: the first page which is requested by a user is pre-rendered on the server. All following requests are rendered on client side. This concept comes with two important advantages:

1. It solves the SEO problem. Search engines will directly see the fully rendered page.
2. It improves the initial load performance and leads to a faster time-to-content.

Going with SSR meant we needed to figure out where to render our pages server-side. As we were already heavily using Cloudflare for all kinds of things, we wanted to give their Workers platform a try and see if we could serve the Meteostat [web app](https://github.com/meteostat/webapp) from Cloudflare’s edge. After some research we stumbled upon an amazing [Vite extension](https://github.com/frandiox/vitedge) which closes the gap between SSR for Vue 3 and Cloudflare Workers.

**Tip**: If you want to try our setup yourself, there is a useful template [available on GitHub](https://github.com/frandiox/vitessedge-template).

After setting up an environment with Vue 3, Vite 2 and Vitedge, the development process was pretty straightforward. Thanks to [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler), deploying the web app to Cloudflare Workers was as easy as typing a single CLI command.

---

We are currently running the Meteostat web app under Cloudflare’s free tier. The first 100K requests of each day are handled by Cloudflare and everything which exceeds this limit is redirected to a plain SPA. As Vitedge is just a Vite app, you can easily generate a regular SPA by running the following command:

```
vite build
```

Keep in mind that Vitedge’s page props won’t be available in the SPA. You can work around this by including a client-side fallback (example uses Vue’s Options API):

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Station',

  props: {
    station: {
      type: Object,
      default: null
    }
  },

  data(): Record<string, any> {
    return {
      meta: this.station || null
    }
  },

  async mounted(): Promise<void> {
    if (!this.station) {
      // Get meta data
      await this.fetchMetaData()
    }
  },

  methods: {
    /**
     * Fetch station meta data
     */
    async fetchMetaData(): Promise<void> {
      await fetch(`/stations/meta?id=${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => this.meta = data.data)
    }
  }
})
```

If this component runs as a regular SPA, the `station` property won’t be available. Therefore, it will load the weather station’s meta data within the `mounted()` lifecycle hook. This approach allows us to serve the Meteostat web app even beyond Cloudflare’s request limit without facing linearly increasing costs.

All things considered, the CPU and request limits can be challenging, but it is great to see how far you can get without spending a dime on hosting. If you want to support Meteostat paying its future Cloudflare bills, head over to our [web app](https://meteostat.net/en/patrons) and hit the “Donation” button 😉
