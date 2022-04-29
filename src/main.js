$(".success").hide();
$(".error").hide();
$("#update_product").hide();
var Item = [];
$("#add_product").click(() => {
  var ItemSKU = $("#product_sku").val();
  var ItemName = $("#product_name").val();
  var ItemPrice = $("#product_price").val();
  var ItemQuantity = $("#product_quantity").val();

  if (ItemSKU == "") {
    $("#product_sku").css({border: "1px solid red" });
    alert("sku is empty");
  } else if (ItemName == "") {
    $("#product_name").css({ border: "1px solid red" });
    alert("name is empty");
  } else if (ItemPrice == "") {
        $("#product_price").css({ border: "1px solid red" });
        alert("price not enter");
  } else if (ItemQuantity == "") {
    $("#product_quantity").css({ border: "1px solid red" });
    alert("please select quantity");
  } else {
    $("#product_quantity").css({ border: "1px solid black" });
    var inventory = {
      sku: ItemSKU,
      name: ItemName,
      price: ItemPrice,
      quantity: ItemQuantity,
    };
    Item.push(inventory);
    $(".success").append("your product is added successfuly").show();
    setTimeout(() => {
      $(".success").hide();
    }, 4000);
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");
    display();
  }
});
var table = `	<table>
<tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Action</th>
</tr>`;
function display() {
  var row = "";
  Item.forEach((e, i) => {
    row += `<tr>
        <td>${e.sku}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.quantity}</td>
        <td><a href="#" id="${i}" class="edit">Edit</a><a href="#"  class="delete">Delete</a></td>
        </tr>`;
  });
  $("#product_list").empty();
  $("#product_list").append(table + row + "</table>");
}

$(document).on("click", ".delete", function () {
  console.log("working");
  console.log(this.id);
  $(this).parent("td").parent("tr").remove();
});

$(document).on("click", ".edit", function () {
  var i = this.id;
  $(this).parent("td").parent("tr").css({ color: "red" });
  var info = Item[i];
  $("#id").val(`${i}`);
  $("#product_sku").val(`${info.sku}`);
  $("#product_name").val(`${info.name}`);
  $("#product_price").val(`${info.price}`);
  $("#product_quantity").val(`${info.quantity}`);
  $("#update_product").show();
  $("#add_product").hide();
});

$("#update_product").click(() => {
  var id = $("#id").val();
  var product_info = Item[id];
  product_info.sku = $("#product_sku").val();
  product_info.name = $("#product_name").val();
  product_info.price = $("#product_price").val();
  product_info.quantity = $("#product_quantity").val();

  display();
  $("#product_sku").val("");
  $("#product_name").val("");
  $("#product_price").val("");
  $("#product_quantity").val("");
  $("#update_product").hide();
  $("#add_product").show();
});
