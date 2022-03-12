class Solution:
    def reverse(self, x: int) -> int:
        flag = 0
        x1 = x
        a = []
        if(x < 0):
            x1 = 0-x
            x = 0-x
            flag = 1
        for i in range(len(str(x1))):
            x = int(x)
            a.append(x % 10)
            x = x/10
        x = 0
        n = len(a)-1
        for i in range(len(str(x1))):
            x = x+a[i]*pow(10, n)
            n = n-1
        if(flag == 1):
            x = 0-x
        if(x < -pow(2, 31) or x > pow(2, 31)-1):
            return 0
        return x
