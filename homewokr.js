var arr=[4,6,2,7,8,5,9,3,1];

function swap(arr,a, b){  
    var temp;  
    temp = arr[a];  
    arr[a] = arr[b];  
    arr[b] = temp;  
 } 

function sort_u(arr)
{
    for (var i=0;i<arr.length-1;i++)
    {
        for (var j=0;j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr,j,j+1);
            }
        }
    }
}

function  temp(){
    console.log("hello");
}

var tmp=arr.forEach(function(){

});


<!DOCTYPE html>
<html>
<body>

<p>Click the button to list all the items in the array.</p>
<button onclick="numbers.forEach(myFunction)">Try it</button>
<p id="demo"></p>

<script>
demoP = document.getElementById("demo");
var numbers = [4, 9, 16, 25];

function myFunction(item, index) {
  demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>"; 
}
</script>

</body>
</html>


