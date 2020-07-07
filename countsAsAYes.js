export function countsAsAYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    if (firstLetter === 'y') {
        return true;
    }
    else {
        return false;
    }
}

// const firstLetter = word.charAt(0);
// const isAY = firstLetter === 'y';
// return isAY;