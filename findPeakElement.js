// var findPeakElement = function(nums) {
//     let low = 0, high = nums.length-1, mid;
    
//     while(low < high) {
//         mid = Math.floor((low + high)/2);
//         if(nums[mid] > nums[mid+1]) high = mid;
//         else low = mid + 1;
//     }
    
//     return low;
// };

// console.log(findPeakElement([1,2,9,3,2,4]))

const findPeakElement = function(nums) {
    let lowValue = 0, highValue = nums.length-1, midValue;
    
    while(lowValue < highValue) {
        midValue = Math.floor((lowValue + highValue)/2);
        if(nums[midValue] > nums[midValue+1]) highValue = midValue;
        else lowValue = midValue+1;
    }
    
    return lowValue;
};

console.log(findPeakElement([1,2,9,3,2,4]))

