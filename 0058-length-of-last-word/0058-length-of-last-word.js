const s = "luffy is still joyboy"
function lengthOfLastWord(s) {
    const world = s.trim().split(" ")
    return world[world.length -1].length
}
console.log(lengthOfLastWord (s) );