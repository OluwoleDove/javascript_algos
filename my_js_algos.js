var center = require('center-align');
const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');

var i = j = "";
/*SOME ALGORITHMS I WROTE IN PYTHON */

//THIS PROGRAM TAKES TWO INTEGER NUMBERS&&RETURNS A Array OF ODD NUMBERS 
//AND A COUNT OF EVEN NUMBERS BETWEEN THE INTEGERS
function even_odd(i, j){
    if(isNaN(i) && isNaN(j)){
        console.log("Only Integer values please");
    }
    else if(i > j){
        let k = j;
        j = i;
        i = k;
    }
    
    console.log("ITERATING BETWEEN %s and %s", i, j);
    let return_array = [];
    let odd_num_array = []; //An empty list
    let even_num_count = 0; //integer value for even number counts initialized to zero

    for (let number=i; number <= j; number++){
        if( number % 2 > 0) //number is an odd nuber
            odd_num_array.push(number);
        else if( number % 2 == 0 ) //is number an even number, i.e is the remainder = 0?
            even_num_count += 1;
    }
    return_array.push(odd_num_array);
    return_array.push(even_num_count);
    return(return_array);
}

/*PROGRAM TO PRINT TRIANGLE OF CHARACTERS*/
function char_tri(char, lim){
    char = char.toString();
    if (char == "" || char == " ")
        console.log("Your first input can't be empty");
    else if( isNaN(parseInt(lim)) )
        console.log("The limit should be an integer.");

    lim = parseInt(lim);
    console.log("\nPRINTING A TRIANGLE OF CHARACTERS BY CALLING PRINT METHOD ONCE");
    let str_out = "";
    let main_str = "";

    for (let i = 1; i <= lim; i++) {
        str_out += char;
        main_str += str_out + "\n";
    }
    return(main_str);
}

function check_anagram(A, B){
    let C = [];
    //Declare a count 'variable'&&nitialize it to zero
    let count = 0;
    console.log();

    for (let i = 0; i < A.length; i++){ //Iteratively select each element in Array A
        for (let j = 0; j < A[i].length; j++){ //Iteratively select the letters in each element
            for (let k = 0; k < B[i].length; k++){ //Check for the letter in an element in B that has the same index as that of A
                if ( A[i][j] == B[i][k] ){
                    count = count + 1;
                    break;
                }
            }
        }
        C.push(count == B[i].length);
        count = 0;
    }
    return(C)
}

//SORTING FUNCTION
function _bubble_sort(my_array){
    for (let i = 0; i < my_array.length-1; i++){
        for (let j = 0; j < my_array.length-1; j++){
            if ( my_array[j+1] < my_array[j] ) {
                num = my_array[j];
                my_array[j] = my_array[j+1];
                my_array[j+1] = num;
            }
        }
    }

    fs.writeFileSync('sorted.txt', my_array.toString());
    const result = fs.readFileSync('sorted.txt', 'utf8');

    return(result.toString());
}

//MULTIPLICATION TABLE
function multi_table(n){
    n = parseInt(n);
    if (isNaN(n))
        console.log("Integer value alone please");
   
    console.log("PRINTING MULTIPLICATION TABLE HORIZONTALLY");
    let num = 0;
    let out_str = ""; //Initializing output string
    //Below are 12 instances of i&&144 instances of j
   
    console.log("\nPRINTING TABLES VERTICALLY");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            num = i*j;
            out_str += i.toString() + " * " + j.toString() + " = " + num.toString() + "\n";
        }
        out_str += "\n";   
    }    
    console.log(out_str);
    out_str = ""; //After eact complete j iterations, initialize output string again
    console.log();
    console.log("\nYou can also have it side by side\n");
    console.log("PRINTING 9 BY 12 MULTIPLICATION TABLE SIDE BY SIDE");

    for (let i = 1; i <= 13; i++) {
        for (let j = 1; j <= 13; j++) {
            num = j*i;
            out_str += j.toString() + "*" + i.toString() + "=" + num.toString() + "\t\t";
        }
        console.log(out_str);
        out_str = ""; //After each complete j iterations, initialize output string again 
    }
}

