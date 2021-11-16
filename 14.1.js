//max
const nums = [2, 5, 6, 8, 9];
const max = nums.reduce(function (maxval, curr) {
    return Math.max(maxval, curr)

})
console.log(max)
const max2 = nums.reduce(function (max3, curr) {
    if (curr > max3) {
        return curr;
    } return max3


})
console.log(max2)
//2 sum of even numbers in array
function sumEven(nums) {
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? sum.push(nums[i]) : 0
    }
    return sum.reduce((a, b) => a + b, 0)
}
console.log(sumEven(nums))


//3 avg
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(nums))


const arr=[9,4,6,2];
const minVal= arr.reduce(( acc, curr)=> {
return (Math.min(acc, curr))
})
console.log(minVal);

function evenNum(arr){
    let array=[];
    for(let i=0; i<arr.length; i++){
        arr[i] % 2===0? array.push(arr[i]):0
    }
    return array.reduce((a,b)=> a+b, 0)
}
console.log(evenNum(arr))

function numi(arr){
   return arr.reduce((a, b)=> (a + b)) / arr.length
}
console.log(numi(arr)) 