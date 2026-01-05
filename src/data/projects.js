import project1Thumbnail from "../assets/java_swing_game_engine_thumbnail.png";
import project1Image from "../assets/java_swing_game_engine.png";

import project2Thumbnail from "../assets/raylib_game_engine_thumbnail.png";
import project2Image from "../assets/raylib_game_engine.png";

import project3Thumbnail from "../assets/java_tileMaker_proj.png";
import project3Image from '../assets/tilemaker_image.png';

const projects = [
  {
    id: 1,
    title: "Java Swing Game Engine",
    thumbnail: project1Thumbnail,
    image: project1Image, 
    description: `2D game engine made in Java swing framework. This personal project was 
                  inspired by YouTuber RyiSnow. This is where I learned advance Java and 
                  also Swing framework.`
  },
  {
    id: 2,
    title: "Raylib Game Engine",
    thumbnail: project2Thumbnail,
    image: project2Image,
    description: `2D game engine made in Raylib library using C++ This engine includes 
                  Entity system, physics based collision, tile system and other features.`,
  },

  {
    id: 3,
    title: "Java Swing Tilemaker",
    description: `A side project built with Java Swing for designing tiles and exporting them to text files. 
                  Useful for prototyping and game development workflows.`,
    thumbnail: project3Thumbnail,
    image: project3Image
  },
];

export default projects;
