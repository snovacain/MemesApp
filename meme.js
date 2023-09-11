const meme = document.getElementById('meme')
const title = document.getElementById('title')
const getMemeBtn = document.getElementById('get-meme-btn')

// api url
let url = "https://meme-api.com/gimme/";

// Array of subreddits 

let subreddits = ["crypto", "wholesome", "bitcoin", "ethereum", "kaspa", "flux", "zelcore", "wholesomemes", "dogmemes", "me_irl"]

// function to get random meme

let getMeme = () => {
    // find random subreddit from array

    let randomSubreddit = subreddits[Math.floor(Math.random() * 10 )]

    console.log(randomSubreddit)
}

getMeme()


window.addEventListener('load', getMeme)
getMemeBtn.addEventListener('click', getMeme)






