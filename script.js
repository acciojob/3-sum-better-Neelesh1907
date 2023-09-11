function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);
	let minDiff=0,c,d,e;
	for(let i=0;i<arr.length-2;i++){
		if(i>0 && arr[i]===arr[i-1]){
			continue;
		}
		let j = i+1,k=arr.length-1;
		while(j<k){
			
		   let x = arr[i]+arr[j]+arr[k];
		   diff = x>target?(x-target):(target-x);
		   if(minDiff>diff){
			  c=ar[i];
			  d=ar[j];
			  e=ar[k];
			  minDiff=diff; 
		   }
		   if(x<target){
			   j++;
		   }
		   else{
		       k--;	
		  }	
		}
	}
	return (c+d+e);
}

module.exports = threeSum;
