# Common Characters

**Description**: The commonCharacters function takes an array of strings and returns an array of characters that are common to all the strings. It uses sets to ensure unique characters and efficient comparison across strings, making it useful for tasks that require finding shared characters in multiple strings.

**Function Signature**

	function commonCharacters(strings)

**Parameters**: An array of strings in which we want to find common characters.

**Returns**: An array containing the characters that are common to all input strings. Each character will appear only once in the result, even if it appears multiple times in the input strings.

**Algorithm Explanation**

1. Initialize Set of Common Characters: The function starts by creating a Set of characters from the first string. This Set is used to keep track of potential common characters.
2. Iterate Through Each String: For each additional string in the strings array, the function creates a Set of unique characters.
3. Update Potential Common Characters: The function checks each character in the potentialCommonCharacters set. If a character is not found in the current string's set, it’s removed from the potentialCommonCharacters set.
4. Convert to Array: Once all strings are processed, the remaining characters in potentialCommonCharacters are those common to all strings. These characters are converted to an array and returned.
   
**Time and Space Complexity**

**Time Complexity**: O(n * m), where n is the number of strings and m is the average length of each string.

**Space Complexity**: O(m), as we store unique characters from each string in a set.

**Examples**


	commonCharacters(["hello", "world", "hold"]);
	// Output: ["h", "o", "l", "d"]
	
	commonCharacters(["apple", "pineapple", "grape"]);
	// Output: ["p", "e"]
 
**Edge Cases**

1. Single String: If there is only one string in the array, the function returns all unique characters from that string.
2. Empty String Array: If the array of strings is empty, the function should return an empty array.
3. No Common Characters: If there are no common characters across all strings, the function returns an empty array.
   
**License**: This function and documentation are available under the MIT License.

