var center = require('center-align');
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
    
    console.log(("ITERATING BETWEEN {0}&&{1}").format(i, j))
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
    return return_array;
}

/*PROGRAM TO PRINT TRIANGLE OF CHARACTERS*/
function char_tri(char, lim){
    char = char.toString;
    if (char == "" || char == " ")
        console.log("Your first input can't be empty");
    else if( isNaN(parseInt(lim)) )
        console.log("The limit should be an integer.");

    lim = parseInt(lim);
    console.log("\nPRINTING A TRIANGLE OF CHARACTERS BY CALLING PRINT METHOD ONCE");
    str_out = "";
    main_str = "";

    for (let i = 1; i <= lim.length; i++) {
        str_out += char;
        main_str += str_out + "\n";
    }
    return main_str;
}

function check_anagram(A, B){
    let C = [];
    //Declare a count 'variable'&&nitialize it to zero
    let count = 0;
    console.log();

    for (let i = 0; i < A.length; i++){ //Iteratively select each element in Array A
        for (let j = 0; index < A[i].length; j++){ //Iteratively select the letters in each element
            for (let k = 0; index < B[i].length; k++){ //Check for the letter in an element in B that has the same index as that of A
                if ( A[i][j] == B[i][k] ){
                    count = count + 1;
                    break;
                }
            }
        }
        C.push(count == len(B[i]));
        count = 0;
    }
    return C
}

//SORTING FUNCTION
function _bubble_sort(my_array){
    fs.open('sorted.txt', 'w', function (err) {
        if (err) throw err;
    });
    for (let i = 0; i < my_array.length-1; i++){
        for (let j = 0; j < my_array.length-1; j++){
            if ( my_array[j+1] < my_array[j] ) {
                num = my_array[j];
                my_array[j] = my_array[j+1];
                my_array[j+1] = num;
            }
        }
    }
    
    fs.writeFile('sorted.txt', my_array, (err) => {   
        // In case of a error throw err.
        if (err) throw err;
    })
    
    fs.open('sorted.txt', 'r', function (err, mydata) {
        if (err) throw err;
        sorted_array = mydata;
    });

    return sorted_array;
}

//MULTIPLICATION TABLE
function multi_table(n){
    n = parseInt(n);
    if (isNaN(n))
        console.log("Integer value alone please");
   
    console.log("PRINTING MULTIPLICATION TABLE HORIZONTALLY");
    num = 0;
    out_str = ""; //Initializing output string
    //Below are 12 instances of i&&144 instances of j
   
    console.log("\nPRINTINF TABLES VERTICALLY");
    for (let i = 1; i <= n; i++) {
        for (let j = 1; i <= j; j++) {
            num = i*j;
            out_str += str(i) + " * " + str(j) + " = " + str(num) + "\n";
        }   
    }    
    console.log(out_str);
    out_str = ""; //After eact complete j iterations, initialize output string again
    console.log();
    console.log('\nYou can also have it side by side\n');
    console.log("PRINTING 9 BY 12 MULTIPLICATION TABLE SIDE BY SIDE");

    for (let i = 1; i <= 13; i++) {
        for (let j = 1; i <= 13; j++) {
            num = j*i;
            out_str += str(j) + "*" + str(i) + "=" + str(num) + "\t\t";
        }
        console.log(out_str);
        out_str = ""; //After each complete j iterations, initialize output string again 
    }
}

function determine_palindrome(palindrome){
    iter_count = Math.floor(palindrome.length/2); //Floor division
    truth_array = [];
    neg = -1;
    for (let x = 0; x < iter_count; x++) {
        //Comapre letters&&append the boolean outcomes to the list
        truth_array.push(palindrome[x] == palindrome[neg]);
        neg -= 1;
    }
    console.log(truth_array);
    if ( false in truth_array )
        console.log(("{0} is not a palindrome").format(palindrome));
    else
        console.log(("{0} is a palindrome").format(palindrome));
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
    return pref
}

