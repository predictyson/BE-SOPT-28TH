const digitalTime  = document.querySelector(".digital_time"),
    digitalButton = document.querySelector(".digital_button"),
    header = document.querySelector(".header");

const fillZero = (num) => {
    num = num + "";
    if (num.length <2 ) {
        return "0" + num;
    } else {
        return num;
    }
};

const getTime = () => {
    const now = new Date();

    let hour = now.getHours(),
    month = now.getMonth();
    const minute = now.getMinutes(),
        second = now.getSeconds(),
        year = now.getFullYear(),
        day = now.getDate();

    const monthList = [
        "Jaunuary",
        "Februrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    month = monthList[month];

    if( hour >= 0 && hour <=11 ) {
        if(hour === 0) hour = 12;
        digitalButton.innerhTML = "AM";
    } else {
        if (hour >=13) hour -= 12;
        digitalButton.innerHTML = "PM";
    }

    return { year, month, day, hour, minute, second };
};

const drawTime = () => {
    const { year, month, day, hour, minute, second } = getTime();

    header.innerHTML = `Today is <span> ${month}</span>, ${year}`;
    digitalTime.innerHTML = `${fillZero(hour)} :  ${fillZero(minute)} : ${fillZero(second)}`;
};

const init = () => {
    setInterval(drawTime, 1000);
};

init();