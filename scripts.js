function commonCharacters(strings) {

  let potentialCommonCharacters = new Set(strings[0]);
  for (let i = 1; i < strings.length; i++) {
    let uniqueCharacters = new Set(strings[i]);
    for (let character of potentialCommonCharacters) {
      if (!uniqueCharacters.has(character)) {
        potentialCommonCharacters.delete(character);
      }
    }
  }
  
  let finalCharacters = [];
  for (const character of potentialCommonCharacters) {
    finalCharacters.push(character);
  }
  
  return finalCharacters;
}

