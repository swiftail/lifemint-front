import Vue from "vue"

Vue.prototype.dt = function(key) {
    return this.$store.getters.getTextByKey(key)
}