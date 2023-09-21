# Comments in python are a hashtag


# JS we use console.log()
print('hello from my python file')


# Variables  in JS - we need the var keyword and follow camelCase
# Python there is no keyword for variables and we use snake_case
first_name = "Shawn"
last_name = "Converse"

print(first_name, last_name)


# function countEvenNegatives(nums = []) {
#   let count = 0;

#   for (let i = 0; i < nums.length; i++) {
#     if (nums[i] < 0 && nums[i] % 2 === 0) {
#       count++;
#     }
#   }
#   return count;
# }

def count_even_negatives(nums = []):
    count = 0

    for i in range(len(nums)):
        if nums[i] < 0 and nums[i] % 2 == 0:
            count += 1
    
    return count


print(count_even_negatives([2, -2, 3, -3, 4, -4, 5]))