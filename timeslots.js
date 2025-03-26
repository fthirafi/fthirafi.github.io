// Generate timeslots every 30 minutes from 9:00 AM to 5:00 PM
const timeslots = [];
for (let hour = 9; hour < 17; hour++) {
    timeslots.push(`${hour}:00 AM - ${hour}:30 AM`);
    timeslots.push(`${hour}:30 AM - ${hour + 1}:00 AM`);
}
timeslots[timeslots.length - 1] = timeslots[timeslots.length - 1].replace("AM", "PM"); // Adjust the last slot to PM

// Populate the timeslot dropdown
document.addEventListener("DOMContentLoaded", () => {
    const timeslotDropdown = document.getElementById("timeslot");
    timeslots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeslotDropdown.appendChild(option);
    });
});
