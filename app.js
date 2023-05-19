function run() {
  let cardOne, cardTwo;
  let flip1, flip2, flipOff1, flipOff2;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  let numcheck = 0;
  function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
      const indexRandom = Math.floor(Math.random() * 15);
      let temp = arr[i];

      arr[i] = arr[indexRandom];
      arr[indexRandom] = temp;
    }
    return arr;
  }

  const shuffleEl = document.getElementById("shuffle");
  shuffleEl.innerHTML = "";

  const numShuffle = shuffle(arr);

  numShuffle.forEach((num) => {
    shuffleEl.innerHTML += `
    <div class="card">
    <img class="back-view" src="./img/img-${num}.png" alt="">
    <img class="front-view" src="./img/qs.png" alt="" srcset="">
     </div>
`;
  });

  const cards = [...document.getElementsByClassName("card")];

  function flip(e) {
    let views = [...e.target.children];
    if (views[0].classList.contains("flip")) {
      return;
    }
    views[0].classList.add("flip");
    views[1].classList.add("flipOff");
    if (!cardOne) {
      flip1 = views[0];
      flipOff1 = views[1];
      return (cardOne = views[0].src);
    } else {
      flip2 = views[0];
      flipOff2 = views[1];
      cardTwo = views[0].src;
    }

    if (cardOne == cardTwo) {
      numcheck++;
      flip1 = undefined;
      flip2 = undefined;
      flipOff1 = undefined;
      flipOff2 = undefined;
      cardOne = undefined;
      cardTwo = undefined;
      if (numcheck === 8) {
        run();
      }
    } else if (cardOne && cardTwo) {
      flip1.classList.add("shake");
      flip2.classList.add("shake");

      setTimeout(function () {
        flip1.classList.remove("flip");
        flip2.classList.remove("flip");

        flipOff1.classList.remove("flipOff");
        flipOff2.classList.remove("flipOff");
        flip1 = undefined;
        flip2 = undefined;
        flipOff1 = undefined;
        flipOff2 = undefined;
        cardOne = undefined;
        cardTwo = undefined;
      }, 400);
    }
  }
  cards.forEach((card) => {
    card.addEventListener("click", flip);
  });
}

run();
