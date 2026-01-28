const grid_container = document.querySelector("#grid-container");

let grid_size = 50

// for (i=0; i<grid_size*grid_size; i++) {
//     const grid_block = document.createElement("div");
//     grid_block.className = "grid-block";

//     grid_block.style.width = `${grid_container.offsetWidth / grid_size}px`
//     grid_block.style.height = `${grid_container.offsetHeight / grid_size}px`
//     grid_container.appendChild(grid_block);
// };

function grid_generation() {
    for (a=0; a<grid_size; a++) {
        const grid_row = document.createElement("div");
        grid_row.className = "grid-row";
        grid_row.style.display = "flex"

        grid_row.style.height = `${grid_container.offsetHeight / grid_size}px`;
        
        console.log(`grid row ${a}`)
        for (b=0; b<grid_size; b++) {
            const grid_block = document.createElement("div");
            grid_block.className = "grid-block";

            grid_block.style.width = `${grid_container.offsetHeight / grid_size}px`;
            grid_block.style.height = `${grid_container.offsetHeight / grid_size}}px`;
            
            grid_row.appendChild(grid_block);
            console.log(`grid block ${b}`)
        }
        grid_container.appendChild(grid_row);
    }
}

grid_generation()

const grid_block = document.querySelectorAll(".grid-block");

function grid_hover(e) {
    e.target.style.backgroundColor = "white";
};

grid_block.forEach(block => {
    block.addEventListener("mouseenter", grid_hover)
});