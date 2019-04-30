var reverseWords = function(s) {
    var words = s.split(' ');
    for (var index = 0; index < words.length; index++) {
        words[index] = words[index].split('').reverse().join('');
    }
    return words.join(' ');
};