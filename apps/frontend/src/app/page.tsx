import { redirect } from 'next/navigation'

/**
 * Development frontend branch.
 * @version 0.0.1
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  redirect('/login')
  return (
    <main>
      <span>Home</span>
    </main>
  )
}
