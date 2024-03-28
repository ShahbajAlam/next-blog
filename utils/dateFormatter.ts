const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

export default function dateFormatter(date: any) {
    const dateString = String(new Date(date).getDate()).padStart(2, "0");
    const monthString = months[new Date(date).getMonth()];
    const yearString = new Date(date).getFullYear();
    return `${dateString} ${monthString}, ${yearString}`;
}
