//EXERCISE 01
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log('2 : ' + challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log('3 : ' + challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log('4 : ' + challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log('5 : ' + challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log('6.1 : ' + challenge.substr(0,7));
console.log('6.2 : ' + challenge.substring(0,7));


// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('7 : ' + challenge.substring(3,));

// 8. Check if the string contains a word Script using includes() method
console.log('8 : ' + challenge.includes('Script'));

// 9. Split the string into an array using split() method
console.log('9 : ' + challenge.split(' '))

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log('10 : ' + challenge.split(' '))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('11 : ' + company.split(', '))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('12 : ' + challenge.replace('JavaScript','Python'));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('13 : ' + challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log('14 : ' + challenge.charCodeAt(12));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('15 : ' + challenge.indexOf('J'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('16 : ' + challenge.lastIndexOf('a'));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log('17 : ' + sentence.indexOf('because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('18 : ' + sentence.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('19 : ' + sentence.search('because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let otrchallenge = ' 30 Days Of JavaScript ';
console.log('20 : ' + otrchallenge.trim(' '));

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('21 : ' + challenge.startsWith('30'));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('22 : ' + challenge.endsWith('JavaScript'));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi;
console.log('23 : ' + challenge.match(pattern));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let part1 = '30 Days of';

console.log('24 : ' + part1.concat(' JavaScript'));
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('25 : ' + challenge.repeat(2))

//EXERCISE 02
// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 2.Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof '10' === typeof 10); //false
console.log(typeof parseInt('10') === typeof 10); //true

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat('9.8') == 10); //false
console.log(Math.ceil(parseFloat('9.8')) == 10); //true

// 5.Check if 'on' is found in both python and jargon.

let ptrnon = /on/;
console.log('python'.match(ptrnon) == true);
console.log('jargon'.match(ptrnon) == true);

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence1 = 'I hope this course is not full of jargon';
console.log(sentence1.match('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101));

// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100-51)) + 50);

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*226));

// 10. Access the 'JavaScript' string characters using a random number.
let word = 'JavaScript';
console.log(word.charAt(Math.floor(Math.random()*10)));

// 11. Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'; 
console.log(sentence2.substring(31,54));

//EXERCISE 3
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern2 = /love/gi;

console.log(sentence3.match(pattern2));

// 2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let pattern3 = /because/gi;
console.log(sentence2.match(pattern3).length);

// 3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let clnsentence = 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30 Days of JavaScript is also the result of love of teaching';

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentence5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let ernIx = sentence5.indexOf('5000');
let anlIx = sentence5.indexOf('10000');
let onCIx = sentence5.indexOf('15000');

let earning = parseInt(sentence5.substring(ernIx,ernIx+4));
let annualBonus = parseInt(sentence5.substring(anlIx,anlIx+4));
let courseFee = parseInt(sentence5.substring(onCIx,onCIx+4));

let totalIncome = (earning*12)+(courseFee*12)+annualBonus;
console.log('Total Income : '+ totalIncome);