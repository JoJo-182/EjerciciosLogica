# Autor : Jonathan Arroyo Lara
def getMaxElement (myArray)
    temp = myArray[0]
    myArray.each do |element|
      if temp < element
        temp = element
      end
    end 
    puts temp
end
  


myArray = [13,2,4,35,1]
getMaxElement(myArray)

