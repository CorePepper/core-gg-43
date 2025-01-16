import { Star } from "lucide-react";

const reviews = [
  {
    title: "耐久性",
    rating: 5,
    text: "特殊繊維を使用し、摩擦に強い厚さで滑りやすさを落として耐久性を考慮した独自開発の設計"
  },
  {
    title: "反応速度",
    rating: 5,
    text: "銀繊維100%使用+独自の編み方でタッチしてからの反応速度が最速"
  },
  {
    title: "快適さ",
    rating: 5,
    text: "特殊繊維ライクラファイバーを使用し、伸縮性に優れていて指にフィット"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold text-center mb-16">
          クオリティ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light/90 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gold mb-4">{review.title}</h3>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-white/80">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center space-x-16">
          <div className="text-center">
            <span className="text-gold text-4xl font-bold block">30万個</span>
            <span className="text-white/80">累計販売数</span>
          </div>
          <div className="text-center">
            <span className="text-gold text-4xl font-bold block">1位</span>
            <span className="text-white/80">Amazonランキング</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;