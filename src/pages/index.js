import { useEffect, useState } from "react";
import Carousel from "src/components/Carousel";
import CookiesConsent from "src/components/CookiesConsent";
import Navbar from "src/components/navbar";

export default function Home() {
  const [storyblockData, setStoryblockData] = useState();
  const fetchApi = async () => {
    const response = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/landing-page?version=draft&token=I7WhvaieXYE0idqvqZf64gtt"
    )
      .then((res) => res.json())
      .catch((err) => console.log("Storyblock", err));

    response?.story && setStoryblockData(response?.story);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <main>
      <Navbar menus={storyblockData?.content?.NavMenus} />
      <Carousel images={storyblockData?.content?.SliderImages} />
      <CookiesConsent />
    </main>
  );
}
