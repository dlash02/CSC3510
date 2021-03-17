const names = [ "Jane", "Jimmy", "Jackson", "Jill" ];

for ( let i=0; i<names.length; i++ ){
    console.log(`n=${names[i]}`);
}

const[n1, , n2] = names;
console.log(`n1=${n1} n2=${n2}`);
doSomething( n1, n2);
function doSomething( n1, n2) {
    console.log(`FLAG:n1:${n1}`)
}

const getItem = ( name1, name2) => {
    if ( name1 == "Jane") {
        return name1;
    } else {
        return 'NOt Jane';
    }
}
console.log(`FLAG2: calling ${getItem(n2, n1)}`);