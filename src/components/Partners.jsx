import React from "react";

const logos = [
  {
    id: 1,
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 3,
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 4,
    name: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    id: 5,
    name: "Airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    id: 6,
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    id: 7,
    name: "Notion",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    id: 8,
    name: "Shopify",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
];

export default function Partners() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-3">Nos acompañan </h2>
   
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center w-36 h-20"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
