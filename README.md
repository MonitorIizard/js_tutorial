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

-   13.09 start "deleted duplicate" by loop
-   13.26 finish, first I use 2 loop first loop call "main" second loop is "secondary"
, in second loop it have condition ```if (element[main] == element[second] but index of main not equal to secondary) then make that element undefinded```

after that we loop again but this loop we append the value that is not undefinded to new answer list.

-   13.39 start "deleted duplicate" by es6
-   13.51 finish "deleted duplicate" by es6
``` js
unique = arrays.filter(function(e,i) {
    return arrays.indexOf(e) == i;
});
```
this is the main point I use filter with indexOf to find check because indexOf will return first index of satisfied element but if that return != current index that mean it not the first element 

for instance 
``` js
[0, 0, 2, 3, 4] 

unique = arrays.filter(function(e,i) {
    return arrays.indexOf(e) == i;
});
```


first round 
e, i = 0
arrays.indexOf(e) will return 0 
and 0 = i(0) which is true

second round
e = 0 , i = 1
arrays.indexOf(e) will return 0 
but 0 != i(1) which is false and won't append

I think you might get an idea.