import React from 'react'
import { useApp } from '../context/AppContext'
import FloatingWindow from '../components/FloatingWindow'
import SkillTag from '../components/SkillTag'
import ProjectCard from '../components/ProjectCard'
import fin from '../assets/fin.png'
import sort from '../assets/sort.png'
import lm from '../assets/lm.png'
import sih from '../assets/sih.png'
import sb from '../assets/image.png'

const TOOLS = [
  'Postman', 'VS Code', 'Git','GitHub','Linux'
]

const DEV_SKILLS = [
  'JavaScript', 'HTML/CSS', 'TypeScript','TailwindCSS',
  'React', 'C++','Python', 'MongoDB', 'Nodejs','MySQL'
]

// const ANIMATION_PROJECTS = [
//   {
//     title: 'candy: a zelink fan animation',
//     description: 'A hand-drawn fan animation for Legend of Zelda. Spent months on this one — every frame drawn in Clip Studio Paint.',
//     link: 'https://youtube.com/',
//     linkLabel: 'watch on YouTube',
//     emoji: '🎬',
//   },
//   {
//     title: 'of the wild',
//     description: 'Another short animation exploring stylized rendering and motion.',
//     link: 'https://youtube.com/',
//     linkLabel: 'watch on YouTube',
//     emoji: '🌿',
//   },
// ]

const DEV_PROJECTS = [
  {
    title: 'SecondBrain',
    description: "that yt video was soo cool and informative, i should save it in my notion doc....boring, save it here..please :-)",
    githubLink: 'https://github.com/PrakharShukla-17/secondbrainC',
    liveLink: 'https://secondbrain-c-xi.vercel.app/',
    image: sb,
    emoji: '🐸'
  },
  {
    title: 'Finance Manager',
    description: "im a mess with money and wanted a way so that i can atleast have a gauge over my expenses, morover i wanted to make a react project, guess what, i combined both of them, its basic but be ready for advanced features and then ill release for all of you to use it",
    githubLink: 'https://github.com/PrakharShukla-17/Finance-Manager',
    liveLink: 'https://finance-manager-6g8l-git-main-prakhar-shuklas-projects-408af39e.vercel.app/',
    image: fin,
    emoji: '🐸'
  },
  {
    title: 'Sorting Visualizer',
    description: "what you have been sorting without visualizing, oh noo, gotta try this out atleast one time with a tame impala song in the background and as you see the blocks arrange themselves you realise maybe mess samosas arent that bad",
    githubLink: 'https://github.com/PrakharShukla-17/SortMeBabyOneMoreTime',
    liveLink: 'https://sort-me-baby-one-more-time.vercel.app/',
    image: sort,
    emoji: '⚔️',
  },
  {
    title: 'Leetmetric',
    description: "made with good old html, css and js. i made this to brush up my basic js concepts to use fetch and other stuff, Anyways, you can check your friends leetcode stats with this..heee...just get to know their username",
    githubLink: 'https://github.com/brownPenguin43/leet-metric',
    liveLink: 'https://brownpenguin43.github.io/leet-metric/',
    image: lm,
    emoji: '⚔️',
  },
  {
    title: 'SIH blog-site',
    description: "tbh this site now isnt the original one, although it was a part of my first hackathon, i made this blog site alongside my friend who made the blog site for another project, we both stayedovernight and made it, although now its been changed but still i think i should put it here",
    githubLink: 'https://github.com/PrakharShukla-17/sih-blog',
    liveLink: 'https://sih-blog.vercel.app/',
    image: sih,
    emoji: '⚔️',
  },
]

export default function WorkWindow() {
  const { darkMode } = useApp()

  const notice = darkMode
    ? 'bg-blue-900 border border-blue-700 text-blue-200'
    : 'bg-yellow-50 border border-yellow-200 text-gray-700'

  const sectionTitle = 'font-black text-xs tracking-widest uppercase mb-3 mt-5'

  return (
    <FloatingWindow id="work" title="work" defaultPos={{ x: 100, y: 80 }}>
      <div className="p-5 w-96">
        {/* Notice banner */}
        <div className={`rounded-md px-4 py-3 mb-4 text-sm ${notice}`}>
          <p>
            <strong>Accepting work offers via my{' '}
              <a href="mailto:bagelsauce242@gmail.com" className="fancy-link font-bold">work email!</a>
            </strong>
          </p>
          <p className="mt-0.5 text-xs opacity-80">
            I do dsa, cp and development, though none are that good, but i put in the effort:)
          </p>
        </div>

        {/* Tools + Dev side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className={sectionTitle}>Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              {TOOLS.map(t => <SkillTag key={t} label={t} />)}
            </div>
          </div>
          <div>
            <h3 className={sectionTitle}>Development</h3>
            <div className="flex flex-wrap gap-1.5">
              {DEV_SKILLS.map(s => <SkillTag key={s} label={s} />)}
            </div>
          </div>
        </div>

        {/* Animation Section */}
        {/* <h3 className={sectionTitle + ' mt-6'}>Animation</h3>
        {ANIMATION_PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))} */}

        {/* Development Section */}
        <h3 className={sectionTitle + ' mt-4'}>Development</h3>
        {DEV_PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}

        {/* Illustration placeholder */}
        <h3 className={sectionTitle + ' mt-4'}>Coming Soon</h3>
        <p className={`text-sm italic ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Learning new stuff and will soon add more projects, follow on github to know :)............................................
          Also, if any deployed project doesnt work, im really sorry, i know its frustrating and ill gurantee you im working my ass on it to make it work      </p>
      </div>
    </FloatingWindow>
  )
}
