const serverPort = 3000;
//Create
 function createProduct(name) {
  $.ajax({
 url: `http://localhost:${serverPort}/api/products/`,
 type: 'POST',
 contentType: 'application/json',
 data: JSON.stringify({ name: name }),
 success: function(response) {
  console.log('Product created:', response);  },
   error: function(error) {
   console.error('Error creating product:', error.responseText); }
  })
}

//Read
 function getAllProducts() {
  $.ajax({
  url: `http://localhost:${serverPort}/api/products/`,
 type: 'GET',
  success: function(response) {
 console.log('All Products:', response);
 },
 error: function(error) {
 console.error('Error getting products:', error.responseText);  }
  })
}

//Update
function updateProductByIndex(index, newName) {
 $.ajax({
url: `http://localhost:${serverPort}/api/products/${index}`,
type: 'PUT',
 contentType: 'application/json',
  data: JSON.stringify({ name: newName }),
  success: function(response) {
  console.log('Updated product at index ' + index + ':', response);
},
  error: function(error) {
  console.error('Error updating product:', error.responseText);    }
  })
}

//Delete
function deleteProductByIndex(index) {
$.ajax({
url: `http://localhost:${serverPort}/api/products/${index}`,
type: 'DELETE',
success: function(response) {
console.log('Product deleted at index ' + index + ':', response);
},
 error: function(error) {
 console.error('Error deleting product:', error.responseText);
}
})
}
