import { Carousels } from "./components/Carousels";
import { TrendingCard } from "./components/TrendingCard";
import { TbBrandFacebook, TbSearch } from "react-icons/tb";

export default function Home() {
  return (
    <div className="container my-4">
      <Carousels />
      <TbBrandFacebook />
      <TbSearch />
    </div>
  );
}
