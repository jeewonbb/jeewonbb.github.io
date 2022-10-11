fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

  /*fetch("sub_footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sub_footer").innerHTML = data;
  });*/