const freelancers = [
    { name: "Alice", price: 30, occupation: "writer"},
    { name: "Bob", price: 50, occupation: "teacher"},
    { name: "Carol", price: 70, occupation: "programmer"},
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];


setInterval(randomSet, 30000)

render()

function render() {
    const list = document.querySelector('#lists');
    const listElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
      return element;
    });
    list.replaceChildern(...listElements)
}


    function getAverage(price) {
        let num = 0;
        for (i = 0; i < price.length; i++) {
          num += (price[i] / price.length);
        }
        return num  
      }
    console.log(getAverage);

    function randomSet() {
        const selectedFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)]
        console.log(selectedFreelancer)
    
        freelancers.push({freelancers: selectedFreelancer})
    
        render()
    }

