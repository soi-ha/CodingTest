# 8단 변속기
# Lv2 

from sys import stdin

order = str(stdin.readline())
asc = "1 2 3 4 5 6 7 8"
des = "8 7 6 5 4 3 2 1"

print("ascending" if asc == order else "descending" if des == order else "mixed")