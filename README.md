## Hello every one 
this document is to improve my solving ploblems skill in this document, I will tell how I solve the problems at each problem

like I am a scientist that use sound record while do experiment.

Ha ha if u see this document, please surprise me by texting me the messege at this discord ᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼#7345.

Have a nice day 🙂
Friday 2 December 2022

<hr>

## Tue 6 December 

19:55 - solve count duplicate number in arrays ex13

20:02 - Loop method solve I use Object to count number duplicate number
``` js
for (let i = 0; i < arrays.length; i++) {
    dict[arrays[i]] = (dict[arrays[i]] == undefined) ? dict[arrays[i]] = 0 : dict[arrays[i]] = dict[arrays[i]] + 1;
}
```
then I use ```Object.keys(`value`)``` to list all key in Object then run loop again to count value in each key .

``` Js
key_dict = Object.keys(dict);

answer = 0;

for (let j = 0; j < key_dict.length; j++) {
    answer += dict[key_dict[j]];
}
```

## Thursday 8 December 2022 
-   12.00 start doing "count duplicate" by use es6.
-   13.02 finish I use forEach to create object that count the duplicate number of each element and sum all value by method ```Object.values(object)```