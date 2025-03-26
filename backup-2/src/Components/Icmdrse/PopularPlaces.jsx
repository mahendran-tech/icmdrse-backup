import React from "react";

const PopularPlaces = () => {
  const places = [
    {
      title: "Menara KL Tower",
      description:(<> Get ready to be amazed by <b>  Menara KL Tower! </b> Standing tall at 421 meters, it rivals the iconic Petronas Towers. But here's the twist – it offers even more breathtaking views from a height of 276 meters, outshining the Petronas SkyBridge Viewpoint. This towering beauty is an absolute must-see, offering panoramic views that will leave you in awe of Kuala Lumpur's skyline!" </>),
      imgSrc: "assets/img/venue-1.png", 
      imgFirst: true
    },
    {
      title: "Batu Caves",
      description:(<>Embark on a captivating journey up <b>  272 steps</b> to discover the ancient <b>  Batu Caves,</b> a must-visit shrine in Kuala Lumpur. This awe-inspiring destination blends religious and cultural significance, featuring three massive caves and several smaller ones, each home to sacred idols and statues. It’s a place where history, spirituality, and breathtaking views come together to create an unforgettable experience!
      </>),
      imgSrc: "assets/img/venue-2.png",
      imgFirst: false
    },
    {
      title: "Aquaria KLCC",
      description:(<>Dive into the incredible world of <b>  Aquaria KLCC,</b> a state-of-the-art oceanarium that brings you up close with over 5,000 aquatic and land organisms in a sprawling 60,000-square-foot space. Experience the mesmerizing Living Ocean exhibit as you walk through a 90-meter glass tunnel, where you'll encounter majestic Sand Tiger sharks, Giant Stingrays, Marine turtles, and a vibrant array of fish species. It’s an immersive adventure beneath the waves like no other!</>),
      imgSrc: "assets/img/venue-3.png",
      imgFirst: true
    },
    {
      title: "Illusion 3D Art Museum",
      description:(<>Step into a world of magic and creativity at the Illusion 3D Art Museum in Kuala Lumpur! Prepare to lose yourself in the captivating world of augmented reality as you explore 38 hand-painted artworks that bring to life everything from zombies and celebrities to thrilling adventures. It’s a one-of-a-kind attraction where art and imagination collide!</>),
      imgSrc: "assets/img/venue-4.png",
      imgFirst: false
    },
    {
      title: "City Centre (KLCC)",
      description:(<>Welcome to the <b> City Centre (KLCC),</b>  the vibrant heart of Kuala Lumpur! This dynamic hub is a "city within a city," offering a blend of entertainment, activities, dining options, and a deep dive into rich Malay culture. As home to some of Kuala Lumpur's most iconic tourist attractions, the KLCC is the perfect place to immerse yourself in the city’s energy and charm.</>),
      imgSrc: "assets/img/venue-5.png",
      imgFirst: true
    },
    {
      title: "Ramly Burger",
      description:(<> <b>  Ramly Burger</b> is a beloved street food sensation across Malaysia, especially in Kuala Lumpur! These mouthwatering roadside burgers are made with tender chicken or beef patties, often wrapped in a crispy egg for that extra "special" touch. It’s a delicious, must-try snack that locals and visitors alike can't get enough of!</>),
      imgSrc: "assets/img/venue-6.png",
      imgFirst: false
    },
    {
      title: "Dataran Merdeka",
      description:(<> <b>  Dataran Merdeka,</b> also known as Independence Square, is a significant historical landmark in Kuala Lumpur, located right in front of the iconic Sultan Abdul Samad Building. This expansive field, adorned with beautiful meadows, proudly displays the Malaysian flag. Steeped in history, it’s a must-visit spot to experience the nation’s heritage and spirit of independence.</>),
      imgSrc: "assets/img/venue-7.png",
      imgFirst: true
    },
    {
      title: "Suria KLCC",
      description:(<> <b> Suria KLCC,</b> situated at the base of the iconic Petronas Towers, is a luxurious 6-story shopping mall offering a mix of high-end boutiques like Chanel, Emporio Armani, and Fendi. But it’s not just for shopping! Inside, you'll find exciting attractions like Petrosains, a science discovery center for kids, and Aquaria KLCC, an oceanarium showcasing the wonders of the sea. It’s a perfect blend of luxury, entertainment, and family fun!</>),
      imgSrc: "assets/img/venue-8.png",
      imgFirst: false
    },
    {
      title: "Thean Hou Temple",
      description:(<><b> Thean Hou Temple</b> is one of Southeast Asia's most remarkable temples, an ancient six-tiered Buddhist sanctuary dedicated to the Goddess of Heaven. Revered as both a religious and tourist landmark, this stunning temple offers a serene and spiritual escape, making it a must-visit destination in Kuala Lumpur.</>),
      imgSrc: "assets/img/venue-9.png",
      imgFirst: true
    },
    {
      title: "National Monument",
      description:
        "The National Monument is a powerful tribute to those who sacrificed their lives in World War I. Standing at 15 meters high, this striking bronze statue features seven soldiers, each symbolizing key virtues: strength, sacrifice, suffering, courage, leadership, vigilance, and unity. It’s an important historical landmark, offering a profound reflection on bravery and resilience.",
      imgSrc: "./assets/img/venue-10.png",
      imgFirst: false
    }
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h4>
          Popular <span className="text-primary">
            Places in Kuala Lumpur,
          </span>{" "}
          Malaysia
        </h4>
      </div>
      {places.map((place, index) =>
        <div key={index} className="row align-items-center py-3 border-bottom">
          {place.imgFirst &&
            <div className="col-lg-3 mb-3 mb-lg-0">
              <img
                src={place.imgSrc}
                alt={place.title}
                className="img-fluid rounded shadow-sm"
              />
            </div>}
          <div className="col-lg-9">
            <h5 className="fw-bold">
              {place.title}
            </h5>
            <p>
           
              {place.description}
            </p>
          </div>
          {!place.imgFirst &&
            <div className="col-lg-3 mb-3 mb-lg-0">
              <img
                src={place.imgSrc}
                alt={place.title}
                className="img-fluid rounded shadow-sm"
              />
            </div>}
        </div>
      )}
    </div>
  );
};

export default PopularPlaces;
