$(document).ready(function () {
    // Valid usernames and passwords
    const validUsers = [
        { username: "user", password: "password" },
        { username: "nico", password: "marcelino" },
        { username: "jimin", password: "bangtan" }
        // Add more if needed
    ];

    // Function to populate credentials box
    function populateCredentialsBox() {
        const credentialsBody = $("#credentialsBody");
        credentialsBody.empty(); // Clear previous content
        validUsers.forEach((user, index) => {
            credentialsBody.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
        </tr>
    `);
        });
    }

    populateCredentialsBox(); // Populate credentials box initially
    $("#login").submit(function (event) {
        event.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();

        const isValidUser = validUsers.some(user => user.username === username && user.password === password);

        if (isValidUser) {
            $("#loginForm").hide();
            $("#bookingForm").show();
            $("#logoutBtn").show();
            $("#loggedInUsername").text(username);
        } else {
            alert("Invalid username or password!");
        }
    });

    $("#booking").submit(function (event) {
        event.preventDefault();
        const eventType = $("#eventType option:selected").text();
        const date = $("#date").val();
        const time = $("#time option:selected").text();
        const guests = $("#guests").val();
        const venue = $("#venue option:selected").text();
        const occasion = $("#occasion").val();
        const specialRequests = $("#specialRequests").val();

        // Here you could send booking details to a server and handle the booking process

        $("#bookingForm").hide();
        $("#confirmEventType").text(eventType);
        $("#confirmDate").text(date);
        $("#confirmTime").text(time);
        $("#confirmGuests").text(guests);
        $("#confirmVenue").text(venue);
        $("#confirmOccasion").text(occasion);
        $("#confirmSpecialRequests").text(specialRequests || "None");
        $("#bookingConfirmation").show();
    });


    $("#logoutBtn").click(function () {
        $("#bookingForm").hide();
        $("#bookingConfirmation").hide();
        $("#logoutBtn").hide();
        $("#loginForm").show();
    });
});
