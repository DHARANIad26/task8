
function bookTicket() {

    let movie = document.getElementById("movie");
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let tickets = Number(document.getElementById("tickets").value);

    if (date == "" || tickets < 1) {
        alert("Please select date and ticket count!");
        return;
    }

    let movieName = movie.options[movie.selectedIndex].text;
    let price = Number(movie.value);
    let total = price * tickets;

    document.getElementById("movieName").innerHTML =
        "Movie Name: " + movieName;

    document.getElementById("bookingDate").innerHTML =
        "Booking Date: " + date;

    document.getElementById("showTime").innerHTML =
        "Show Time: " + time;

    document.getElementById("ticketCount").innerHTML =
        "Number of Tickets: " + tickets;

    document.getElementById("ticketPrice").innerHTML =
        "Price Per Ticket: ₹" + price;

    document.getElementById("totalAmount").innerHTML =
        "Total Amount: ₹" + total;

    document.getElementById("details").style.display = "block";
}
