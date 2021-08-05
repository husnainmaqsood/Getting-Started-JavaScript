let now = Date();
let string = "Shahid Afridi";


changeColor();

const button = document.getElementById("see-review"); // getting the button reference
button.addEventListener('click', function(){  // if button is clicked this function will execute

    const review = document.getElementById('review'); //getting the reference of the section that we want to toggle
    if(review.classList.contains('d-none')){   // if d-none class already exists    
        review.classList.remove('d-none');      // then remove it
        button.textContent = 'Close Review';    // and change the description of the button to Close Review
    }
    else{                                        // if d-none is not present
        review.classList.add('d-none');            // add d-none property
        button.textContent = 'See Review'          // change the description of the button
    }

});

let array = ['a', 'bbbb', 'c', 'd'];
// console.log(array.filter(function(item){
//     return item.length > 1;
// }))
array.forEach(function(item){
    console.log(item);
})

containers = document.getElementsByClassName('container');
containers[4].classList.add('d-none'); // hiding the container at 4th index
console.log(containers);

function showProductId(){
    let productId = 12345;
    // console.log(productId); this is accessible here because it is in the function scope.
}
// console.log(productId);  this id is not accessible here because product id is scope limited.