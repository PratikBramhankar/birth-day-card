import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
      name: "Shahrukh Khan",
      age: 57,
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Akshay_Kumar.jpg/440px-Akshay_Kumar.jpg",
      name: "Akshay Kumar",
      age: 56,
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg/440px-Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg",
      name: "Alia Bhatt",
      age: 30,
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg/440px-Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg",
      name: "Shraddha Kapoor",
      age: 34,
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Guru_Randhawa_at_the_launch_of_MTV_Unplugged_Season_8_%28cropped%29.jpg",
      name: "Guru Randhawa",
      age: 32,
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/440px-Justin_Bieber_in_2015.jpg",
      name: "Justin Bieber",
      age: 29,
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kriti_Sanon_at_Adipurush_pre_release_event_%282%29_%28cropped%29.jpg/440px-Kriti_Sanon_at_Adipurush_pre_release_event_%282%29_%28cropped%29.jpg",
      name: "Kriti Sanon",
      age: 33,
    },
  ]);

  const handleClick = () => {
    setData([]);
  };

  return (
    <div className="profile">
      <section className="card">
        <h3>Today Birthday<span style={{color:'gray'}}> {data.length} </span>😃</h3>
        {data.map((e) => {
          return (
            <div className="cont" key={e.id}>
              <div className="sub-cont">
                <img src={e.img} alt=""></img>
                <div className="sub-cont2">
                  <ruby>
                    {e.age}
                    <rt>{e.name}</rt>
                  </ruby>
                </div>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear</button>
      </section>
    </div>
  );
}
