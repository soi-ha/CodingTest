# AC

t = int(input())

for test in range(t):
  c = input()
  n = int(input())
  array = input().rstrip()[1:-1].split(",")

  if n == 0:
    array = []

  l, r, re = 0, 0, True

  for com in c:
    if com == 'R':
      re = not re
    else:
      if re is True:
        l += 1
      else:
        r += 1
  if r + l <= n:
    answer = array[l:n - r]
    if re is True:
      print('[' + ','.join(answer) + ']')
    else:
      print('[' + ','.join(answer[::-1]) + ']')
  else:
    print('error')