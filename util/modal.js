function openModal(id) {
  var modal = document.getElementById("modal");
  modal.classList.toggle("invisible");
  if (!id) {
    return;
  }
  document.getElementById("modal-header").innerHTML = car[id].model;
  document.getElementById("modal-description").innerHTML = car[id].description;
}

const car = [
  {
    model: "A3",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "A4",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "A6",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Q3",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Q7",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Q8",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X1",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X2",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X3",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X4",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X5",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "X6",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Golf",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Jetta",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Passat",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Polo",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Tiguan",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "Arteon",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "A-Class",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "C-Class",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "G-Class",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "S-Class",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "GLC",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
  {
    model: "GLS",
    description:
      "Price: $800,000\n\nTop speed: 180km/hr\n\nAcceleration: 8.7s\n\nFuel consumption: 4.7 l/100km",
  },
];
