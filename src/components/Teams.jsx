import Title from "./Title"

const Teams = () => {

    const teamData = [
  { name: 'Jules Egbon', title: 'CEO & founder', image: '/8.png' },
  { name: 'Chika Okeke', title: 'Ads manager', image: '/3.png' },
  { name: 'Jessica Efron', title: 'Vice president', image: '/6.png' },
  { name: 'Ashley Bennett', title: 'Marketing & sales', image: '/4.png' },
  { name: 'Favour Odunlaye', title: 'Content marketer', image: '/5.png' },
  { name: 'Rebecca Mitchell', title: 'Content writer', image: '/7.png' },
  { name: 'Megan Brooks', title: 'Performance manager', image: '/1.png' },
  { name: 'Ebuka Nwude', title: 'Senior constructor', image: '2.png' },
]
              
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
        <Title title="Meet the team" desc="A passionate team of digital experts dedicated to your brands success."/>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamData.map((team, index)=>(
                <div key={index} className="flex max-sm:flex-col items-center gap-5 px-4 rounded-xl border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
                    <img src={team.image} alt="image" className="w-12 h-12 rounded-full" />

                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{team.name}</h3>
                        <p className="text-xs opacity-60">{team.title}</p>
                      </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Teams