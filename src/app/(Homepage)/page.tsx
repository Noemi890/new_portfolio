import Card from "./components/Card";
import ProfileImage from "./components/ProfileImage";

export default function Home() {
  return (
    <div className="max-w-4xl flex items-center h-auto lg:min-h-screen flex-wrap mx-auto fadeIn">
      <Card />
      <ProfileImage />
    </div>
  );
}
