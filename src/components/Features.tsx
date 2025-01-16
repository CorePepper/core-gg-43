import { Shield, Zap, Target } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          なぜCORE指サックなのか
        </h2>
        <p className="text-center text-white/80 mb-12">
          ゲーミング体験を革新する3つの特徴
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-navy-light/80 p-8 rounded-lg text-center">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gold mb-4">最高品質の素材</h3>
            <p className="text-white/80">
              汗を素早く吸収し、快適な操作性を維持する特殊素材を採用
            </p>
          </div>

          <div className="bg-navy-light/80 p-8 rounded-lg text-center">
            <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gold mb-4">優れた操作性</h3>
            <p className="text-white/80">
              0.1mm単位で調整された最適な厚みで、画面との接触を最大限に活かす
            </p>
          </div>

          <div className="bg-navy-light/80 p-8 rounded-lg text-center">
            <Target className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gold mb-4">プロ仕様</h3>
            <p className="text-white/80">
              プロゲーマーとの共同開発による、競技シーンで実証された性能
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;