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