### Selectors and how to use them

| Selector name                   | Return shape   | Return type    | Reference             |
| ------------------------------- | -------------- | -------------- | --------------------- |
| `node.getElementById()`         | Single element | Element        | https://goo.gl/8cHGoy |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza |


# Document Object Model vs. HTML
- Tree of Nodes

### DOM CRUD
- `document.createElement()`
- `parentNode.appendChild(childNode)`
- `innerHTML`
- `parentNode.removeChild(childNode)` or `node.remove()`

### Customer HTML attributes (metadata)
- [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
