function threeSum(arr, target) {
// write your code here
	// arr.sort((a,b)=>a-b);
	// let minDiff=0,c,d,e;
	// for(let i=0;i<arr.length-2;i++){
	// 	if(i>0 && arr[i]===arr[i-1]){
	// 		continue;
	// 	}
	// 	let j = i+1,k=arr.length-1;
	// 	while(j<k){
			
	// 	   let x = arr[i]+arr[j]+arr[k];
	// 	   diff = x>target?(x-target):(target-x);
	// 	   if(minDiff>diff){
	// 		  c=ar[i];
	// 		  d=ar[j];
	// 		  e=ar[k];
	// 		  minDiff=diff; 
	// 	   }
	// 	   if(x<target){
	// 		   j++;
	// 	   }
	// 	   else{
	// 	       k--;	
	// 	  }	
	// 	}
	// }
	// return (c+d+e);
	arr.sort((a, b) => a - b);
  
  // Initialize variables
  let closestSum = arr[0] + arr[1] + arr[2];
  
  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      
      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Found an exact match, so return the sum
        return sum;
      }
    }
  }
  
  return closestSum;
}

module.exports = threeSum;