//FACTORIAL FUNCTION
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return (n * factorial(n-1));
    }
}      
//FIBONACCI SERIES - THE RECURSIVE WAY
function fibonacci(n){
    if(n == 0 || n == 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

//COMBINATION FUNCTION CALLING FACTORIAL FUNCTION
function combination(n, r){
    let c_val = factorial(n)/(factorial(n-r)*factorial(r));
    let int_val = parseparseInt(c_val);
    return int_val;
}

//PASCAL_T FUNCTIOIN CALLS COMBINATION FUNCTION
function pascal_T(n){
    let my_str = "";
    let val = 0;
    for(let j = 0; j<=n; j++){
        val = combination(n, j);
        my_str += val.toString() + "     ";
    }
    return my_str;
}

//THIS FUNCTION CALLS OTHER FUNCTIONS
function test_algo(){
    //EXECUTING EVEN_ODD FUNCTION
    console.log("THIS PROGRAM OUTPUTS THE ODD NUMBERS&&THE COUNT OF EVEN BETWEEN TWO INTEGERS");
    i = parseInt(prompt("The first integer number please{ "));
    j = parseInt(prompt("Your second integer number{ "));
    even_odd_array = even_odd(i, j);
    console.log(("The odd numbers are{ \n{0} \nThe range contains {1} even numbers").format(even_odd_array[0], even_odd_array[1]));
    console.log();

    //CALLING FUNCTION TO PRINT TRIANGLE OF CHARACTERS
    console.log("LET'S HAVE A TRIANGLE OF CHARACTERS, SHALL WE?");
    i = prompt("Type a character please: ");
    j = prompt("Type an integer please: ");
    triangle = char_tri(i, j);
    console.log(triangle +'\n');

    //LET'S PRINT MULTIPLICATION TABLES
    console.log("\nLET'S GENERATE MULTIPLICATION TABLE");
    i = prompt("Enter an integer number ");
    multi_table(Maths.abs(parseInt(i)));

    //PROGRAM ANAGRAM
    //Anagrams are words that are made up of the same letters but have different meanings
    console.log("THIS PROGRAM COMPARES TWO LISTS TO CHECK FOR ANAGRAMS\n Examples{")
    A = ["abode", "man", "live", "heart", "ear"]
    B = ["adobe", "nan", "evil", "earth", "car"]
    console.log('A = ["abode", "man", "live", "heart", "ear"]\nB = ["adobe", "nan", "evil", "earth", "car"]\n')
    //declare an empty list
    anagram_check = check_anagram(A, B)
    console.log(anagram_check)
    console.log()

    //PRINTING THE LONGEST PREFIX
    word_array = ["flower", "flow", "flight", "floor", "flood"]
    console.log("\nChecking the longest prefix in the list")
    _prefix = find_prefix(word_array)
    console.log(("Longest Prefix is {0}").format(_prefix))

    //PRINTING FACTORIAL
    user_input = parseInt(prompt("Type a number to print it's factorial{ "))
    console.log("PRINTING FACTORIAL")
    console.log(factorial(user_input))
    console.log()

    //ITERATIVELY GENERATING FIBONACCI SERIES
    console.log("LET'S ITERATIVELY PRINT FIRST 10 NUMBERS OF THE FIBONACCI SERIES")
    fib_array = [0]
    new_item = 1
    if (fib_array.length < 2){
        fib_array.push(new_item)
        while (fib_array.length < 10) {
            new_item = fib_array[-1] + fib_array[-2]
            fib_array.push(new_item)
        }
    }
    console.log(fib_array)
    console.log()

    //fib_series CODE
    console.log("\nNOW LET'S DO IT THE RECURSION WAY")
    fib_series = []
    user_input = parseInt(prompt("Type a number{ "))
    for (let i = 0; i < user_input.length; i++) {
        fib_series.push(fibonacci(i))
    }
    //LET'S PRINT STUFF
    console.log("PRINTING FIBONACCI")
    console.log(fib_series)     
    user_input = parseInt(prompt("Type a number, let's get the Fibonacci value{ "))   
    console.log(fibonacci(user_input))
    console.log()

    //PROGRAM PALINDROME - A Palindrome is a word that spells the same in the same direcion
    //Examples are level, racecar, saippuakivikauppias
    console.log("THIS PROGRAM CHECKS IF A WORD IS A PALINDROME")
    console.log("A Palindrome is a word that spells the same in both directions.\n")
    word_strng = prompt("Type a word: ")
    result = determine_palindrome(word_strng)

    //PROGRAM SORT LIST
    console.log("THIS FUNTION SORTS A Array IN ASCENDING ORDER")
    console.log()

    my_array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
    console.log(('Sorting this list\n {0}').format(my_array))
    my_sorted_array = _bubble_sort(my_array)
    console.log(my_sorted_array)

    //This program prints Pascal Triangle
    console.log("PRINTING PASCAL'S TRAINGLE")
    user_input = parseInt(prompt("Type an integer number{ "))
    for (let i = 0; i<user_input; i++){
        console.log(center(pascal_T(i), 80));
    }
    //Pascal Triangle - Every Array starts&&ends with 1
    console.log("NOW THAT WAS A FUNCTIONAL APPROACH TO IT.\nLET'S GENERATE PASCTAL'S TRIANGLE ITERATIVELY")
    var unit_num = 1
    let col_array = []
    let new_array = new Array()
    let pascal_obj = new Object()
    pascal_tri = ''
    user_input = parseInt(prompt("Type a number{ "))
    for ( let i=1; i <= user_input+1; i++ ){
        col_array.push(unit_num)
        //Just using i to guage row lengths
        if (col_array.length == i) {
            pascal_obj.key = i;
            pascal_obj.val = col_array;
            pascal_obj.push(obj_elem);
            col_array = [];
        }
        else if( col_array.length/2 == 1){
            col_array.push(unit_num)
            pascal_obj.push(obj_elem)
        }
        else{
            col_array = []
            col_array.push(1)
            new_array = pascal_obj[i-1]
            for (let j = 0; j < new_array.length - 1; j++){
                col_array.push(new_array[j] + new_array[j+1])
            }
            col_array.push(1)
            pascal_obj.push(obj_elem)
            col_array = []
        }
    }
    console.log(pascal_obj)
    console.log()
    console.log("PASCAL'S TRANGLE")
    for (let k = 1; k <= pascal_obj; k++){
        for (let num = 0; mum < pascal_obj[k].length; num++){
            col_str += '  ' + pascal_obj[k][num].center(40);
        }
        col_str = center(pascal_T(i), 40);
        pascal_tri += col_str + "\n"
    }
    console.log(pascal_tri)
}

check = prompt("Let's Start, shall we? Type 'Y' to start&&'N' to quit.\n");

while( check == "Y" || check == "y" ){
    test_algo();
    check = prompt("Ha-ha! Super you. Wanna try again? Y/N\n");
}