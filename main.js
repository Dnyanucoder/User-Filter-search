const users = [
  {
    name: "Lokesh kumar",
    pic: "https://i.pinimg.com/1200x/23/c7/e8/23c7e87403751c4c4fac5d1733fbcce9.jpg",
    bio: "silent chaos in a loud world | not for everyone"
  },
  {
    name: "Prajwal Pandilwar",
    pic: "https://preview.redd.it/ive-created-a-few-sketches-of-my-favorite-anime-characters-v0-gc4zqkjlwhke1.jpg?width=640&crop=smart&auto=webp&s=00e56e3f71c90037a1ea2306d30982e1de2c8613",
    bio: "main character energy | coffee > everything"
  },
  {
    name: "Dnyanush Patil",
    pic: "https://easydrawingguides.com/wp-content/uploads/2019/03/how-to-draw-katsuki-bakugou-from-my-hero-academia-featured-image-1200-735x1026.png",
    bio: "walking through dreams | late night thinker"
  },
  {
    name: "Piyush kumar",
    pic: "https://img.wattpad.com/f4c346d956208d0eeb46733a70e7287870703804/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f734b44537a55714b7337717754673d3d2d39382e313665343234373430633365313135323136313337373739333532392e6a7067?s=fit&w=720&h=720",
    bio: "dream big | stay different"
  }
];

const cardContainer = document.getElementById("cardContainer");

function showUsers(arr) {

    cardContainer.innerHTML = ""; 
    
    if (arr.length === 0) {
        cardContainer.innerHTML = "<h2 class='no-user'>No User Found</h2>";
        return;
    } //Clear old cards

    arr.forEach(function (user) {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.pic;   // FIXED
        img.className = "bg-img";
        img.alt = user.name;

        const blurLayer = document.createElement("div");
        blurLayer.className = "blurred-layer";
        blurLayer.style.backgroundImage = `url(${user.pic})`;  // FIXED

        const content = document.createElement("div");
        content.className = "content";

        const heading = document.createElement("h3");
        heading.textContent = user.name;   // FIXED

        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(paragraph);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        cardContainer.appendChild(card);   // FIXED
    });
}

showUsers(users);


const searchInput = document.querySelector(".search-box");

searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();

    const filtered = users.filter(function (user) {
        return user.name.toLowerCase().includes(value);
    });

    showUsers(filtered);
});