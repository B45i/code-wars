// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
// Title Case

function titleCase(title, minorWords) {
    return title
        .split(" ")
        .map((x, i) => {
            return i !== 0 &&
                !!minorWords &&
                minorWords
                    .toLowerCase()
                    .split(" ")
                    .indexOf(x.toLowerCase()) >= 0
                ? x.toLowerCase()
                : x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
        })
        .join(" ");
}

console.log(titleCase(""));
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
