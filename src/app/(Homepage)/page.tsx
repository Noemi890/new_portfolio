import Card from "./components/Card"
import ProfileImage from "./components/ProfileImage"

export default function Home() {

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto">
      <Card/>
      <ProfileImage />
    </div>
  )
}
