# Sorting Visualizer

At first, Welcome to my Github account.
in this repository i have implement visualizer of some algorithms like bubble, selection and insertion.

I made this website to share my skills and information with others.

I have used HTML5, CSS3 and JavaScript for creating this visualizer.

To see my work you can click on this [URL](https://ahmedsaleh10.github.io/Sorting-visualization/)

## Usage
Go to URL i have mentioned it before an try it on laptop.
after open the web page enter the size of array yo want on input field, after that click on Randomize button, the array will generate. Now, you can click on any algorithm you need to see the visualization of it.

I hope you will enjoy when you see my work and try the visualization.

As you can see in this code. the Randomize button onclick will run this.

```python
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
```
using document in JS is make it use to generate an array using .createElement and .append and also as you see.


Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change 

Thank you for reading :smile:.

