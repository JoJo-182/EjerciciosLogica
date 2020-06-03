# Autor : Jonathan Arroyo Lara
def defineRepetitions (myArray)
  dictionary = {1 => 0, 2 => 0, 3=> 0, 4=>0, 5=>0}
    
  myArray.each do |element|
    if dictionary.key? (element)
      dictionary[element] = dictionary[element]  + 1
    end
  end
  
  getHistogram (dictionary)

end
  
def getHistogram (myDictionary)

  

end

myArray = [1,2,1,3,3,1,2,1,5,1]
defineRepetitions(myArray)

