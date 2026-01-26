const grid_container = document.querySelector("#grid-container");

for (i=0; i<256; i++) {
    const grid_block = document.createElement("div");
    grid_block.className = "grid-block";

    grid_block.style.minWidth = `${grid_container.offsetWidth / 16 - 2}px`
    grid_block.style.minHeight = `${grid_container.offsetHeight / 16 - 2}px`
    grid_container.appendChild(grid_block);
};

const grid_block = document.querySelectorAll(".grid-block");

function grid_hover(e) {
    e.target.style.backgroundColor = "black";
};
