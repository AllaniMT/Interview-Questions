#theInputedText =  input("please enter the text, that you want count the number of words: \n")

def countWordsinText(text):
    isTheTextValid = isinstance(text, str)
    if isTheTextValid is True:
        arrayOfwords = text.split(" ")
        numberOfWord = len(arrayOfwords)

        result = "The number of word in the text \" " + text + " \" is: " + str(numberOfWord)
    else:
         result = "Sorry!" "The Text \"" + str(text) + "\"  is not valid"
    return result

exampleOfText = "Hello, i make a test"
expampleOfNumber = 321321


print(countWordsinText(expampleOfNumber))