// Don't forget to load dom. Otherwise, makeWordCloud function might fails to work.
$().ready(function(){

    // Make sure the format => [ {"word": String, "value": Number}, ..., ... ]
    // Value should be greater than 0
    data = [
        {"word": "田中", "value": 3}, 
        {"word": "太郎", "value": 13}, 
        {"word": "西尾", "value": 8},
        {"word": "維新", "value": 80},
        {"word": "完全", "value": 18},
        {"word": "無血", "value": 2},
        {"word": "開城", "value": 6},
        {"word": "極悪", "value": 2},
        {"word": "戦隊", "value": 1},
        {"word": "田中", "value": 3}, 
        {"word": "太郎", "value": 13}, 
        {"word": "西尾", "value": 8},
        {"word": "維新", "value": 80},
        {"word": "完全", "value": 18},
        {"word": "無血", "value": 2},
        {"word": "開城", "value": 6},
        {"word": "極悪", "value": 2},
        {"word": "戦隊", "value": 1},
        {"word": "田中", "value": 3}, 
        {"word": "太郎", "value": 13}, 
        {"word": "西尾", "value": 8},
        {"word": "維新", "value": 80},
        {"word": "完全", "value": 18},
        {"word": "無血", "value": 2},
        {"word": "開城", "value": 6},
        {"word": "極悪", "value": 2},
        {"word": "戦隊", "value": 1},
    ]
    
    // makeWordCloud(data, css selector that you wanna insert in, scale of svg, font-family)
    window.makeWordCloud(data, "body", 500, "Impact")

})
