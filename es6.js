//Types Of Function
//Normal Declaration
function doubleIt(num){
return num*2;
}
const double = doubleIt(5);
console.log(double);


//ES6 format 1
const sakif = ()=> 21;
const result = sakif();
console.log(result);


//ES6 Format 2
const hridoy = num =>num*2;
const result = hridoy(5);
console.log(result);


//ES6 format 3
const dewan = (num1,num2)=> num1 + num2;
const result = dewan(5,5);
console.log(result);


//ES6 Complex Format
const heart = (num1,num2)=>{
	const add = num1 + num2;
	const del = num1-num2;
	const final = add*del;
	return final;
}
const get = heart(6,4);
console.log(get);



