import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Core Slay Kazu",
    role: "KOPL S5 優勝",
    comment: "指サックの中で一番フィット感があり、操作性が良いです。長時間使用しても疲れにくく、大会でも安心して使えます。",
    image: "/lovable-uploads/2912a528-9194-4836-a562-117852dd865c.png"
  },
  {
    name: "Core Slay Yuki",
    role: "KOPL S4 準優勝",
    comment: "反応速度が速く、精密な操作が可能です。他の指サックと比べて耐久性も優れており、長く使えるのが魅力です。",
    image: "/lovable-uploads/538cc242-f436-4151-bd4a-892b1dae7174.png"
  },
  {
    name: "Core Slay Taka",
    role: "荒野Championship 出場",
    comment: "プロとして求められる性能を全て満たしている製品です。特に滑り止め加工が絶妙で、安定したプレイが可能です。",
    image: "/lovable-uploads/55447b48-6e46-4b9e-b824-662a2a78fdbf.png"
  }
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-navy">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" />
          トップページに戻る
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gold">プロ選手</span>
          <span className="text-white">からの声</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gold">{review.name}</h3>
                  <p className="text-white/80 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-white/80">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;