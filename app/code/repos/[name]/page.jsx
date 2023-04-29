import Link from "next/link"
import Repo from "../../../components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import { Suspense } from "react"

const Page = ({params: {name}}) => {
  return (
    <>
            <Suspense fallback = {<div>Loading repo ...</div>}>
            <Repo name = {name} />
            </Suspense>
            <Suspense fallback = {<div>Loading directories ...</div>}>
            <RepoDirs name = {name} />
            </Suspense>

            <div className="card">
                <Link href={'/code/repos'}>Back to repos</Link>
            </div>
    </>
  )
}

export default Page