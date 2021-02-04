function hello() {
    //alert("HEllo There");
    let sum = 0;
    for( let i=0; i<10; i++  ){
        sum += i;
        //alert( `i=${i}`);
    }
    let id = document.getElementById("results");
    id.innerHTML = `sum:${sum}`;
    //alert( `sum=${sum}`);
}