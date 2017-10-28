

/* _______  _______  _____   _____  ___ ___      ______  _______  ________  _______
|   |   ||   |   ||     \ |     \|   |   |    |   __ \|   _   ||  |  |  ||     __|
|       ||   |   ||  --  ||  --  |\     /     |    __/|       ||  |  |  ||__     |
|__|_|__||_______||_____/ |_____/  |___|      |___|   |___|___||________||_______|
                                                                                  */

/*** Object Constructors ***/
function Item(size, color) {
  this.product = "Dog Collar";
  this.image = "collar_1.jpg";
  this.price = "$24.99";
  this.size = size;
  this.color = color;
}

/*Checking that document has loaded before executing any commands     */
$(document).ready(function() {
    /*Adding the main function on the product page*/
    $("#addItem").click(function(){
        var size = null;
        var color = null;

        //console . log ( 'working' ); Used this in earlier versions to check progress

        //loop over all of the SIZE radio buttons, check if any of them are selected
        if(document.getElementById('tiny').checked){
            size = "tiny";
        }else if(document.getElementById('small').checked){
            size = "smal";
        }else if(document.getElementById('medium').checked){
            size = "medium";
        }else if(document.getElementById('large').checked){
            size = "large";
        }else {
            return;//if none of them are selected, exit this function early, the user didn't pick a size
        }
        //loop over all of the COLOR radio buttons, check if any of them are selected
        if(document.getElementById('strawberry').checked){
            color = "strawberry";
        }else if(document.getElementById('blackberry').checked){
            color = "blackberry";
        }else if(document.getElementById('crazyberry').checked){
            color = "crazyberry";
        }else if(document.getElementById('camouflage').checked){
            color = "camouflage";
        }else if(document.getElementById('nightmoon').checked){
            color = "nightmoon";
        }else if(document.getElementById('fireorange').checked){
            color = "fireorange";
        }else {
            return;//if none of them are selected, exit this function early, the user didn't pick a size
        }

        //if both selections have been made, create a new item object with those values
        var selection = new Item (size,color);
        var currentCart = JSON.parse(localStorage.getItem("selection")) || [];

        //save the selection to the browser
        currentCart.push(selection);
        localStorage.setItem("selection", JSON.stringify(currentCart));

    });//close click function

//Register ARRAY into Cart.html
    //wrapped to turn back into array of objects
    //retrieve the cart from local storage (parse the cart so it turns from a string into an array of objects)
    var cart = JSON.parse(localStorage.getItem("selection"));


    var cartTable = document.getElementById("cart-table");
    // I tried and testing with these variables to see if I could direct the objects into the table table on the Cart page
    //var newRow = $('<td></td>');
    //var newRow = "";
    //create a for loop that loops over the array of objects based on the array’s length
    for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i];
        var productName = cartItem.product;
        var productImage = cartItem.image;
        var productPrice = cartItem.price;
        var productSize = cartItem.size;
        var productColor = cartItem.color;
        /*jshint multistr: true*///So I can use the line continuation character (keep the code neat)
        var newRow = "<tr>\
        <th> " + productName + " </th>\
        <th> " + productImage + " </th>\
        <th> " + productPrice + " </th>\
        <th> " + productSize + " </th>\
        <th> " + productColor + " </th>\
        <th>Remove Item</td>\
        </tr>";
    }//close for loop
    //Check through changes and append new row if neccessary
    cartTable.append(newRow);
    //Similiar code to above but in JQuery, and trying to slot into the correct place
    //$('#cart-table > tbody:first').append(newRow);

    //an onclick function for the delete button here (didn't get far enough to try and incorporate this into the page)
    $("#delete").click(function(){
         var elems = newRow
            $(this).closest('tr').remove()
            })
        $('#cart-table').append(elems);
        //Splice from cart and then update local storage so everything has new info
        cart.splice(i, 1);// delete items
        localStorage.setItem("selection", JSON.stringify(cart)); //reupdate local storage with new info
        }//close delete function

});



