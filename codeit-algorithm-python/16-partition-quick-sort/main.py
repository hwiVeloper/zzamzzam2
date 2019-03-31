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

# 퀵 정렬
def quicksort(my_list, start, end):
	if end < start:
		return None
	else:
		pivot = partition(my_list, start, end)
		quicksort(my_list, start, pivot - 1)
		quicksort(my_list, pivot + 1, end)



# 테스트 1
list1 = [1, 3, 5, 7, 9, 11, 13, 11]
quicksort(list1, 0, len(list1) - 1)
print(list1)

# 테스트 2
list2 = [28, 13, 9, 30, 1, 48, 5, 7, 15]
quicksort(list2, 0, len(list2) - 1)
print(list2)

# 테스트 3
list3 = [2, 5, 6, 7, 1, 2, 4, 7, 10, 11, 4, 15, 13, 1, 6, 4]
quicksort(list3, 0, len(list3) - 1)
print(list3)