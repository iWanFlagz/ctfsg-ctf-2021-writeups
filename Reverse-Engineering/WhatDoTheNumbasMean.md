# [Reverse Engineering] What do the numbas mean?





![Numbas01](images/WhatDoTheNumbasMean/Numbas01.png)

## Description

Agent: "Only you  can tell us what the codes mean. We have the broadcast, we have been  playing to you over and over again for hours but we haven't been able to break through your programming yet. This is our last shot."



`P.S. Apparently this is a meme from Blackops`

## Numbas IR

We were only given a single text file with the following contents

```python
---------------------------IR DUMP: what_do_they_mean---------------------------
label 0:
    flag = arg(0, name=flag)                 ['flag']
    $const4.1 = const(int, 0)                ['$const4.1']
    $6binary_subscr.2 = static_getitem(value=flag, index=0, index_var=$const4.1, fn=<built-in function getitem>) ['$6binary_subscr.2', '$const4.1', 'flag']
    $const8.3 = const(str, C)                ['$const8.3']
    $10compare_op.4 = $6binary_subscr.2 != $const8.3 ['$10compare_op.4', '$6binary_subscr.2', '$const8.3']
    bool12 = global(bool: <class 'bool'>)    ['bool12']
    $12pred = call bool12($10compare_op.4, func=bool12, args=(Var($10compare_op.4, whatdothenumbasmean.py:26),), kws=(), vararg=None) ['$10compare_op.4', '$12pred', 'bool12']
    branch $12pred, 86, 14                   ['$12pred']
label 14:
    $const16.1 = const(int, 1)               ['$const16.1']
    $18binary_subscr.2 = static_getitem(value=flag, index=1, index_var=$const16.1, fn=<built-in function getitem>) ['$18binary_subscr.2', '$const16.1', 'flag']
    $const20.3 = const(str, T)               ['$const20.3']
    $22compare_op.4 = $18binary_subscr.2 != $const20.3 ['$18binary_subscr.2', '$22compare_op.4', '$const20.3']
    bool24 = global(bool: <class 'bool'>)    ['bool24']
    $24pred = call bool24($22compare_op.4, func=bool24, args=(Var($22compare_op.4, whatdothenumbasmean.py:27),), kws=(), vararg=None) ['$22compare_op.4', '$24pred', 'bool24']
    branch $24pred, 86, 26                   ['$24pred']
label 26:
    $const28.1 = const(int, 2)               ['$const28.1']
    $30binary_subscr.2 = static_getitem(value=flag, index=2, index_var=$const28.1, fn=<built-in function getitem>) ['$30binary_subscr.2', '$const28.1', 'flag']
    $const32.3 = const(str, F)               ['$const32.3']
    $34compare_op.4 = $30binary_subscr.2 != $const32.3 ['$30binary_subscr.2', '$34compare_op.4', '$const32.3']
    bool36 = global(bool: <class 'bool'>)    ['bool36']
    $36pred = call bool36($34compare_op.4, func=bool36, args=(Var($34compare_op.4, whatdothenumbasmean.py:28),), kws=(), vararg=None) ['$34compare_op.4', '$36pred', 'bool36']
    branch $36pred, 86, 38                   ['$36pred']
label 38:
    $const40.1 = const(int, 3)               ['$const40.1']
    $42binary_subscr.2 = static_getitem(value=flag, index=3, index_var=$const40.1, fn=<built-in function getitem>) ['$42binary_subscr.2', '$const40.1', 'flag']
    $const44.3 = const(str, S)               ['$const44.3']
    $46compare_op.4 = $42binary_subscr.2 != $const44.3 ['$42binary_subscr.2', '$46compare_op.4', '$const44.3']
    bool48 = global(bool: <class 'bool'>)    ['bool48']
    $48pred = call bool48($46compare_op.4, func=bool48, args=(Var($46compare_op.4, whatdothenumbasmean.py:29),), kws=(), vararg=None) ['$46compare_op.4', '$48pred', 'bool48']
    branch $48pred, 86, 50                   ['$48pred']
label 50:
    $const52.1 = const(int, 4)               ['$const52.1']
    $54binary_subscr.2 = static_getitem(value=flag, index=4, index_var=$const52.1, fn=<built-in function getitem>) ['$54binary_subscr.2', '$const52.1', 'flag']
    $const56.3 = const(str, G)               ['$const56.3']
    $58compare_op.4 = $54binary_subscr.2 != $const56.3 ['$54binary_subscr.2', '$58compare_op.4', '$const56.3']
    bool60 = global(bool: <class 'bool'>)    ['bool60']
    $60pred = call bool60($58compare_op.4, func=bool60, args=(Var($58compare_op.4, whatdothenumbasmean.py:30),), kws=(), vararg=None) ['$58compare_op.4', '$60pred', 'bool60']
    branch $60pred, 86, 62                   ['$60pred']
label 62:
    $const64.1 = const(int, 5)               ['$const64.1']
    $66binary_subscr.2 = static_getitem(value=flag, index=5, index_var=$const64.1, fn=<built-in function getitem>) ['$66binary_subscr.2', '$const64.1', 'flag']
    $const68.3 = const(str, {)               ['$const68.3']
    $70compare_op.4 = $66binary_subscr.2 != $const68.3 ['$66binary_subscr.2', '$70compare_op.4', '$const68.3']
    bool72 = global(bool: <class 'bool'>)    ['bool72']
    $72pred = call bool72($70compare_op.4, func=bool72, args=(Var($70compare_op.4, whatdothenumbasmean.py:31),), kws=(), vararg=None) ['$70compare_op.4', '$72pred', 'bool72']
    branch $72pred, 86, 74                   ['$72pred']
label 74:
    $const76.1 = const(int, -1)              ['$const76.1']
    $78binary_subscr.2 = static_getitem(value=flag, index=-1, index_var=$const76.1, fn=<built-in function getitem>) ['$78binary_subscr.2', '$const76.1', 'flag']
    $const80.3 = const(str, })               ['$const80.3']
    $82compare_op.4 = $78binary_subscr.2 != $const80.3 ['$78binary_subscr.2', '$82compare_op.4', '$const80.3']
    bool84 = global(bool: <class 'bool'>)    ['bool84']
    $84pred = call bool84($82compare_op.4, func=bool84, args=(Var($82compare_op.4, whatdothenumbasmean.py:32),), kws=(), vararg=None) ['$82compare_op.4', '$84pred', 'bool84']
    branch $84pred, 86, 90                   ['$84pred']
label 86:
    $const86.0 = const(bool, False)          ['$const86.0']
    $88return_value.1 = cast(value=$const86.0) ['$88return_value.1', '$const86.0']
    return $88return_value.1                 ['$88return_value.1']
label 90:
    $const92.1 = const(int, 6)               ['$const92.1']
    $const94.2 = const(int, -1)              ['$const94.2']
    $96build_slice.3 = global(slice: <class 'slice'>) ['$96build_slice.3']
    $96build_slice.4 = call $96build_slice.3($const92.1, $const94.2, func=$96build_slice.3, args=(Var($const92.1, whatdothenumbasmean.py:35), Var($const94.2, whatdothenumbasmean.py:35)), kws=(), vararg=None) ['$96build_slice.3', '$96build_slice.4', '$const92.1', '$const94.2']
    $98binary_subscr.5 = static_getitem(value=flag, index=slice(6, -1, None), index_var=$96build_slice.4, fn=<built-in function getitem>) ['$96build_slice.4', '$98binary_subscr.5', 'flag']
    buf = $98binary_subscr.5                 ['$98binary_subscr.5', 'buf']
    $102load_global.6 = global(len: <built-in function len>) ['$102load_global.6']
    $106call_function.8 = call $102load_global.6(buf, func=$102load_global.6, args=[Var(buf, whatdothenumbasmean.py:35)], kws=(), vararg=None) ['$102load_global.6', '$106call_function.8', 'buf']
    $const108.9 = const(int, 16)             ['$const108.9']
    $110compare_op.10 = $106call_function.8 != $const108.9 ['$106call_function.8', '$110compare_op.10', '$const108.9']
    bool112 = global(bool: <class 'bool'>)   ['bool112']
    $112pred = call bool112($110compare_op.10, func=bool112, args=(Var($110compare_op.10, whatdothenumbasmean.py:36),), kws=(), vararg=None) ['$110compare_op.10', '$112pred', 'bool112']
    branch $112pred, 114, 118                ['$112pred']
label 114:
    $const114.0 = const(bool, False)         ['$const114.0']
    $116return_value.1 = cast(value=$const114.0) ['$116return_value.1', '$const114.0']
    return $116return_value.1                ['$116return_value.1']
label 118:
    $120load_method.1 = getattr(value=buf, attr=startswith) ['$120load_method.1', 'buf']
    $const122.2 = const(str, th3)            ['$const122.2']
    $124call_method.3 = call $120load_method.1($const122.2, func=$120load_method.1, args=[Var($const122.2, whatdothenumbasmean.py:40)], kws=(), vararg=None) ['$120load_method.1', '$124call_method.3', '$const122.2']
    bool126 = global(bool: <class 'bool'>)   ['bool126']
    $126pred = call bool126($124call_method.3, func=bool126, args=(Var($124call_method.3, whatdothenumbasmean.py:40),), kws=(), vararg=None) ['$124call_method.3', '$126pred', 'bool126']
    branch $126pred, 132, 128                ['$126pred']
label 128:
    $const128.0 = const(bool, False)         ['$const128.0']
    $130return_value.1 = cast(value=$const128.0) ['$130return_value.1', '$const128.0']
    return $130return_value.1                ['$130return_value.1']
label 132:
    $const132.0 = const(str, numb)           ['$const132.0']
    $136compare_op.2 = $const132.0 in buf    ['$136compare_op.2', '$const132.0', 'buf']
    $136compare_op.2 = unary(fn=<built-in function not_>, value=$136compare_op.2) ['$136compare_op.2', '$136compare_op.2']
    bool138 = global(bool: <class 'bool'>)   ['bool138']
    $138pred = call bool138($136compare_op.2, func=bool138, args=(Var($136compare_op.2, whatdothenumbasmean.py:44),), kws=(), vararg=None) ['$136compare_op.2', '$138pred', 'bool138']
    branch $138pred, 140, 144                ['$138pred']
label 140:
    $const140.0 = const(bool, False)         ['$const140.0']
    $142return_value.1 = cast(value=$const140.0) ['$142return_value.1', '$const140.0']
    return $142return_value.1                ['$142return_value.1']
label 144:
    $const144.0 = const(int, 0)              ['$const144.0']
    letters = $const144.0                    ['$const144.0', 'letters']
    $150get_iter.2 = getiter(value=buf)      ['$150get_iter.2', 'buf']
    $phi152.0 = $150get_iter.2               ['$150get_iter.2', '$phi152.0']
    jump 152                                 []
label 152:
    $152for_iter.1 = iternext(value=$phi152.0) ['$152for_iter.1', '$phi152.0']
    $152for_iter.2 = pair_first(value=$152for_iter.1) ['$152for_iter.1', '$152for_iter.2']
    $152for_iter.3 = pair_second(value=$152for_iter.1) ['$152for_iter.1', '$152for_iter.3']
    $phi154.1 = $152for_iter.2               ['$152for_iter.2', '$phi154.1']
    branch $152for_iter.3, 154, 194          ['$152for_iter.3']
label 154:
    ch = $phi154.1                           ['$phi154.1', 'ch']
    $const156.2 = const(int, 97)             ['$const156.2']
    $158load_global.3 = global(ord: <built-in function ord>) ['$158load_global.3']
    $162call_function.5 = call $158load_global.3(ch, func=$158load_global.3, args=[Var(ch, whatdothenumbasmean.py:48)], kws=(), vararg=None) ['$158load_global.3', '$162call_function.5', 'ch']
    $168compare_op.7 = $const156.2 <= $162call_function.5 ['$162call_function.5', '$168compare_op.7', '$const156.2']
    bool170 = global(bool: <class 'bool'>)   ['bool170']
    $170pred = call bool170($168compare_op.7, func=bool170, args=(Var($168compare_op.7, whatdothenumbasmean.py:49),), kws=(), vararg=None) ['$168compare_op.7', '$170pred', 'bool170']
    $phi172.1 = $162call_function.5          ['$162call_function.5', '$phi172.1']
    branch $170pred, 172, 180                ['$170pred']
label 172:
    $const172.2 = const(int, 122)            ['$const172.2']
    $174compare_op.3 = $phi172.1 <= $const172.2 ['$174compare_op.3', '$const172.2', '$phi172.1']
    bool176 = global(bool: <class 'bool'>)   ['bool176']
    $176pred = call bool176($174compare_op.3, func=bool176, args=(Var($174compare_op.3, whatdothenumbasmean.py:49),), kws=(), vararg=None) ['$174compare_op.3', '$176pred', 'bool176']
    branch $176pred, 178, 297                ['$176pred']
label 178:
    jump 184                                 []
label 180:
    jump 297                                 []
label 184:
    $const186.2 = const(int, 1)              ['$const186.2']
    $188inplace_add.3 = inplace_binop(fn=<built-in function iadd>, immutable_fn=<built-in function add>, lhs=letters, rhs=$const186.2, static_lhs=Undefined, static_rhs=Undefined) ['$188inplace_add.3', '$const186.2', 'letters']
    letters = $188inplace_add.3              ['$188inplace_add.3', 'letters']
    jump 297                                 []
label 194:
    $const196.1 = const(int, 10)             ['$const196.1']
    $198compare_op.2 = letters != $const196.1 ['$198compare_op.2', '$const196.1', 'letters']
    bool200 = global(bool: <class 'bool'>)   ['bool200']
    $200pred = call bool200($198compare_op.2, func=bool200, args=(Var($198compare_op.2, whatdothenumbasmean.py:51),), kws=(), vararg=None) ['$198compare_op.2', '$200pred', 'bool200']
    branch $200pred, 202, 206                ['$200pred']
label 202:
    $const202.0 = const(bool, False)         ['$const202.0']
    $204return_value.1 = cast(value=$const202.0) ['$204return_value.1', '$const202.0']
    return $204return_value.1                ['$204return_value.1']
label 206:
    $const208.1 = const(int, 3)              ['$const208.1']
    $210binary_subscr.2 = static_getitem(value=buf, index=3, index_var=$const208.1, fn=<built-in function getitem>) ['$210binary_subscr.2', '$const208.1', 'buf']
    $const214.4 = const(int, 10)             ['$const214.4']
    $216binary_subscr.5 = static_getitem(value=buf, index=10, index_var=$const214.4, fn=<built-in function getitem>) ['$216binary_subscr.5', '$const214.4', 'buf']
    $218compare_op.6 = $210binary_subscr.2 != $216binary_subscr.5 ['$210binary_subscr.2', '$216binary_subscr.5', '$218compare_op.6']
    bool220 = global(bool: <class 'bool'>)   ['bool220']
    $220pred = call bool220($218compare_op.6, func=bool220, args=(Var($218compare_op.6, whatdothenumbasmean.py:55),), kws=(), vararg=None) ['$218compare_op.6', '$220pred', 'bool220']
    branch $220pred, 234, 222                ['$220pred']
label 222:
    $const224.1 = const(int, 3)              ['$const224.1']
    $226binary_subscr.2 = static_getitem(value=buf, index=3, index_var=$const224.1, fn=<built-in function getitem>) ['$226binary_subscr.2', '$const224.1', 'buf']
    $const228.3 = const(str, _)              ['$const228.3']
    $230compare_op.4 = $226binary_subscr.2 != $const228.3 ['$226binary_subscr.2', '$230compare_op.4', '$const228.3']
    bool232 = global(bool: <class 'bool'>)   ['bool232']
    $232pred = call bool232($230compare_op.4, func=bool232, args=(Var($230compare_op.4, whatdothenumbasmean.py:55),), kws=(), vararg=None) ['$230compare_op.4', '$232pred', 'bool232']
    branch $232pred, 234, 238                ['$232pred']
label 234:
    $const234.0 = const(bool, False)         ['$const234.0']
    $236return_value.1 = cast(value=$const234.0) ['$236return_value.1', '$const234.0']
    return $236return_value.1                ['$236return_value.1']
label 238:
    $const240.1 = const(int, 8)              ['$const240.1']
    $242binary_subscr.2 = static_getitem(value=buf, index=8, index_var=$const240.1, fn=<built-in function getitem>) ['$242binary_subscr.2', '$const240.1', 'buf']
    $const246.4 = const(int, 12)             ['$const246.4']
    $248binary_subscr.5 = static_getitem(value=buf, index=12, index_var=$const246.4, fn=<built-in function getitem>) ['$248binary_subscr.5', '$const246.4', 'buf']
    $250compare_op.6 = $242binary_subscr.2 != $248binary_subscr.5 ['$242binary_subscr.2', '$248binary_subscr.5', '$250compare_op.6']
    bool252 = global(bool: <class 'bool'>)   ['bool252']
    $252pred = call bool252($250compare_op.6, func=bool252, args=(Var($250compare_op.6, whatdothenumbasmean.py:57),), kws=(), vararg=None) ['$250compare_op.6', '$252pred', 'bool252']
    branch $252pred, 270, 256                ['$252pred']
label 256:
    $const258.1 = const(int, 8)              ['$const258.1']
    $260binary_subscr.2 = static_getitem(value=buf, index=8, index_var=$const258.1, fn=<built-in function getitem>) ['$260binary_subscr.2', '$const258.1', 'buf']
    $const262.3 = const(str, @)              ['$const262.3']
    $264compare_op.4 = $260binary_subscr.2 != $const262.3 ['$260binary_subscr.2', '$264compare_op.4', '$const262.3']
    bool266 = global(bool: <class 'bool'>)   ['bool266']
    $266pred = call bool266($264compare_op.4, func=bool266, args=(Var($264compare_op.4, whatdothenumbasmean.py:57),), kws=(), vararg=None) ['$264compare_op.4', '$266pred', 'bool266']
    branch $266pred, 270, 274                ['$266pred']
label 270:
    $const270.0 = const(bool, False)         ['$const270.0']
    $272return_value.1 = cast(value=$const270.0) ['$272return_value.1', '$const270.0']
    return $272return_value.1                ['$272return_value.1']
label 274:
    $274load_global.0 = global(ord: <built-in function ord>) ['$274load_global.0']
    $const278.2 = const(int, 14)             ['$const278.2']
    $280binary_subscr.3 = static_getitem(value=buf, index=14, index_var=$const278.2, fn=<built-in function getitem>) ['$280binary_subscr.3', '$const278.2', 'buf']
    $282call_function.4 = call $274load_global.0($280binary_subscr.3, func=$274load_global.0, args=[Var($280binary_subscr.3, whatdothenumbasmean.py:61)], kws=(), vararg=None) ['$274load_global.0', '$280binary_subscr.3', '$282call_function.4']
    $const284.5 = const(int, 48)             ['$const284.5']
    $286compare_op.6 = $282call_function.4 != $const284.5 ['$282call_function.4', '$286compare_op.6', '$const284.5']
    bool288 = global(bool: <class 'bool'>)   ['bool288']
    $288pred = call bool288($286compare_op.6, func=bool288, args=(Var($286compare_op.6, whatdothenumbasmean.py:61),), kws=(), vararg=None) ['$286compare_op.6', '$288pred', 'bool288']
    branch $288pred, 292, 296                ['$288pred']
label 292:
    $const292.0 = const(bool, False)         ['$const292.0']
    $294return_value.1 = cast(value=$const292.0) ['$294return_value.1', '$const292.0']
    return $294return_value.1                ['$294return_value.1']
label 296:
    $296load_global.0 = global(crc32: CPUDispatcher(<function crc32 at 0x01EAA538>)) ['$296load_global.0']
    $300call_function.2 = call $296load_global.0(flag, func=$296load_global.0, args=[Var(flag, whatdothenumbasmean.py:26)], kws=(), vararg=None) ['$296load_global.0', '$300call_function.2', 'flag']
    $const302.3 = const(int, 3476224294)     ['$const302.3']
    $304compare_op.4 = $300call_function.2 == $const302.3 ['$300call_function.2', '$304compare_op.4', '$const302.3']
    $306return_value.5 = cast(value=$304compare_op.4) ['$304compare_op.4', '$306return_value.5']
    return $306return_value.5                ['$306return_value.5']
label 297:
    jump 152                                 []


```



