def fib_tab(n):
  fib_list = [] # 피보나치 결과를 담을 리스트
  
  for i in range(n+1):
    if i < 3:
      fib_list.append(1)
    else:
      fib_list.append(fib_list[i-1] + fib_list[i-2])
  return fib_list[n]

# 테스트
print(fib_tab(10))
print(fib_tab(56))
print(fib_tab(132))