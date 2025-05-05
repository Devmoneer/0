// Utility functions for the web application

/**
 * Function to format a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

/**
 * Function to generate a random number between a given range
 * @param {number} min - The minimum number
 * @param {number} max - The maximum number
 * @returns {number} - Random number between min and max
 */
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function to check if a value is an array
 * @param {*} value - The value to check
 * @returns {boolean} - True if value is an array, false otherwise
 */
export function isArray(value) {
    return Array.isArray(value);
}