// Don't forget to load dom. Otherwise, makeWordCloud function might fails to work.

$().ready(function(){

    data = [{"word": "XXX", "value": 3}, {"word": "YYY", "value": 13}, {"word": "ZZZ", "value": 8}]
    window.makeWordCloud(data, "body", 500)

})