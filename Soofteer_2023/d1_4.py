# 금고털이
# Lv.2

## 100.0으로 통과한 코드 
from sys import stdin
w, n = map(int, stdin.readline().split())
mp = []

for i in range(n):
  mp_value = list(map(int, stdin.readline().split()))
  mp.append(mp_value)

mp.sort(key=lambda x:-x[1])

result = 0
add_w = w 

for i in mp:
  if add_w == 0:
    break
  elif i[0] >= add_w:
    result += add_w * i[1]
    break  
  else:
    result += i[0] * i[1]
    add_w -= i[0]
  
print(result)

# 시간초과 발생
from sys import stdin
w, n = map(int, stdin.readline().split())
m = []
p = []

for i in range(1,n+1):
  a, b = map(int, stdin.readline().split())
  m.append(a)
  p.append(b)

result = 0
add_w = w 
while True:
  max_p = p.index(max(p))
  if add_w == 0:
    break
  elif m[max_p] <= w:
    result += m[max_p] * max_p
    add_w -= m[max_p]
  else:
    result += w * max_p
    break  
  m[max_p] = 0
  
print(result)