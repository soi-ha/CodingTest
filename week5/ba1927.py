# 최소 힙

import sys, heapq
input = sys.stdin.readline

heap = []
n = int(input())
for i in range(n):
  x = int(input())
  if x == 0:
    if len(heap) == 0:
      print(0)
    else:
      print(heapq.heappop(heap))
  else:
    heapq.heappush(heap,x)