$(document).ready(function() {
    $("#button1").click(function () {
        let names = ['Jake', 'Jane', 'Jason', 'Jessie'];
        $("#results").html(`names=${names[1]}`);
        //let o = {"owners" : [ 'Jake', 'Jane', 'Jason', 'Jessie']};
        //$("#results").html( "res=" + o.owners[1]);
        console.log(`o:${o.owners[1]}`);
    });
    $("#button2").click(function () {
        let characters = {
            'Wanda': ['Magic', 'Time travel', 'Fly', 'Red Glow Balls'],
            'Vision': ['Fly', 'Walk through Walls', 'Laser Eyes', 'Strong'],
            'Agnes': ['Magic', 'Tricky', 'Fly'],
            'Iron Man': ['Fly', 'Rockets', 'Lasers', 'Science']
        }
        let inN = prompt("Gimme a name->");
        if (characters[inN] == undefined) {
            alert(`Dont got no: ${inN}`);
        } else {
            alert(`Got it: ${inN}`);
            let powers = characters[inN];
            let oStr = "";
            powers.forEach(function (p, index) {
                oStr += `n:${p} in:${index}`;
            });
            $("#results").html("res=" + oStr);
        }
        //let o = {"owners" : [ 'Jake', 'Jane', 'Jason', 'Jessie']};
        //$("#results").html( "res=" + o.owners[1]);
        console.log(`o:${o.owners[1]}`);
    });
    $("#button3").click(function () {
    let owners = {
        "owners": [
            {
                "id": 1,
                "name": "Amy",
                "pets": {
                    "cats": [
                        {
                            "name": "Fluffy",
                            "age": 2,
                            "breed": "Persian"
                        },
                        {
                            "name": "Mister Whiskers",
                            "age": 4,
                            "breed": "Siamese"
                        }
                    ],
                    "dogs": [
                        {
                            "name": "Spot",
                            "age": 3,
                            "breed": "Labrador Retriever"
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "Bob",
                "pets": {
                    "cats": [
                        {
                            "name": "Galadriel",
                            "age": 2,
                            "breed": "Ragdoll"
                        },
                        {
                            "name": "Gandalf",
                            "age": 3,
                            "breed": "Ragdoll"
                        }
                    ]
                }
            },
            {
                "id": 3,
                "name": "Carol",
                "pets": {
                    "cats": [
                        {
                            "name": "D'Artagnan",
                            "age": 5,
                            "breed": "Persian"
                        }
                    ],
                    "dogs": [
                        {
                            "name": "Moe",
                            "age": 3,
                            "breed": "Border Collie"
                        },
                        {
                            "name": "Fred",
                            "age": 3,
                            "breed": "Shih Tzu"
                        },
                        {
                            "name": "Penelope",
                            "age": 4,
                            "breed": "Great Dane"
                        }
                    ]
                }
            }
        ]
    };
    let oList = owners.owners;
    let inID = prompt("Gimme an ID ->");
    let oListL = oList.length;
    if ( inID < 0 || inID > oList.length) {
        alert( "Too small or large l=" +oList.length);
    }
    let rec = getThisID( inID, oList );
    if ( rec == -1 ){
        alert("Not Found")
    } else {
       let  n=rec.name;
        alert("name=" + n );
        console.log( "rec:");
        console.log( rec);
    }

    });
});
function getThisID( inID, oList ){
    for( let i=0; i<oList.length; i++ ){
        let id=oList[i].id;
        if ( inID == id){
           return oList[i];
        }
    }
    return -1;


}
