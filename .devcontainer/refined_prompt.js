/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, dashes, or underscores, removes empty parts,
 * and concatenates the words such that the first word is in lowercase and each subsequent
 * word starts with an uppercase letter followed by lowercase letters.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string. Returns an empty string if input is empty or contains only delimiters.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase("convert_this-string"); // returns "convertThisString"
 * toCamelCase("crazy--input"); // returns "crazyInput"
 */

/**
 * Converts a given string to dot.case format.
 *
 * Splits the input string by spaces, dashes, or underscores, removes empty parts,
 * and joins the words with dots, converting all characters to lowercase.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is empty or contains only delimiters.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase("convert_this-string"); // returns "convert.this.string"
 * toDotCase("crazy--input"); // returns "crazy.input"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.length === 0) {
        return '';
    }
    // Split by space, dash, or underscore, remove empty parts
    const words = input.split(/[\s\-_]+/).filter(Boolean);
    if (words.length === 0) return '';
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("convert_this-string")); // "convertThisString"
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.length === 0) {
        return '';
    }
    // Split by space, dash, or underscore, remove empty parts
    const words = input.split(/[\s\-_]+/).filter(Boolean);
    if (words.length === 0) return '';
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toCamelCase("crazy--input")); // "crazyInput"
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("convert_this-string")); // "convert.this.string"
console.log(toDotCase("crazy--input")); // "crazy.input"

function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    // Insert dash before camelCase boundaries
    let result = input.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
    // Replace spaces and underscores with dashes
    result = result.replace(/[\s_]+/g, '-');
    // Convert to lowercase
    result = result.toLowerCase();
    // Replace multiple consecutive dashes with a single dash
    result = result.replace(/-+/g, '-');
    // Remove leading/trailing dashes
    result = result.replace(/^-+|-+$/g, '');
    return result;
}

// Example usage:
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("convert_thisString")); // "convert-this-string"
console.log(toKebabCase("This--is__crazy")); // "this-is-crazy"