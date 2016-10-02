export function prettyDate(time) {
    let hours;
    let minutes;
    let seconds;

    if (typeof time === 'number') {
        seconds = Math.floor(time / 1000 % 60);
        minutes = Math.floor(time / (1000*60) % 60);
        hours = Math.floor(time / (1000*60*60) % 24);
    } else {
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    }

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}
