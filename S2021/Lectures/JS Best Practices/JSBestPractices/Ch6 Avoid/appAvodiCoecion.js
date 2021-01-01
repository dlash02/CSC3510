const responses = {
  selection: false,
  code: "90046",
};

if (responses.selection === 0) {
  console.log(  `FL1: got true:${responses.selection}` )
} else {
  console.log(  `FL1: Got FALSE:${responses.selection}` )
}
if (responses.code === 90046) {
  console.log(  `FL2: got 90045:${responses.code}` )
} else {
  console.log(  `FL2: No got:${responses.code}` )
}
console.log(responses.selection === 0);
console.log(responses.code === 90046);
