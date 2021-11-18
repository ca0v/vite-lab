export function reloadPage(interval = 0) {
  setTimeout(() => history.go(0), interval);
}
