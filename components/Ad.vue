<template>
  <ins
    class="adsbygoogle"
    data-ad-client="ca-pub-6830849181977374"
    data-ad-slot="3216865845"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
</template>

<script>
export default {
  name: 'Ad',

  mounted() {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.requestNonPersonalizedAds = 1
    window.adsbygoogle.push({})
  }
}
</script>

<style lang="stylus" scoped>
ins.adsbygoogle
  display: block
  &[data-ad-status="unfilled"]
    display: none !important
</style>
