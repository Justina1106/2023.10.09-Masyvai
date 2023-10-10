console.groupCollapsed('Masyvų teorija')

// Masyvai / arrays
const numsArray = [5, 500, -5, 57.5, 4534, 4444]
// Indeksai        0   1    2    3     4    5

console.log(numsArray)
console.log(numsArray.length)

// console.log(numsArray[0])
// console.log(numsArray[1])
// console.log(numsArray[2])
// console.log(numsArray[3])
// console.log(numsArray[4])
// console.log(numsArray[5])

for (let i = 0; i < numsArray.length; i++) {
    console.log(numsArray[i])
}

const newArr = ['Vienas', 'Du', 5, true, [1, 2, 5]]
// Indeksai        0       1    2    3       4
// 0  1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
console.log(newArr[4][0])
console.log(newArr[4][1])
console.log(newArr[4][2])

console.log(newArr[1])
newArr[1] = 200
console.log(newArr[1])

newArr[newArr.length] = 500
console.log(newArr)

console.log(typeof newArr)

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

// pop() metodas - pašalina paskutinį masyvo narį.
const lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities)

// shift() metodas - pašalina pirmą masyvo narį.
const firstCity = cities.shift()
console.log(firstCity)

cities.shift()

console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.
const updatedCitiesLength = cities.push('Šiauliai')
console.log(updatedCitiesLength)

cities.push('Panevėžys')
cities.push('Vilnius', 'Kaunas')

console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
const updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)

const countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index                0          1         2          3         4         5


// Slice (-)     -6          -5        -4        -3        -2         -1      

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)

const slicedCountries1 = countries.slice()
console.log(slicedCountries1)
const slicedCountries2 = countries.slice(0)
console.log(slicedCountries2)
const slicedCountries3 = countries.slice(2)
console.log(slicedCountries3)
const slicedCountries4 = countries.slice(2, 4)
console.log(slicedCountries4)
const slicedCountries5 = countries.slice(0, 3)
console.log(slicedCountries5)
const slicedCountries6 = countries.slice(-4)
console.log(slicedCountries6)
const slicedCountries7 = countries.slice(-4, -2)
console.log(slicedCountries7)
const slicedCountries8 = countries.slice(-4, 2)
console.log(slicedCountries8)
const slicedCountries9 = countries.slice(-3, 2)
console.log(slicedCountries9)
const slicedCountries10 = countries.slice(2, -2)
console.log(slicedCountries10)
const slicedCountries11 = countries.slice(-2, -4)
console.log(slicedCountries11)
const slicedCountries12 = countries.slice(4, 2)
console.log(slicedCountries12)

console.groupEnd()

console.groupCollapsed('Namų darbas 1-ma dalis')

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

const dataArray = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// Slice (+)      0       1  2  3  4   5    6     7     8     9      10         11   12  13 14  15   16    17 18         19   20   21   22  23   24    25    26     27   

// Slice (+)      -27   -26 -25-24-23 -22  -21   -20   -19   -18    -17        -16  -15 -14-13 -12  -11   -10-9         -8   -7    -6   -5  -4   -3    -2    -1     0
// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
const dataArray1 = dataArray.slice(0, 1)
console.log(dataArray1)

// 2.2. Gauti paskutinį masyvo narį.
const dataArray2 = dataArray.slice(26)
console.log(dataArray2)

// 2.3. Gauti antrą masyvo narį.
const dataArray3 = dataArray.slice(1, 2)
console.log(dataArray3)

