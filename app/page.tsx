import { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: 'Next Js'
}
export default function Page() {
  // return <h1>Hello World</h1>
  return <Link href="/dashboard">Dashboard</Link>
}