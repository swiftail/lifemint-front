import checkAnchor from "~/assets/js/anchor";

export default {
  mounted() {
    checkAnchor(this.$router, this.$route)
  }
}
