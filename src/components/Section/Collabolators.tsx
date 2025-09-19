const teamMembers = [
  {
    name: 'Ilham Hafidz',
    handle: '@ilhamhafidz',
    url: '',
    avatar: './img/Alope.png',
  },
  {
    name: 'Ramadham Fatra',
    handle: '@fetra',
    url: '',
    avatar: './img/Alope.png',
  },
  {
    name: 'Ajka',
    handle: '@jka',
    url: '',
    avatar: './img/Alope.png',
  },
  {
    name: 'Firdan Fauzan',
    handle: '@danzzz',
    url: '',
    avatar: './img/Alope.png',
  },
]

const ProjectTeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl text-center">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-12">
          A Collaborators
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 border dark:border-gray-700"
              />
              <div className="text-base font-medium text-gray-800 dark:text-white">{member.name}</div>
              <a
                href={member.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {member.handle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectTeamSection
