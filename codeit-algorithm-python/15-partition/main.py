# 두 요소의 위치를 바꿔주는 helper function
def swap_elements(my_list, index1, index2):
  tmpValue = my_list[index2]
  my_list[index2] = my_list[index1]
  my_list[index1] = tmpValue
  return my_list

# 퀵 정렬에서 사용되는 partition 함수
def partition(my_list, start, end):
  p = end # pivot 인덱스
  b = start # big 그룹 이동 인덱스
  i = start # 체크 이동 인덱스
  for i in range(start, end):
    # pivot과 해당값을 비교히고 파티셔닝
    if my_list[p] < my_list[i]:
      i += 1
    else:
      my_list = swap_elements(my_list, b, i)
      b += 1
      i += 1
  swap_elements(my_list, b, p)
  return b

# 테스트 1
list1 = [4, 3, 6, 2, 7, 1, 5]
pivot_index1 = partition(list1, 0, len(list1) - 1)
print(list1)
print(pivot_index1)

# 테스트 2
list2 = [6, 1, 2, 6, 3, 5, 4]
pivot_index2 = partition(list2, 0, len(list2) - 1)
print(list2)
print(pivot_index2)
