# 근무시간
# Lv.1

time = []

for i in range(5):
  start, end = map(str, input().split())
  s_list = start.split(':')
  e_list = end.split(':')
  if int(s_list[1]) > int(e_list[1]):
    time.append(((int(e_list[0]) - int(s_list[0]) - 1) * 60) + (60 - (int(s_list[1]) - int(e_list[1]))))
  else:
    time.append(((int(e_list[0]) - int(s_list[0])) * 60) + (int(e_list[1]) - int(s_list[1])))

print(sum(time))