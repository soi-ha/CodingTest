# 8단 변속기
# Lv2 

# 성공함
from sys import stdin

li = list(map(int,stdin.readline().split()))

print("ascending" if li == [1,2,3,4,5,6,7,8] else "descending" if li == [8,7,6,5,4,3,2,1] else "mixed")

# 왜 뭐가 문제인지 안됨
from sys import stdin

order = str(stdin.readline())
asc = "1 2 3 4 5 6 7 8"
des = "8 7 6 5 4 3 2 1"

print("ascending" if asc == order else "descending" if des == order else "mixed")