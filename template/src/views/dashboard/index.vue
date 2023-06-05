<template lang="pug">
div.e2(a='1' b) hello $name
</template>

<script lang="ls" setup>
import store from '@/store'
name = store.getters.name
o name
</script>

<style qcs scoped>
.e2 {
	f: 20 w: 180 bg: #ff0 bo: 5
}
</style>
