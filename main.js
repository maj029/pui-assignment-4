/*** Object Constructors ***/
function Item(size, color) {
  this.product = "Dog Collar";
  this.image = "collar_1.jpg";
  this.price = "$24.99";
  this.size = size;
  this.color = color;
}




$(document).ready(function() {

    $("#addItem").click(function(){
        var size = null;
        var color = null;

        //console . log ( 'working' );

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

    });//click function

//Register ARRAY into Cart.html
    //wrapped to turn back into array of objects
    //retrieve the cart from local storage (parse the cart so it turns from a string into an array of objects)
    var cart = JSON.parse(localStorage.getItem("selection"));


    var cartTable = document.getElementById("cart-table");
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
        /*jshint multistr: true*///So I can use the line continuation character

        var newRow = "<tr>\
        <th> " + productName + " </th>\
        <th> " + productImage + " </th>\
        <th> " + productPrice + " </th>\
        <th> " + productSize + " </th>\
        <th> " + productColor + " </th>\
        <th>Remove Item</td>\
        </tr>";
    }

    cartTable.append(newRow);
    //$('#cart-table > tbody:first').append(newRow);

    //construct rest of html here including product details and a delete button

    //create an onclick function for the delete button here

    //inside this onclick function, make sure to splice from cart and then update local storage
    cart.splice(i, 1);// delete items
    localStorage.setItem("selection", JSON.stringify(cart)); //reupdate local storage with new info


});

//Cart is array of objects
//in each iteration of the loop, create html that contains product details including image, price, quantity, etc.

//grab the table using a javascript or jQuery selector

//in addition to the product details, include a delete button on each new row of the table that deletes the data associated with the product from the array

//if the used deleted the data, make sure to also update the data stored in local storage

//and append the new html you created



/*    obj = JSON.parse(selection);
    document.getElementById("cart-table").innerHTML =
    obj.Item[1].product + " " + obj.Item[1].image + " " + obj.Item[1].price + " " + obj.Item[1].size + " " + obj.Item[1].color;



    var cartTable = $("#cart-table");

    $("#product-size").text(Item.size);
    $("#product-color").text(Item.color);


    // To grab stuff from the string and feed it into 'CART' page
    var output = "";
      for (var i = 0; i <= Item.length; i++) {
        for ( var in Item[i]) {
          if (Item[i].hasOwnProperty (key)){
            output += '<th>' + '""' + '</th>';
          } //hasOwnPropertyCheck
        } // for each object
      } //for each array element



cart.splice(i, 1);// delete items
localStorage.setItem(“selection”, JSON.stringify(cart)); //reupdate local storage with new info



});

*/
