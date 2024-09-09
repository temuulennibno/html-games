import { TrendingCard } from "./components/TrendingCard";

export default function Home() {
  return (
    <div className="container my-4">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
        <div>
          <TrendingCard title="One piece" ranking={1} image="https://via.placeholder.com/100x200" />
        </div>
      </div>
    </div>
  );
}
