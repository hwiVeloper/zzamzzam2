def binary_search(element, some_list):
  stIdx = 0
  edIdx = len(some_list) - 1

  while stIdx <= edIdx:
    mid = (stIdx + edIdx) // 2 # 나눗셈의 몫 (//)
    if element == some_list[mid]:
      return mid
    elif element < some_list[mid]:
      edIdx = mid - 1
    else:
      stIdx = mid + 1
  return None

print(binary_search(2, [2, 3, 5, 7, 11]))
print(binary_search(0, [2, 3, 5, 7, 11]))
print(binary_search(5, [2, 3, 5, 7, 11]))
print(binary_search(3, [2, 3, 5, 7, 11]))
print(binary_search(11, [2, 3, 5, 7, 11]))