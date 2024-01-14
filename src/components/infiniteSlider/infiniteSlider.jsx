import React from 'react'
import Image from 'next/image'
import './infiniteSlider.css'

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

const InfiniteSlider = () => {
    return (
        <div>
            <div className='flex justify-around items-center'>
            {/* <Image src="https://githubunwrapped.com/walking-octocat.gif" 
            width={240} height={240} alt="walking-octocat"
            /> */}
            <h1 className='pb-3 text-center text-4xl items-center justify-center text-light-blackcustom dark:text-light-whitecustom mb-6 section-title mt-20 md:mt-0'>MY SKILLS</h1>
            </div>
            <div className='logos relative z-30'>
                <div className='logos-slide'>
                {
                    skills.map((skill) => 
                    <Image 
                    key={skill.id} 
                    name={skill.name} 
                    src={skill.imageUrl} 
                    width={100} height={100}
                    className='imglogo'/>)
                }
                {
                    skills.map((skill) => 
                    <Image 
                    key={skill.id} 
                    name={skill.name} 
                    src={skill.imageUrl} 
                    width={100} height={100}
                    className='imglogo'/>)
                }
                </div>
            </div>
        </div>
    )
}

export default InfiniteSlider