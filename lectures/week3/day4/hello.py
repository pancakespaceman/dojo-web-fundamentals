print("Hello There!")

# Comments are made using the # character

# variables are declared just by themselves, there is not var, let, const

# Python convention for names of variables, files, functions, is snake_case
# words are lower case and separated with underscores
first_name = 'Shawn'

# functions in python declared using the `def` keyword
# code blocks in python are denoted with colons, not squirlly braces
# python enforces indentation for code blocks


def greeting(name):
    print("Hello", name)


greeting("Thanh")
# function greeting(name) {
#     console.log("Hello", name)
# }


# JS version
# function flatten2dArray(twoDimArr) {
#     const result = [];
#     for (let outer of twoDimArr){
#         for (let inner of outer){
#             result.push(inner)
#         }
#     }
#     return result;
# }

# Python version
def flatten_2d_array(two_dim_arr):
    result = []

    for outer in two_dim_arr:
        for inner in outer:
            result.push(inner)

    return result

# In python we call arrays, lists
# in python we call JS objects (key/value pairs), dictionaries
