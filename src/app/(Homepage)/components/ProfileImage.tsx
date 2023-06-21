import Image from "next/image"

const ProfileImage = () => {
  return (
    <div className="w-full lg:w-2/5">
		<Image width={359} height={538} alt="ProfileImage" src="/images/profile.jpeg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block object-cover h-[538px]" />
	</div>
  )
}

export default ProfileImage