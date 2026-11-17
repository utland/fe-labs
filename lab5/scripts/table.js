const TARGET_CELL = 17;

const table = document.getElementById("grid-table");
const colorPicker = document.getElementById("color-picker");

const getRandomColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return `#${hex}`;
};

const generateTable = () => {

    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");
        
        for (let col = 0; col < 6; col++) {
            const counter = row * 6 + col + 1;
    
            const td = document.createElement("td");
            td.textContent = counter;
        
            if (counter === TARGET_CELL) {
                td.classList.add("target-cell");
    
                td.addEventListener("mouseenter", () => {
                    td.style.backgroundColor = getRandomColor();
                });
          
                td.addEventListener("click", () => {
                    td.style.backgroundColor = colorPicker.value;
                });
          
                td.addEventListener("dblclick", () => {
                    const selectedColor = colorPicker.value;
                    for (let i = 0; i < 6; i++) {
                        table.rows[i].cells[i].style.backgroundColor = selectedColor;
                    }
                });
            }
    
            tr.appendChild(td);
        }
    
      table.appendChild(tr);
    }
}

table.onload = generateTable();
