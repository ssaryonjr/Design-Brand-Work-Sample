# Digital Work Sample - Designer Brands
Brief documentation on my thought process and steps I took to get to my solution.

## How It's made: 
<p align="left">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height=25>
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height=25>
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" height=25>
</p>

<b>Technologies & Tools Utilized:</b> TypeScript, Node, and Jest.</b> This application simply takes in a second argument passed in `data.txt file` and parses it returning a summary of each product on clearance, in cart and at normal price.

- I spent a brief amount of time figuring out how to pass a second argument in node.
- I abstracted a lot of the functionality into helper functions to make the codebase more organized.
- I used `Jest` to create unit test after each function.

## Lessons Learned
- In this lesson I learned about using `process.arg` for passing things into the command line, I got some practice on string manipulation and organizing returned data for a specific output.
- My thought process going into this was to make sure my return value was consistent with what was being asked of me. There was a bit of ambiguity with not knowing if `product in cart` would need to show a price range when it's not zero. I decided to also create helper functions for better organization in a different file that I would export and this also made it easier for debugging as well.

## Installation: 
1. Clone repository
2. `npm install`
3. `npm run start data.txt` will run the program.



## Future Optimizations:
- Because I was on a time crunch (due to other responsibilities and things) I didn't have much time to refactor the way I wanted or add the necessary optimizations I wanted. 
- I would go back and add more comments, try to find better ways to optimize the code for readability.
- Add comments to Jest test file.
- Add in additional checkers for if the product in cart is not 0 to show the price range.

<h2 align="center">
More Projects
</h2>
<table bordercolor="#66b2b2">
  <tr>
    <td width="33.3%"  style="align:center;" valign="top">
<a target="_blank" href="https://github.com/ssaryonjr/Chit-chat" align="center">Chitchat - Messaging App</a>
        <br />
      <a target="_blank" href="https://github.com/ssaryonjr/Chit-chat">
            <img src="https://github.com/ssaryonjr/ssaryonjr/raw/main/chitchat.gif?raw=true" width="100%" height="210px" />
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/ssaryonjr/iMovie-Reviews"> iMovie Reviews</a>
      <br />
        <a target="_blank" href="https://github.com/ssaryonjr/iMovie-Reviews">
          <img src="https://github.com/ssaryonjr/ssaryonjr/raw/main/imovie.gif?raw=true" width="100%" height="210px" />
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/ssaryonjr/T-K-Restaurant-">T&K Nigerian Restaurant</a>
        <br />
        <a target="_blank" href="https://github.com/ssaryonjr/T-K-Restaurant-">
          <img src="https://github.com/ssaryonjr/ssaryonjr/raw/main/ezgif.com-gif-maker%20(5).gif?raw=true" width="100%" height="210px" alt="Portfolio"/>
        </a>
    </td>
  </tr>
</table>
