countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const map = new Map(countries)
console.log(map)
console.log(map.get('Finland'))
map.set('Turkey', 'Ankara')
console.log(map.get('Turkey'))
console.log(map)
console.log(map.size)
console.log(map.has('Turkey'))
for(const [country, capital] of map){
    console.log(country, capital)
}