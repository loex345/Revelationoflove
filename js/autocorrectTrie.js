class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}

export default class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert = (word) => {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!current.children.has(letter)) {
                current.children.set(letter, new TrieNode())
                current = current.children.get(letter)
            } else {
                current = current.children.get(letter);
            }
        }
        current.isWordEnd = true;
    }
    contains = (word) => {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!current.children.has(letter)) return false;

            current = current.children.get(letter);
        }
        return current.isWordEnd;
    }

    startWithPrefix = (prefix) => {
        let current = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            if (!current.children.has(letter)) return false;

            current = current.children.get(letter);
        }
        return true;
    }

    remove = (word) => {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (!current.children.has(letter)) return;
            let wordBank = current.children.get(letter).children.size
            if (wordBank <= 1) {
                current.children.delete(letter);
            } else {
                current = current.children.get(letter)
            }
        }
        return "removed"
    }

    print = () => {
        const result = [];
        let printWords = (current = this.root, string) => {
            if (current.children.size != 0) {
                for (const letter of current.children.keys()) {
                    printWords(current.children.get(letter), string)
                }
                if (current.isWordEnd) {
                    result.push(string)
                } else {
                    !string.length ? result.push(string) : "stop"
                    return
                }
            }
        }
        printWords(this.root, "")
        return result;
    }
}



