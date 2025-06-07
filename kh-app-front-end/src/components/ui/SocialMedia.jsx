import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import line from "../../assets/images/line.png";
import instagram from "../../assets/images/instagram.png";

function SocialMedia() {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: facebook,
      url: "https://www.facebook.com/profile.php?id=61555951274274&rdid=2hsWIDAy4bBZ2AjI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14DhWCPRsKt%2F#",
    },
    {
      name: "Instagram",
      icon: instagram,
      url: "https://www.instagram.com/yourprofile",
    },
    {
      name: "Line",
      icon: line,
      url: "https://line.me/ti/p/@yourprofile",
    },
    {
      name: "TikTok",
      icon: tiktok,
      url: "https://www.tiktok.com/@yourprofile",
    },
  ];

  return (
    <div className="flex justify-center mt-4">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-8 h-8 transition-transform transform hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
// Note: Replace the image paths with actual paths to your social media icons.
