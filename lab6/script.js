const button = document.querySelector(".fetch-button");
const usersList = document.getElementById("users");
const statusDiv = document.querySelector(".status");

const fetchData = async () => {
    usersList.innerHTML = "";
    statusDiv.textContent = "Завантаження...";
    
    try {
        const data = await fetch("https://randomuser.me/api/?results=9").then(res => res.json())
        
        for (const user of data.results) {
            const { picture, phone, location } = user;
    
            const li = document.innerHTML = `
                <li class="user-item">
                    <img src="${picture.large}" alt="User Picture"> 
                    <p>Phone: ${ phone }</p>
                    <p>Address: ${location.postcode}, ${location.country}</p>
                    <p>Coordinates: ${location.coordinates.latitude}, ${location.coordinates.longitude}</p>
                </li>
            `;
    
            usersList.insertAdjacentHTML("beforeend", li);
        }
    
        statusDiv.textContent = "Дані успішно отримані!";
    } catch (error) {
        statusDiv.textContent = "Помилка при отриманні даних";
    } 
}

button.addEventListener("click", fetchData);