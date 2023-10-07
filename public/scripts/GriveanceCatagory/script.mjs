import { Read } from './fetching.mjs';

const fun = async () => {
    const list = document.querySelector("ul");

    try {
        const data = await Read();

        data.forEach(element => {
            const newElement = document.createElement("li");
            newElement.innerHTML = element.cid;
            list.appendChild(newElement);
            console.log(element);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

fun();