// 2.4. Gauti priešpaskutinį masyvo narį.
const dataArray4 = dataArray.slice(25, 26)
console.log(dataArray4)
// 2.5. Gauti aštuntą masyvo narį.
const dataArray5 = dataArray.slice(7, 8)
console.log(dataArray5)
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
const dataArray6 = dataArray.slice(-9, -8)
console.log(dataArray6)
// 2.7. Gauti vidurinį masyvo narį.
const dataArray7 = dataArray.slice(13, 14)
console.log(dataArray7)
// 2.8. Gauti pirmus tris masyvo narius.
const dataArray8 = dataArray.slice(0, 3)
console.log(dataArray8)
// 2.9. Gauti paskutinius tris masyvo narius.
const dataArray9 = dataArray.slice(24, 27)
console.log(dataArray9)
// 2.10. Gauti pirmus 10 masyvo narius.
const dataArray10 = dataArray.slice(0, 10)
console.log(dataArray10)
// 2.11. Gauti paskutinius 10 masyvo narius.
const dataArray11 = dataArray.slice(-10)
console.log(dataArray11)
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
const dataArray12 = dataArray.slice(2, 8)
console.log(dataArray12)
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
const dataArray13 = dataArray.slice(4, 9)
console.log(dataArray13)
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
const dataArray14 = dataArray.slice(10, 19)
console.log(dataArray14)
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
const dataArray15 = dataArray.slice(-20, -8)
console.log(dataArray15)
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
const dataArray16 = dataArray.slice(1)
console.log(dataArray16)
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
const dataArray17 = dataArray.slice(0, -1)
console.log(dataArray17)
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
const dataArray18 = dataArray.slice(5)
console.log(dataArray18)
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
const dataArray19 = dataArray.slice(0, -5)
console.log(dataArray19)
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
const dataArray20 = dataArray.slice(0, 13)
console.log(dataArray20)
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
const dataArray21 = dataArray.slice(14, 27);
console.log(dataArray21)
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
const dataArray22 = dataArray.slice(1, -1);
console.log(dataArray22)
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
const dataArray23 = dataArray.slice(5, -3);
console.log(dataArray23)
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
const dataArray24 = dataArray.slice(1, -8);
console.log(dataArray24)
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
const dataArray25 = dataArray.slice(7, -1);
console.log(dataArray25)
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
const dataArray26 = dataArray.slice(9, -12);
console.log(dataArray26)
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
const dataArray27 = dataArray.slice(10, 10 + 9);
console.log(dataArray27)
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
const dataArray28 = dataArray.slice(7, 7 + 12);
console.log(dataArray28)
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
const dataArray29 = dataArray.slice(0, 5)
console.log(dataArray29)
const dataArray229 = dataArray.slice(-6)
console.log(dataArray229)
const dataArray229all = dataArray29.concat(dataArray229)
console.log(dataArray229all)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
const dataArray30 = dataArray.slice(2, 5)
console.log(dataArray30)
const dataArray230 = dataArray.slice(14, 17)
console.log(dataArray230)
const dataArray230all = dataArray30.concat(dataArray230)
console.log(dataArray230all)

console.groupEnd()

console.groupCollapsed('Namų darbas 2-tra dalis')
// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

const array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
// masyvas    1  2    3     4    5     6      7      8    9    10      11      12   13  14    15  16   17   18      19      20   21     22   23
// Slice (+) 0 1  2      3    4    5      6     7      8    9    10         11   12  13   14    15 16    17   18         19   20    21    22    23        27   

// Slice (+)-23-22-21   -20  -19  -18    -17   -16    -15  -14  -13        -12  -11 -10   -9   -8  -7    -6   -5         -4   -3    -2    -1     0

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
let task11 = array.shift()

console.log(task11)
console.log("Modified Array:", array);

// 1.2. Pašalinti paskutinį masyvo narį.
let task12 =array.pop()

console.log(task12)
console.log("Modified Array:", array);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
function removeMiddleElement(array) {
let middleIndex;
    if (array.length % 2 === 1) {
        middleIndex = Math.floor(array.length / 2);
    } else {
        middleIndex = array.length / 2 - 1; 
    }

    const removedElement = array.splice(middleIndex, 1);

    return {
        removedElement: removedElement[0], // Return the removed element
        newArray: array // Return the modified array
    };
}

// Example usage
const originalArray = [5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154]
const result = removeMiddleElement(originalArray);

console.log("Removed Element:", result.removedElement);
console.log("Modified Array:", result.newArray);
// 1.4. Pašalinti priešpaskutinį masyvo narį.
const penultimateIndex = array.length - 2;
array.splice(penultimateIndex, 1);

console.log("Modified Array:", array);

// 1.5. Pašalinti antrą masyvo narį.
const indexToRemove = 1; 
array.splice(indexToRemove, 1);

console.log("Modified Array:", array);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
const startIndex = 7;
const elementsToRemove = 2; 
array.splice(startIndex, elementsToRemove);

console.log("Modified Array:", array);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
const startIndex1 = 4;
const elementsToRemove1 = array.length - startIndex;
array.splice(startIndex1, elementsToRemove1);

console.log("Modified Array:", array);
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
array.splice(2, 1, 888);

console.log("Modified Array:", array);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


console.groupEnd()
