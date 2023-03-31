var container = document.getElementById("array");
let random = true;

function size() {
  let size = document.getElementById("size").value;
  return size;
}

// Function to generate the array of blocks
function generateArray() {
  if (random) {
    for (var i = 0; i < size(); i++) {
      // Return a value from 1 to 100 (both inclusive)
      var value = Math.ceil(Math.random() * 100);

      // Creating element div
      var array_ele = document.createElement("div");

      // Adding class 'block' to div
      array_ele.classList.add("block");

      // Adding style to div
      array_ele.style.height = `${value * 3}px`;
      array_ele.style.transform = `translate(${i * 30}px)`;

      // Creating label element for displaying
      // size of particular block
      var array_ele_label = document.createElement("label");
      array_ele_label.classList.add("block_id");
      array_ele_label.innerText = value;

      // Appending created elements to index.html
      array_ele.appendChild(array_ele_label);
      container.appendChild(array_ele);
      random = false;
    }
  }
}

// Promise to swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 300) {
  var blocks = document.querySelectorAll(".block");

  // BubbleSort Algorithm
  for (var i = 0; i < blocks.length - 1; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      console.log("run");
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      // To compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }

    //changing the color of greatest element
    //found in the above traversal
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
  blocks[0].style.backgroundColor = "#13CE66";
}

async function SelectionSort(delay = 300) {
  let blocks = document.querySelectorAll(".block");
  var minIndex = 0;
  for (let i = 0; i < blocks.length; i++) {
    minIndex = i; //0
    blocks[i].style.backgroundColor = "#FF4949";

    for (let j = 1 + i; j < blocks.length; j++) {
      blocks[j].style.backgroundColor = "#FF4949";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var value1 = Number(blocks[j].childNodes[0].innerHTML); //1
      var value2 = Number(blocks[minIndex].childNodes[0].innerHTML); //0

      if (value2 > value1) {
        if (minIndex !== 0) {
          blocks[minIndex].style.backgroundColor = "#6b5b95";
        }

        minIndex = j;
      } else {
        blocks[j].style.backgroundColor = "#6b5b95";
      }
    }

    let temp1 = blocks[minIndex].style.height;
    let temp2 = blocks[minIndex].childNodes[0].innerText;
    blocks[minIndex].style.height = blocks[i].style.height;
    blocks[i].style.height = temp1;
    blocks[minIndex].childNodes[0].innerText =
      blocks[i].childNodes[0].innerText;
    blocks[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    blocks[minIndex].style.backgroundColor = "  #13CE66";

    blocks[i].style.backgroundColor = " #13CE66";
  }
}

async function InsertionSort(delay = 300) {
  let blocks = document.querySelectorAll(".block");

  blocks[0].style.backgroundColor = "#FF4949";
  // blocks[1].style.backgroundColor="darkblue"

  for (let i = 1; i < blocks.length; i++) {
    let j = i - 1;
    let current = Number(blocks[i]. childNodes[0].innerHTML);

    let height = blocks[i].style.height;

    blocks[i].style.backgroundColor = "#FF4949";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > current) {
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;

      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      for (let k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = "#13CE66";
      }
    }
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = current;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = " #13CE66";
  }
}
