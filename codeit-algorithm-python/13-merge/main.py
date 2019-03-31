def merge(list1, list2):
  mergedArr = []
  i = 0
  j = 0
  while i < len(list1) and j < len(list2):
    if list1[i] < list2[j]:
      mergedArr.append(list1[i])
      i += 1
    else:
      mergedArr.append(list2[j])
      j += 1
  if i == len(list1):
    mergedArr += list2[j:]
  elif j == len(list2):
    mergedArr += list1[i:]
  
  return mergedArr

# 테스트
print(merge([1],[]))
print(merge([],[1]))
print(merge([2],[1]))
print(merge([1, 2, 3, 4],[5, 6, 7, 8]))
print(merge([5, 6, 7, 8],[1, 2, 3, 4]))
print(merge([4, 7, 8, 9],[1, 3, 6, 10]))