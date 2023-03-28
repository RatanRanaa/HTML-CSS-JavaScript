setInterval(() => {
    d = new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);


// Get the current date
const today = new Date();

// Get the day, month, and year components
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Note: month is 0-based
const year = today.getFullYear().toString().slice(-2);

// Format the date as "dd mm yy"
const formattedDate = `${day}/${month}/${year}`;

// Display the formatted date in the HTML element
document.getElementById('date-display').textContent = formattedDate;



// Car project

const autoplay = document.getElementById('audio')
const sky = document.querySelector('.sky')

sky.addEventListener('mouseover', function() {
autoplay.play()
});

