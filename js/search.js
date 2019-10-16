function search() {
  var description = document.getElementsByClassName("description");
  var tags = document.getElementsByClassName("tags");

  var input, filter, ul, li, h3, time, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    time = li[i].getElementsByTagName("time")[0];
    description = li[i].getElementsByClassName("description")[0];
    tags = li[i].getElementsByClassName("tags")[0];

    txtValue = h3.textContent || h3.innerText
    artist = time.textContent || time.innerText
    descriptValue = description.textContent || description.innerText;
    tagsValue = tags.textContent || tags.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 ||
        descriptValue.toUpperCase().indexOf(filter) > -1 ||
        tagsValue.toUpperCase().indexOf(filter) > -1 ||
        artist.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
