
def is_palindrome(word):
	# 코드를 입력하세요.
	wLen = len(word)
	for i in range(wLen):
		if word[i] != word[wLen - 1 - i]:
			return False
	return True

# 테스트
print(is_palindrome("racecar"))
print(is_palindrome("stars"))
print(is_palindrome("토마토"))
print(is_palindrome("kayak"))
print(is_palindrome("hello"))