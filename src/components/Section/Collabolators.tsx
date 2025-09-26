import { useState, useEffect } from "react"

interface TeamMember {
  name: string
  handle: string
  username: string
  avatar?: string
  url?: string
}

const teamMembers: TeamMember[] = [
  { name: "Ilham Hafidz", handle: "ilhamhafidz404", username: "ilhamhafidz404" },
  { name: "Ramadham Fatra", handle: "MrFatra", username: "MrFatra" },
  { name: "Ajka", handle: "AkaSengko24", username: "AkaSengko24" },
  { name: "Firdan Fauzan", handle: "firdanaja", username: "firdanaja" },
]

const ProjectTeamSection = () => {
  const [members, setMembers] = useState<TeamMember[]>(teamMembers)

  useEffect(() => {
    async function fetchAvatars() {
      const updated = await Promise.all(
        teamMembers.map(async (member) => {
          try {
            const res = await fetch(`https://api.github.com/users/${member.username}`)
            if (!res.ok) throw new Error("User not found")
            const data = await res.json()
            return {
              ...member,
              avatar: data.avatar_url,
              url: data.html_url,
            } as TeamMember
          } catch (error) {
            console.error(`Failed to fetch ${member.username}`, error)
            return {
              ...member,
              avatar: "/",
              url: "#",
            } as TeamMember
          }
        })
      )
      setMembers(updated)
    }
    fetchAvatars()
  }, [])

  return (
    <section className="container mx-auto py-16 px-6 md:px-20">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-12">
          A Collaborators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 "
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border dark:border-gray-700"
              />
              <div className="flex flex-col items-start text-left">
                <div className="text-base font-medium text-gray-800 dark:text-white">
                  {member.name}
                </div>
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#80C41C] dark:text-[#80C41C] hover:text-[#80C41C]/70"
                >
                  {member.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectTeamSection
