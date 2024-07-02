function mostCommonWord(paragraph, banned) {
    const lowerCaseParagraph = paragraph.toLowerCase();

    const wordCount = new Map();
    const bannedSet = new Set(banned);

    const words = lowerCaseParagraph.split(/\W+/);

    for (const word of words) {
        if (word === '' || bannedSet.has(word)) {
            continue;
        }

        wordCount.set(word, (wordCount.get(word) ?? 0) + 1);
    }

    let mostCommon = '';
    let maxCount = 0;
    for (const [word, count] of wordCount.entries()) {
        if (count > maxCount) {
            mostCommon = word;
            maxCount = count;
        }
    }

    return mostCommon;
}
