import Image from 'next/image'
import Hero from './homepage/Hero'
import Ourgoals from './homepage/Ourgoals'
import Ourpedigree from './homepage/Ourpedigree'
import Ourteam from './homepage/Ourteam'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Ourgoals/>
      <Ourteam />
      <Ourpedigree />
    
    </main>
  )
}
