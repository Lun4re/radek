import { differenceInSeconds, intervalToDuration } from "date-fns";

const starterDate = new Date("2021-08-14T16:38:50.875Z");

const calcTimeFromStarterDate = () => {
  const duration = intervalToDuration({
    start: 0,
    end: differenceInSeconds(starterDate, new Date()) * 1000,
  });

  return `${duration.days < 10 ? "0" + duration.days : duration.days}:${
    duration.hours < 10 ? "0" + duration.hours : duration.hours
  }:${duration.minutes < 10 ? "0" + duration.minutes : duration.minutes}:${
    duration.seconds < 10 ? "0" + duration.seconds : duration.seconds
  }`;
};

const timerElementNode = document.querySelector(".timer");

setInterval(() => {
  timerElementNode.innerHTML = calcTimeFromStarterDate();
}, 1000);
