export function appendElementsToBody(...elements) {
  elements.forEach((element) => document.body.appendChild(element));
}