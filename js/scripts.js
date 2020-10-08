function newItem() {

    // Adding a new Item to the list
    let li = $('<li></li>');
    let inputValue = $('input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //Crossing out the Item from the list
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dbclick", function crossOut() {
        li.toggleClass("strike")
    });

    //Adding the delete "X" button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));

    li.append(crossOutButton);

    //Actually removes items from the list when clicked
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }

    //Allows the items to be resorted
    $('#list').sortable();

}