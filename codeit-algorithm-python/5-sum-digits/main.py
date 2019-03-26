# n의 각 자릿수의 합을 리턴
def sum_digits(n):
  if n // 10 == 0:
    return n
  else:
    return (n % 10) + sum_digits(n // 10)

# 테스트
print(sum_digits(22541))
print(sum_digits(92130))
print(sum_digits(12634))
print(sum_digits(704))
print(sum_digits(3755))

# 22541
# 10으로 나누면 몫 : 2254 / 나머지 : 1
# 나머지 킾 2254