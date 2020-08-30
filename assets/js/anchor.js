export default function checkAnchor(router, route, anchor) {

  if (!anchor) {
    anchor = route.hash
  }

  if(!anchor) {
    return
  }

  let el = document.querySelector(anchor);
  if (el) {
    history.pushState(null, null, anchor);
    el.scrollIntoView({ behavior: "smooth" });
  } else if (!route || route.path != '/') {
    router.push(`/${anchor}`);
  }
}
