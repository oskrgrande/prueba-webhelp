import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <section class="py-24 flex items-center min-h-screen justify-center bg-white">
  <div class="mx-auto max-w-[43rem]">
    <div class="text-center">
      <p class="text-lg font-medium leading-8 text-indigo-600/95">Introducing Design Data Platform</p>
      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Distribute your brand from&nbsp;design to code</h1>
      <p class="mt-3 text-lg leading-relaxed text-slate-400">Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.</p>
    </div>

    <div class="mt-6 flex items-center justify-center gap-4">
      <a href="#" class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</a>
      <a href="#" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default App
