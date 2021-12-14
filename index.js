//write your code here
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

// let averageAge = arr => {
//   let reducer = (total, currentValue) => total + currentValue;
//   let sum = arr.reduce(reducer);
//   return Math.floor(sum / arr.length);
// };

// let ages = alumni.map(person => person.age);

// console.log(averageAge(ages));

const averageAge = arr => {
    const sum = arr.reduce((a,b) => a+b.age, 0);
    return Math.floor()
}


const bananaBread = (arr) => {
    let newObj = arr.map(obj=> ({ ...obj, bananaBread: `${obj.name} got banana bread at ${obj.job}` }));
    return newObj;
};

//  bananaBread(alumni);

const ninetiesBabies = (arr) => {
    let Agefilter = arr.filter(el => el.age > 21);
    return Agefilter;
};

//console.log(ninetiesBabies(alumni));

const addSchool = (arr) => {
    let newObj = arr.map(obj=> ({ ...obj, school: 'The Marcy Lab School'}));
    return newObj;
};

 //console.log(addSchool(alumni));
 


const allUseJavaScript = (arr) => {
    return arr.every((el) => el.language === 'JavaScript');
};

//console.log(allUseJavaScript(alumni));

const animals = ['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const noVowel = (arr) => {
   return arr.map(el=>el.replace( /[aeiou]/gi, 'x'));
};

//console.log(noVowel(animals));

const onlyVowelA = (arr) =>  {
    return arr.filter(el=>el.includes('a'));
};

//console.log(onlyVowelA(animals));

const longerThanSeven = (arr) => {
    return arr.some(el=>el.length > 7);
};

//console.log(longerThanSeven(animals));

const allFour = (arr) => {
    return arr.every((animal) => animal.length === 4);
};
//console.log(allFour(animals));

const concatStrings = (arr) => {
    return arr.reduce((prev, current) => `${prev} ${current}`);
};

console.log(concatStrings(animals));