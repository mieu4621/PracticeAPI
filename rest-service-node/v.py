import math
s = input("nhap chuoi: ")
nums = [int(x) for x in s.split("-")]

sum = sum(nums)
max = max(nums)

print("The sum of the numbers is:", sum)
print("The largest number is:", max)