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
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']