function determine_palindrome(palindrome){
    let iter_count = Math.floor(palindrome.length/2); //Floor division
    var truth_array = [];
    var neg = 1;
    for (let x = 0; x < iter_count; x++) {
        //Comapre letters&&append the boolean outcomes to the list
        palindrome[x] == palindrome[palindrome.length - neg] ? truth_array.push(true) : truth_array.push(false);
        neg += 1;
    }
    console.log(truth_array);
    if ( truth_array.includes(false) )
        console.log("%s is not a palindrome", palindrome);
    else
        console.log("%s is a palindrome", palindrome);
}

function find_prefix(_array){
    //sorting the List
    for (let i = 0; i < _array.length-1; i++) {
        for (let j = 0; j < _array.length-1; j++) {
            if (_array[j+1].length < _array[j].length ){
                _word = _array[j];
                _array[j] = _array[j+1];
                _array[j+1] = _word;
            }
        }
    }
    console.log(_array);

    //CHCKING FOR PREFIXES
    let count = 0;
    let pref = "";
    
    for (let i = 0; i < _array[0].length; i++){
        for (let j = 0; j < _array.length-1; j++) {
            letter = _array[j][i];
            if (_array[j][i] == _array[j+1][i])
                count += 1;
            else
                count -= 1;
        }
        if (count == _array.length -1)
            pref += letter;
        count = 0;
    }
    return(pref)
}

//FACTORIAL FUNCTION
function factorial(n){
    if(n == 0){
        return(1);
    }
    else{
        return(n * factorial(n-1));
    }
}      
//FIBONACCI SERIES - THE RECURSIVE WAY
function fibonacci(n){
    if(n == 0 || n == 1){
        return(n);
    }
    else{
        return(fibonacci(n-1) + fibonacci(n-2));
    }
}

//COMBINATION FUNCTION CALLING FACTORIAL FUNCTION
function combination(n, r){
    let c_val = factorial(n)/(factorial(n-r)*factorial(r));
    let int_val = parseInt(c_val);
    return(int_val);
}

//PASCAL_T FUNCTIOIN CALLS COMBINATION FUNCTION
function pascal_T(n){
    let my_str = "";
    let val = 0;
    for(let j = 0; j<=n; j++){
        val = combination(n, j);
        my_str += val.toString() + "     ";
    }
    return(my_str);
}

