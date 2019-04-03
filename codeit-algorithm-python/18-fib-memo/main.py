# n번째 피보나치 수를 담는 사전
fib_cache = {}

def fib_memo(n):
  if n == 1 or n == 2:
    return 1
  elif fib_cache.get(n) != None:
    return fib_cache[n]
  else:
    fib_cache[n] = fib_memo(n-1) + fib_memo(n-2)
    return fib_cache[n]

# 테스트
print(fib_memo(10))
print(fib_memo(50))
print(fib_memo(100))