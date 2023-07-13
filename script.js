const txtElemen = ['WEB DEVELOPER','FRONT-END']
let count = 0;
let txtIndex = 0;
let currentTxt = '';

(function ngetik(){
    if(count == txtElemen.length){
        count = 0;
    }
    currentTxt = txtElemen[count];

    words = currentTxt.slice(0,++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;

    }

    setTimeout(ngetik, 500);
})();
