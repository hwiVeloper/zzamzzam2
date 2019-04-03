def min_coin_count(value, coin_list):
  count = 0
  coin_list = sorted(coin_list, reverse=True)

  for i in range(len(coin_list)):
    tmpCount = value // coin_list[i]
    value = value - (tmpCount * coin_list[i])
    count += tmpCount

    if value == 0:
      break
  return count

# 테스트
default_coin_list = [100, 500, 10, 50]
print(min_coin_count(1440, default_coin_list))
print(min_coin_count(1700, default_coin_list))
print(min_coin_count(23520, default_coin_list))
print(min_coin_count(32590, default_coin_list))