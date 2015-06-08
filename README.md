# EasyWordCloud

Welcome to EasyWordCloud :) This small script enables you to construct your wordcloud immediately.

### Prerequisite:

* jQuery
* d3.js
* d3.layout.cloud.js

That's it!!

### How to use it

* Prepare the data following this format.
  - ( e.g.) [ {"word": "XXX", "value": 3}, {"word": "YYY", "value": 13}, {"word": "ZZZ", "value": 8}]
* Call makeWordCloud function
  - makeWordCloud(data, parent element you wanna insert, size of svg)

For more details, please see demo.html
