// Don't forget to load dom. Otherwise, makeWordCloud function might fails to work.

$().ready(function(){

    // Make sure the format => [ {"word": String, "value": Number}, ..., ... ]
    data = [{"word": "XXX", "value": 3}, {"word": "YYY", "value": 13}, {"word": "ZZZ", "value": 8}]
    
    //makeWordCloud(data, css selector that you wanna insert in, scale of svg)
    window.makeWordCloud(data, "body", 500)

})
