function showStringInfo(){
    alert("Starting");
    let n = prompt("Enter a name->", "Vision");
    console.log(`n:${n}`);
    if ( n === "Vision") {
        console.log(`V:${n} spouse: Wanda`);
    } else if ( n.toLowerCase() === "vision" ){
        console.log(`V:${n} spouse: Wanda`);
    } else {
        console.log(`L:${n.length}`)
        for( let i=0; i<n.length; i++ ){
            console.log(`C:${i} is ${n[i]}`);
        }
        console.log(`Dont know that one: V:${n} `);
    }
    alert("Playing a game")
    while( true ){
        let l = prompt("Guess a letter->", "a");
        let pos = n.indexOf(l);
        if  ( pos >= 0 ) {
            alert(`Yes there is a ${l} at pos:${pos}`);
        } else {
            alert(`No no l:${l} pos:${pos}`);
            break;
        }

    }
}