import { motion } from 'framer-motion';
import { Trophy, Rocket, Users, DollarSign } from 'lucide-react';

export default function GrantProgramsPage() {
  const programs = [
    {
      icon: Rocket,
      name: 'Builder Grants',
      amount: 'Up to $50K',
      description: 'Funding for developers building innovative applications on Reverie Network',
      color: 'from-blue-500 to-cyan-500',
      requirements: [
        'Original project concept',
        'Technical feasibility plan',
        'Team background and experience',
        'Development timeline'
      ]
    },
    {
      icon: Users,
      name: 'Creator Fund',
      amount: 'Up to $25K',
      description: 'Support for artists and creators building immersive experiences and virtual worlds',
      color: 'from-purple-500 to-pink-500',
      requirements: [
        'Portfolio of previous work',
        'Detailed project proposal',
        'Community engagement plan',
        'Expected deliverables'
      ]
    },
    {
      icon: Trophy,
      name: 'Ecosystem Grants',
      amount: 'Up to $100K',
      description: 'Large-scale funding for projects that significantly expand the Reverie ecosystem',
      color: 'from-green-500 to-emerald-500',
      requirements: [
        'Strategic value to ecosystem',
        'Scalability potential',
        'Team qualifications',
        'Go-to-market strategy'
      ]
    }
  ];

  const successStories = [
    {
      project: 'MetaSpace Gallery',
      amount: '$45,000',
      description: 'Virtual art gallery platform with NFT integration',
      outcome: '10K+ monthly active users'
    },
    {
      project: 'SocialVerse',
      amount: '$80,000',
      description: 'Social networking platform for virtual worlds',
      outcome: 'Acquired by major tech company'
    },
    {
      project: 'GameForge Studio',
      amount: '$35,000',
      description: 'No-code game creation tools for Reverie',
      outcome: '500+ games created by community'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Grant <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Programs
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Funding the future of immersive experiences. Over $5M distributed to 200+ projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{program.name}</h2>
              <p className={`text-2xl font-bold bg-gradient-to-r ${program.color} text-transparent bg-clip-text mb-4`}>
                {program.amount}
              </p>
              <p className="text-white/60 mb-6">{program.description}</p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-white/80">Requirements:</p>
                {program.requirements.map(req => (
                  <p key={req} className="text-sm text-white/60 flex items-start">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2 mt-2"></span>
                    {req}
                  </p>
                ))}
              </div>
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${program.color} text-white rounded-lg font-semibold hover:scale-105 transition-transform`}>
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{story.project}</h3>
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-green-400 font-semibold mb-3">{story.amount}</p>
                <p className="text-white/60 text-sm mb-4">{story.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/80 text-sm font-semibold">{story.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {['Submit Proposal', 'Initial Review', 'Team Interview', 'Funding Decision'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  {i + 1}
                </div>
                <p className="text-white/80 font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 mt-8">
            Average decision time: 2-3 weeks
          </p>
        </motion.div>
      </div>
    </div>
  );
}
