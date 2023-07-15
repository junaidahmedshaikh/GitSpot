const apiURL = "https://api.github.com/users/";

const getUserDetails = async (username) => {
  const response = await fetch(apiURL + username);
  const convertedData = await response.json();

  const card = `
    
      <div class="userCard">
        <div class="leftCardSection">
          <img src="${convertedData.avatar_url}" alt="" />
        </div>
        <div class="rightCardSection">
          <!-- User Name  -->
          <h1 class="userName">${convertedData.name}</h1>
          <!-- User Profile Bio -->
          <div class="userBio">
          ${convertedData.bio}
          </div>
        <!-- User Followers and Following -->
          
          <!-- User Reopsitory -->
          <div class="userRepo">
              <span> Public Repo: ${convertedData.public_repos} </span>
           
              <span>
              Followers: ${convertedData.followers}
          </span>
          <span>
              Following: ${convertedData.following}
          </span>
          <a class="viewProfileBtn" href="${convertedData.html_url}" target="_blank" type="button"> View Profile</a>
          </div>

          <div class="userProfile">
           
          </div>
        </div>
      </div>
    `;
  // console.log(convertedData);
  const displayOutput = document.querySelector(".displayOutput");
  displayOutput.innerHTML = card;
};




// console.log(userInp);

const getUserInput = (username) => {
  const userInp = document.querySelector(".userInput").value;
  if(userInp != null){
    getUserDetails(userInp);
    return false;
  }
}