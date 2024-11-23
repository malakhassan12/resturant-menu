
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>. */










const options = document.querySelectorAll(".option");
const circleSvg = document.querySelector("#circlesvg");

// Total number of options
const totalOptions = options.length;

// Angle between each option
const anglePerOption = 360 / totalOptions;

// Current rotation angle
let currentRotation = 0;

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        // Calculate target rotation angle
        const targetRotation = index * anglePerOption;

        // Compute shortest rotation direction
        let rotationDifference = targetRotation - (currentRotation % 360);
        if (rotationDifference > 180) rotationDifference -= 360;
        if (rotationDifference < -180) rotationDifference += 360;

        // Update rotation
        currentRotation += rotationDifference;
        circleSvg.style.transform = `rotate(${-currentRotation}deg)`;

        // Update active class
        options.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});
