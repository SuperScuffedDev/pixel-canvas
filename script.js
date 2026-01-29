const grid_container = document.querySelector("#grid-container");
const grid_size_input = document.querySelector("#input")
const color_picker = document.querySelector("#color");
const set_grid = document.querySelector("#set-size")
const rainbow_mode = document.querySelector("#rainbow-mode")


let grid_size = 50
let grid_block = undefined;
let is_mousedown = false


function rainbow_mode_random(e) {
    const random_r = Math.floor(Math.random() * 256);
    const random_g = Math.floor(Math.random() * 256);
    const random_b = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${random_r}, ${random_g}, ${random_b})`;  
};

function grid_hover(e) {
    if (e.type == "click") {
        if (rainbow_mode.checked) {
            rainbow_mode_random(e);
        } else {
            e.target.style.backgroundColor = color_picker.value;  
        };
    } else {
        if (is_mousedown) {
            if (rainbow_mode.checked) {
                rainbow_mode_random(e);
            } else {
                e.target.style.backgroundColor = color_picker.value;  
            };
        }
    };
};

function grid_generation() {
    grid_container.innerHTML = "";
    
    for (a=0; a<grid_size; a++) {
        const grid_row = document.createElement("div");
        grid_row.className = "grid-row";
        grid_row.style.display = "flex"

        grid_row.style.height = `${grid_container.offsetHeight / grid_size}px`;
        for (b=0; b<grid_size; b++) {
            const grid_block = document.createElement("div");
            grid_block.className = "grid-block";
            grid_block.backgroundColor = "#000000";

            grid_block.style.width = `${grid_container.offsetHeight / grid_size}px`;
            grid_block.style.height = `${grid_container.offsetHeight / grid_size}}px`;

            grid_row.appendChild(grid_block);
        }
        grid_container.appendChild(grid_row);
    }
    grid_block = document.querySelectorAll(".grid-block");
    

    grid_block.forEach(block => {
        block.addEventListener("mouseenter", grid_hover)
        block.addEventListener("click", grid_hover)
    });
}


grid_generation()


set_grid.addEventListener("click", function() {
    if (Number.isInteger(grid_size_input.valueAsNumber)) {
        grid_size = grid_size_input.valueAsNumber;
    } else {
        grid_size = 50;
    };
    grid_generation();
});

document.addEventListener("mousedown", function(e) {
    is_mousedown = true;
});


document.addEventListener("mouseup", function(e) {
    is_mousedown = false;
});

document.addEventListener("dragstart", (e) => {
    e.preventDefault();
});