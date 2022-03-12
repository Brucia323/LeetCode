class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        max_len = 0
        start = 0
        end = 0
        while end < len(s):
            if s[end] not in s[start:end]:
                end += 1
            else:
                max_len = max(max_len, end - start)
                start += 1
        max_len = max(max_len, end - start)
        return max_len
