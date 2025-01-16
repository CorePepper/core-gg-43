import { Trophy, Mail, ArrowRight } from "lucide-react";

const achievements = [
  "KOPL S4 MIDseason Final 2位",
  "KOPL S4 Play Off 3位",
  "KOPL Grand Final 3位",
  "荒野Championship 決勝 8位",
  "KOPL S5 Play Off 1位",
  "KOPL S5 MIDseason M1 Final 6位",
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white block md:inline">Pro E-Sports Team</span>
          <span className="text-gold block md:inline md:ml-2">CORE Slay</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/80 backdrop-blur-sm p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center justify-center md:justify-start">
                  <Trophy className="mr-2" /> 主な実績
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-gold before:rounded-full before:mr-3"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

<div className="w-full md:w-64 flex justify-center">
  <img
    src="/lovable-uploads/45af26eb-fd78-4d95-bbea-58374d6d568e.png"
    alt="Team logo"
    className="w-full max-w-[200px] md:max-w-[256px] h-auto object-contain"
    loading="lazy"
    decoding="async"
  />
</div>

            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
            >
              <Mail className="mr-2" />
              サポート・コラボ依頼はこちら
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
