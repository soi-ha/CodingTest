# 금고털이
# Lv.2

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