It says Numbas IR dump at the top and upon some googling, we see that it's the Intermediate Representation (IR) of the Numbas library. We couldn't find a cheatsheet or reference sheet of the IR syntax so we just did some educated guessing. 

To keep track of what is going on in the program, we drew a simple Control Flow Graph (CFG):

![Numbas-CFG](images/WhatDoTheNumbasMean/Numbas-CFG.png)



We did not include the intermediate returns since they do not provide any useful information as it is not the intended flow.



From the CFG we can see that the flag is

- 16 characters long between the braces
- starts with "th3"
- has '@' at index 8 and 12
- has '_' at index 3 and 10

 so it looks something like this:

|      |      |      |      |      |      | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| C    | T    | F    | S    | G    | {    | t    | h    | 3    | _    |      |      |      |      | @    |      | _    |      | @    |      | 0    |      | }    |



We also note that the string "numb" is continuous in the flag (`"numb" in flag` condition) so the only place we could fit that is from index 4 to 7 which results in:

|      |      |      |      |      |      | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| C    | T    | F    | S    | G    | {    | t    | h    | 3    | _    | n    | u    | m    | b    | @    |      | _    |      | @    |      | 0    |      | }    |



The letters counting loop tells us there are 10 lower case alphabets in the flag, we only have 6 so that leaves 4 more, which is exactly the number of characters we are missing. Fortunately, the IR also provided us with a CRC32 checksum for the flag so we could use this to conduct a brute force.

Brute force code:

```python
import string
import zlib

def main():
    for i9 in string.ascii_lowercase:
        for i11 in string.ascii_lowercase:
            for i13 in string.ascii_lowercase:
                for i15 in string.ascii_lowercase:
                    candidate = getCandidate(i9, i11, i13, i15)
                    if (check(candidate)):
                        print(candidate) #FOUND!!
                        return

def getCandidate(i9, i11, i13, i15):
    return "CTFSG{th3_numb@"+i9+"_"+i11+"@"+i13+"0"+i15+"}"

def check(flag):
    crc_value = 3476224294
    crc_out = zlib.crc32(bytes(flag, encoding="raw_unicode_escape"))
    return  crc_out == crc_value

main()
```



With that we found the flag!

`CTFSG{th3_numb@s_m@s0n}`



## Learning Points

Do not get intimidated by tons of junk