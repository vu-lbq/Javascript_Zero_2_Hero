function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl

  /* Bard
function dominantDirection(text) {
  // Count characters by script direction
  const scriptCounts = countBy(text, char => characterScript(char)?.direction);

  // Remove undefined (non-script) characters
  delete scriptCounts.undefined;

  // Find direction with the highest count
  let dominantDirection = null;
  let maxCount = 0;
  for (const direction in scriptCounts) {
    if (scriptCounts[direction] > maxCount) {
      maxCount = scriptCounts[direction];
      dominantDirection = direction;
    }
  }

  return dominantDirection;
}
  */