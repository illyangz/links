import Image from "next/image";
import data from "../data.json";

export const dynamic = "force-dynamic",
  runtime = "edge";

function ApplemusicIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M11.977 23.999c-2.483 0-4.898-.777-6.954-2.262a11.928 11.928 0 01-4.814-7.806A11.954 11.954 0 012.3 4.994 11.85 11.85 0 0110.08.159a11.831 11.831 0 018.896 2.104 11.933 11.933 0 014.815 7.807 11.958 11.958 0 01-2.091 8.937 11.855 11.855 0 01-7.78 4.835 12.17 12.17 0 01-1.943.157zm-6.474-2.926a11.022 11.022 0 008.284 1.96 11.044 11.044 0 007.246-4.504c3.583-5.003 2.445-12.003-2.538-15.603a11.022 11.022 0 00-8.284-1.96A11.046 11.046 0 002.966 5.47C-.618 10.474.521 17.473 5.503 21.073zm10.606-3.552a2.08 2.08 0 001.458-1.468l.062-.216.008-5.786c.006-4.334 0-5.814-.024-5.895a.535.535 0 00-.118-.214.514.514 0 00-.276-.073c-.073 0-.325.035-.56.078-1.041.19-7.176 1.411-7.281 1.45a.786.786 0 00-.399.354l-.065.128s-.031 9.07-.078 9.172a.7.7 0 01-.376.35 9.425 9.425 0 01-.609.137c-1.231.245-1.688.421-2.075.801-.22.216-.382.51-.453.82-.067.294-.045.736.051 1.005.1.281.262.521.473.71.192.148.419.258.674.324.563.144 1.618-.016 2.158-.328a2.36 2.36 0 00.667-.629c.06-.089.15-.268.2-.399.176-.456.181-8.581.204-8.683a.44.44 0 01.32-.344c.147-.04 6.055-1.207 6.222-1.23.146-.02.284.027.36.12a.29.29 0 01.109.096c.048.07.051.213.058 2.785.008 2.96.012 2.892-.149 3.079-.117.136-.263.189-.864.31-.914.188-1.226.276-1.576.447-.437.213-.679.446-.867.835a1.58 1.58 0 00-.182.754c.001.49.169.871.55 1.245.035.034.069.066.104.097.192.148.387.238.633.294.37.082 1.124.025 1.641-.126z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SoundcloudIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        {" "}
        <path
          d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10 mt">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center font-mono items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        priority
        className="rounded-full border-2 border-gray-300"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold font-mono mt-4 mb-8 text-2xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes("x") ? (
              <TwitterIcon />
            ) : social.href.includes("github") ? (
              <GitHubIcon />
            ) : social.href.includes("soundcloud") ? (
              <SoundcloudIcon />
            ) : social.href.includes("apple") ? (
              <ApplemusicIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