//THIS FUNCTION CALLS OTHER FUNCTIONS
function test_algo(){
    //EXECUTING EVEN_ODD FUNCTION
    console.log("THIS PROGRAM OUTPUTS THE ODD NUMBERS&&THE COUNT OF EVEN BETWEEN TWO INTEGERS");
    let i = parseInt(prompt("The first integer number please: "));
    let j = parseInt(prompt("Your second integer number: "));
    let even_odd_array = even_odd(i, j);
    console.log("The odd numbers are: \n%s \nThe range contains %s even numbers", even_odd_array[0], even_odd_array[1]);
    console.log();

    //CALLING FUNCTION TO PRINT TRIANGLE OF CHARACTERS
    console.log("LET'S HAVE A TRIANGLE OF CHARACTERS, SHALL WE?");
    i = prompt("Type a character please: ");
    j = parseInt(prompt("Type an integer please: "));
    triangle = char_tri(i, j);
    console.log(triangle +'\n');

    //LET'S PRINT MULTIPLICATION TABLES
    console.log("\nLET'S GENERATE MULTIPLICATION TABLE");
    i = prompt("Enter an integer number ");
    multi_table(Math.abs(parseInt(i)));

    //PROGRAM ANAGRAM
    //Anagrams are words that are made up of the same letters but have different meanings
    console.log("THIS PROGRAM COMPARES TWO LISTS TO CHECK FOR ANAGRAMS \nExamples:")
    let A = ["abode", "man", "live", "heart", "ear"]
    let B = ["adobe", "nan", "evil", "earth", "car"]
    console.log('A = ["abode", "man", "live", "heart", "ear"]\nB = ["adobe", "nan", "evil", "earth", "car"]\n')
    //declare an empty list
    let anagram_check = check_anagram(A, B)
    console.log(anagram_check)
    console.log()

    //PRINTING THE LONGEST PREFIX
    let word_array = ["flower", "flow", "flight", "floor", "flood"]
    console.log("\nChecking the longest prefix in the list")
    _prefix = find_prefix(word_array)
    console.log("Longest Prefix is %s", _prefix);

    //PRINTING FACTORIAL
    user_input = parseInt(prompt("Type a number to print it's factorial: "))
    console.log("PRINTING FACTORIAL")
    console.log(factorial(user_input))
    console.log()

    //ITERATIVELY GENERATING FIBONACCI SERIES
    console.log("LET'S ITERATIVELY PRINT FIRST 10 NUMBERS OF THE FIBONACCI SERIES")
    let fib_array = [0];
    let new_item = 1;
    if (fib_array.length < 2) {
        fib_array.push(new_item)
        while (fib_array.length < 10) {
            new_item = parseInt(fib_array[fib_array.length-1]) + parseInt(fib_array[fib_array.length-2]);
            fib_array.push(new_item);
        }
    }
    console.log(fib_array);
    console.log();

    //fib_series CODE
    console.log("\nNOW LET'S DO IT THE RECURSION WAY");
    fib_series = [];
    user_input = parseInt(prompt("Type a number: "));
    for (let i = 0; i < user_input; i++) {
        fib_series.push(fibonacci(i));
    }
    //LET'S PRINT STUFF
    console.log("PRINTING FIBONACCI")
    console.log(fib_series)     
    user_input = parseInt(prompt("Type a number, let's get the Fibonacci value: "))   
    console.log(fibonacci(user_input));
    console.log();

    //PROGRAM PALINDROME - A Palindrome is a word that spells the same in the same direcion
    //Examples are level, racecar, saippuakivikauppias
    console.log("THIS PROGRAM CHECKS IF A WORD IS A PALINDROME");
    console.log("A Palindrome is a word that spells the same in both directions.\n");
    word_strng = prompt("Type a word: ");
    result = determine_palindrome(word_strng);

    //PROGRAM SORT LIST
    console.log("THIS FUNCTION SORTS AN ARRAY IN ASCENDING ORDER");
    console.log();

    my_array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
    console.log('Sorting this list\n %s', my_array);
    my_sorted_array = _bubble_sort(my_array);
    console.log(my_sorted_array);

    //This program prints Pascal Triangle
    console.log("PRINTING PASCAL'S TRIANGLE")
    user_input = parseInt(prompt("Type an integer number "))
    for (let i = 0; i<user_input; i++){
        console.log(center(pascal_T(i), 80));
    }
    //Pascal Triangle - Every Array starts&&ends with 1
    console.log("NOW THAT WAS A FUNCTIONAL APPROACH TO IT.\nLET'S GENERATE PASCTAL'S TRIANGLE ITERATIVELY")
    var unit_num = 1
    let col_array = []
    let new_array = new Array()
    let pascal_obj = new Object()
    let pascal_tri = ''
    user_input = parseInt(prompt("Type a number "))
    for ( let i=1; i <= user_input+1; i++ ){
        col_array.push(unit_num)
        //Just using i to guage row lengths
        if (col_array.length == i) {
            Object.assign(pascal_obj, {[i] : col_array});
            col_array = [];
        }
        else if( col_array.length/2 == 1){
            col_array.push(unit_num);
            Object.assign(pascal_obj, {[i] : col_array});
        }
        else{
            col_array = [];
            col_array.push(1);
            new_array = pascal_obj[i-1]
            for (let j = 0; j < new_array.length - 1; j++){
                col_array.push(new_array[j] + new_array[j+1])
            }
            col_array.push(1)
            Object.assign(pascal_obj, {[i] : col_array});
            col_array = []
        }
    }
    console.log(pascal_obj);
    console.log();
    console.log("PASCAL'S TRANGLE");
    for (let k = 1; k <= user_input; k++){
        let col_str = '';
        k = k.toString();
        for (let num = 0; num < pascal_obj[k].length; num++){
            col_str += '  ' + pascal_obj[k][num];
        }
        pascal_tri += col_str + "\n"
    }
    console.log(center(pascal_tri, 80));
}

check = prompt("Let's Start, shall we? Type 'Y' to start and 'N' to quit.\n");

while( check == "Y" || check == "y" ){
    test_algo();
    check = prompt("Ha-ha! Super you. Wanna try again? Y/N\n");
}