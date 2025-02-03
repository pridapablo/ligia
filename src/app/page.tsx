import HeroSection from "./components/HeroSection";
import UserFeedback from "./components/UserFeedback";
import RecentBlogs from "./components/RecentBlogs";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <UserFeedback />
      <RecentBlogs />
    </main>
  );
}
