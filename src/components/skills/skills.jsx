"use client"

import React from "react"
import Image from "next/image"
import { useAppContext } from '@/context/context';

const skills = [
    {
      id: 1,
      name: "CSS",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957041/Logos%20Portfolio/eqbukcsp7tnzpgg6byxq.svg",
    },
    {
      id: 2,
      name: "Express",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957041/Logos%20Portfolio/hfrkihgour9mngycmlpd.svg",
    },
    {
      id: 3,
      name: "Apollo GraphQL",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957040/Logos%20Portfolio/nog1ivotwinjb6tjjfnk.svg",
    },
    {
      id: 4,
      name: "Vercel",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957040/Logos%20Portfolio/kb8eivqfx2tgn1o0nhum.svg",
    },
    {
      id: 5,
      name: "Typescript",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957039/Logos%20Portfolio/omy0fxqxnobhwpps3et3.svg",
    },
    {
      id: 6,
      name: "Sequelize",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957038/Logos%20Portfolio/gksrtqggc7l9kboy7ngk.svg",
    },
    {
      id: 7,
      name: "React",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957037/Logos%20Portfolio/f4qpucqpbb5msd11y3ku.svg",
    },
    {
      id: 8,
      name: "Redux",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957037/Logos%20Portfolio/sdtgbcdzk9krqy1cfmpd.svg",
    },
    {
      id: 9,
      name: "Photoshop",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957036/Logos%20Portfolio/xsh9tdqclmef0n9qsdh4.svg",
    },
    {
      id: 10,
      name: "PostgreSQL",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957036/Logos%20Portfolio/nmt5qvhiiptafzqwofzr.svg",
    },
    {
      id: 11,
      name: "Firebase",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/vtkomsymjcnincfemxwo.svg",
    },
    {
      id: 12,
      name: "Javascript",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/n16frzirhontys1dbmvt.svg",
    },
    {
      id: 13,
      name: "Next.Js",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/wt1ollszlvj1tdft4vfe.svg",
    },
    {
      id: 14,
      name: "HTML",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/wff5f3ftrm5o2fbt2o34.svg",
    },
    {
      id: 15,
      name: "Node.js",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/rcembmg5n01u3yiyerky.svg",
    },
    {
      id: 16,
      name: "Git",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696957034/Logos%20Portfolio/z21uastfnycomsy10eqw.svg",
    },
    {
      id: 16,
      name: "Tailwind CSS",
      imageUrl: "https://res.cloudinary.com/dqcn7idzj/image/upload/v1696958328/Logos%20Portfolio/tailwind-css-2_lwtns8.svg",
    },
  ];
  

const Skills = () => {
  const { handleCloseSkills } = useAppContext();
  return (
    <div className="mt-6 bg-light-blackcustom dark:bg-dark-400 shadow-light-blackcustom shadow-xl">
  <div className="flex justify-end items-end bg-gray-900 rounded-t-sm">
    <button
      className="flex justify-center items-center hover:bg-red-600 w-7 h-6 text-white hover:rounded-t-sm"
      onClick={handleCloseSkills}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </button>
  </div>
  <div className="border-t-[3px] border-light-redbold">
    <h1 className="flex text-center text-4xl items-center justify-center text-white pt-4">
      Skills
    </h1>
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
      {skills.map((element) => (
        <div
          key={element.id}
          className="w-full md:w-28 h-32 flex justify-around flex-col p-4 shadow-light-blackcustom bg-gradient-to-b from-gray-500 via-gray-100 to-gray-500 shadow-2xl rounded-lg relative hover:transform hover:-translate-y-2 transition-transform duration-300"
        >
          <Image
            className="flex items-center justify-center"
            src={element.imageUrl}
            alt={element.name}
            width={56}
            height={56}
          />
          <span className="mt-2 text-custom text-shadow-custom font-bold">
            {element.name}
          </span>
          <div className="absolute inset-0 bg-purple-500 opacity-0 rounded-lg hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Skills