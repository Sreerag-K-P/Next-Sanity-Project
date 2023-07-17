import { getCareers } from '@/sanity/sanity-utils'
import Link from 'next/link'

export default async function JoinOurTeam() {
  const careers = await getCareers()
  return (
    <div className="bg-secondary">
      <div className=" max-w-screen-xl px-12 mx-auto py-12">
        <ol className="list-decimal">
          {careers.map((career) => (
            <li key={career._id} className="mb-4 pb-3 ps-3">
              <Link href={`/join-our-team/${career.slug}`}>
                <h1 className="text-2xl text-black uppercase tracking-widest font-medium hover:text-primary">
                  {career.title}
                </h1>
              </Link>
              <p className="text-base mt-2">Location: {career.location}</p>
              <p className="text-base mt-2">Department: {career.department}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
