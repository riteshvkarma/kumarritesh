import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/your-profile" },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social = ({ containerStyles = "", iconStyles = "" }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
