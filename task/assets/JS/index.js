function fun() {
  const first_div = document.querySelector("body>div");
  console.log(first_div.innerHTML);
  let copy_div = first_div.nextElementSibling;
  copy_div.innerHTML = first_div.innerHTML;
  console.log(copy_div.innerHTML);
}
